const express=require('express');
const Router=express.Router();

//validation
const {getpageController, updatepageController,createcourseController,getCourseHeads,getCourseDetails,setCourseDetails}=require('../controllers/page.controller.js');




Router.post('/pageinfo',getpageController);
Router.post('/updatePage',updatepageController);
Router.post('/createCourse',createcourseController);
Router.post('/courseheads',getCourseHeads);
Router.post('/courseinfo',getCourseDetails);
Router.post('/updateCourse',setCourseDetails);
module.exports=Router;