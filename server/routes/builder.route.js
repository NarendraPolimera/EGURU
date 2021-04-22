const express=require('express');
const Router=express.Router();

//validation
const {getpageController, updatepageController,createcourseController}=require('../controllers/page.controller.js');




Router.post('/pageinfo',getpageController);
Router.post('/updatePage',updatepageController);
Router.post('/createCourse',createcourseController);


module.exports=Router;