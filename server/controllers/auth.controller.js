const User=require('../models/auth.model');
const expressJwt=require('express-jwt');
const _=require('lodash');
const {OAuth2Client}=require('google-auth-library');
const fetch= require('node-fetch');
const {validationResult}= require('express-validator');
const jwt= require('jsonwebtoken');
const {errorHandler}=require('../helpers/dbErrorHandling');            //custom error handler..
const  sgMail= require('@sendgrid/mail');
sgMail.setApiKey(process.env.MAIL_KEY);

exports.registerController=(req,res)=>{
    
    const errors=validationResult(req);
    const {name,email,password}=req.body;
    console.log(name,email,password);
    //res.json({name,email,password});
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        User.findOne({email})
        .exec((error,user)=>{
            //check if user exists
            if(user)
                return res.status(400).json( {error:"Email is already in use"} );
        });

        //generate activation token
        const token= jwt.sign({name,email,password}, process.env.JWT_ACC_ACTV, {expiresIn:'10m'});

        const emailData={
            from: process.env.EMAIL_FROM,
            to:email,
            subject:'Account link activation',
            html:`
            <h1>please click to activate account</h>
            <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
            <p>This email contains sensitive data</p>
            <p>${process.env.CLIENT_URL}</p>`
        }
        sgMail.send(emailData)
        .then(sent => {
            return res.json({ message: `Email has been sent to ${email}` });
            })
        .catch(err => {
            console.log(err);
            return res.status(400).json({ success: false, errors: errorHandler(err)});
            });
    }
};


//activation and saving to db
exports.activationController=(req,res)=>{
    const {token}=req.body;
    if(token){
        //verify the token is valid  or not or expired
        jwt.verify(token, process.env.JWT_ACC_ACTV,
            (err,decoded)=>{
                if(err){
                    return res.status(401).json({error:'Token has expired. Sign up again'});
                }
                else{
                    //if valid save to db
                    
                    const {name,email,password}=jwt.decode(token);
                    console.log({name,email,password});
                    const user=new User({name,email,password});
                    user.save((err,user)=>{
                        if(err)
                        {
                            return res.status(401).json({error:errorHandler(err)});
                        }
                        else
                        {
                            return res.json({success:true, message:'Sign up success'});
                        }
                    });
                }
            });
    }
    else
    {
        return res.json({message:'error occured, try again'});
    }
    
};

exports.loginController =(req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }

    const {email,password}=req.body;
    User.findOne({email})
    .exec((error,user)=>{
        if(error || !user)
        {
            return res.status(400).json({error:'user does not exist, please Sign up'});
        }

        //authenticate
        if(!user.authenticate(password))
        {
            return res.status(400).json({error:'incorrect password'});
        }

        //generate token
        const token= jwt.sign( { _id:user._id}, process.env.JWT_SECRET, {expiresIn:'1d'});
        const {_id,name,email,role}= user;
        return res.json({token, user:{_id,name,email,role}});

    })
};


//forget password controller
exports.forgetController=(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    const {email}=req.body;
    User.findOne({email},(err,user)=>{
        if(err || !user)
        {
            return res.status(400).json({error:"Invalid User, Sign Up"})
        }

        //generating token using user id.
        const token= jwt.sign( { _id:user._id }, process.env.JWT_RESET_PASS, {expiresIn:'10m'});
         
        //sending email
        const emailData={
            from: process.env.EMAIL_FROM,
            to:email,
            subject:'Password Reset Link',
            html:`
            <h1>please click to rset your password</h>
            <p>${process.env.CLIENT_URL}/users/password/reset/${token}</p>
            <p>This email contains sensitive data</p>
            <p>${process.env.CLIENT_URL}</p>`
        }

        user.updateOne({resetPasswordLink:token},(err,success)=>{
            if(err)
            {
                return res.status(400).json({error:"Something went wrong"});
            }
            else
            {
                //send mail
                sgMail.send(emailData)
                .then(sent=>{ return res.json({message:`Check your Email- ${email}`}) })
                .catch(err=>{ return res.json({error:err.message})});
            }
        })
    })


};


//reset controller
exports.resetController=(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    const {newPassword, resetPasswordLink}= req.body;
    if(resetPasswordLink)
    {
        jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASS, function (err, decoded){
            if(err)
            {
                return res.json(400).json({error:'Expired link, please try again'});
            }
            User.findOne({resetPasswordLink},(err,user)=>{
                if(err || !user)
                {
                    return res.status(400).json({error: 'Something went wrong'});
                }
                const updatedFields={ password:newPassword, resetPasswordLink:''};
                user=_.extend(user, updatedFields);
                user.save((err,result)=>{
                    if(err)
                    {
                        return res.status(400).json({error:'Error reseting the password'});
                    }
                    return res.json({message: "Updated the new password"});
                })
            });

        });
    }

}