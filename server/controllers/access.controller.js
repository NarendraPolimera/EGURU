const User=require('../models/auth.model');
const Page=require('../models/page.model');
const Course=require('../models/course.model');
const Profile=require('../models/profile.model');
const mongoose=require('mongoose');
const expressJwt=require('express-jwt');
const _=require('lodash');
const {OAuth2Client}=require('google-auth-library');
const fetch= require('node-fetch');
const {validationResult}= require('express-validator');
const jwt= require('jsonwebtoken');
const {errorHandler}=require('../helpers/dbErrorHandling');            //custom error handler..
const  sgMail= require('@sendgrid/mail');
const { lte } = require('lodash');
var async = require("async");
sgMail.setApiKey(process.env.MAIL_KEY);



exports.getCourseSettings=(req,res)=>{
    
    const errors=validationResult(req);
    const {courseId}=req.body;
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log('help lord', courseId);
        Course.findOne({_id:mongoose.Types.ObjectId(courseId)})
                .exec((error,course)=>{
                if(course)
                {
                    console.log("ohh lord, help please");
                    return res.json({name:course.cname, members: course.members, requests: course.memRequest});
                }
                else{
                    return res.status(400).json({error:'Course Missing'});

                }
                
            })

    }
};

/////////////////////////////

exports.addMember=(req,res)=>{
    
    const errors=validationResult(req);
    const {courseId, student}=req.body;
    console.log(req.body);
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log(courseId, student);
        Course.findByIdAndUpdate(mongoose.Types.ObjectId(courseId), {$push:{members:student}, $pull:{memRequest:student} },
            function (err, docs) {
                if (err){
                    console.log(err);
                    return res.status(422).json({error:'Something went wrong'});
                }
                else{
                    return res.json({message:'updated'})
                }
            });
   
    }
};

/////////////////////////////////////

exports.getProfile=(req,res)=>{
    
    const errors=validationResult(req);
    const {email}=req.body;
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log('help lord', email);
        Profile.findOne({email})
                .exec((error,profile)=>{
                if(profile)
                {
                    return res.json({profile});
                }
                else{
                    const profile=new Profile({email});
                    profile.save((err,profile)=>{
                    if(err)
                    {   
                        console.log(err);
                        return res.status(400).json({error:errorHandler(err)});
                    }
                    else{
                        return res.json({profile});
                    }
                    
                    });

                }
                
            })

    }
};


exports.updateProfile=(req,res)=>{
    
    const errors=validationResult(req);
    const {formData}=req.body;
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log('help lord', formData);
        Profile.findByIdAndUpdate(formData._id, formData,
        function (err, docs) {
            if (err){
                console.log(err);
                return res.status(400).json({error:errorHandler(err)});

            }
            else{
                return res.json({message:"success"})
            }
        });

    }
};