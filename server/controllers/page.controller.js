const User=require('../models/auth.model');
const Page=require('../models/page.model');
const Course=require('../models/course.model');
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
sgMail.setApiKey(process.env.MAIL_KEY);

exports.getpageController=(req,res)=>{
    
    const errors=validationResult(req);
    const {token}=req.body
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        const _id=mongoose.Types.ObjectId(jwt.decode(token)._id);
        console.log(_id);
        User.findOne({_id})
        .exec((error,user)=>{
        if(user)
        {
            var pageId=user.pageId.toString();
            let email=user.email.toString();
            console.log(pageId);
            if(pageId=='')
            {
                console.log('ohh lord help me!!please');
                const page=new Page({email});
                page.save((err,page)=>{
                if(err)
                {    console.log(err);
                    return res.status(400).json({error:errorHandler(err)});
                }
                else
                {
                    user.updateOne({pageId:(page._id).toString()},(err,success)=>{
                        if(err)
                        {
                            console.log(err);
                            return res.status(400).json({error:"Something went wrong"});
                        }
                        else
                        {
                            return res.json({pageDetails:page});
                        }
                    })
                    
                }
                });

            }
            else{
                const _id=mongoose.Types.ObjectId(pageId);
                Page.findOne({_id})
                    .exec((error,page)=>{
                    if(page)
                    {
                        return res.json({pageDetails:page});
                    }
                    else{
                        return res.status(402).json({error:'lost your page'});
                    }
                    });
            }
        
        }
        else{
            return res.status(402).json({error:'invalid'});
        }
        });
    }
};


/////////////////////

exports.updatepageController=(req,res)=>{
    
    const errors=validationResult(req);
    const newData=req.body;
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log(newData);
        delete newData.courses;///
        Page.findByIdAndUpdate(newData._id, newData,
        function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                return res.json({message:'successs'});
            }
        });
        
    }
};

////////////////////////////

exports.createcourseController=(req,res)=>{
    
    const errors=validationResult(req);
    const {pageId}=req.body;
    console.log(req.body);
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log(pageId);
        const course=new Course({pageId});
        course.save((err,course)=>{
            if(err)
            {    console.log(err);
                 return res.status(400).json({error:errorHandler(err)});
            }
            else
            {
                console.log(course);
                /////update page...with page.courses with course id
                return res.json({Cdoc:course});
            }
        });
        
    }
};