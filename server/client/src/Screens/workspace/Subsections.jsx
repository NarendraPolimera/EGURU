import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

const SubSection=()=>{
  
    return(
        <>
       
        <div class='subsect'>
            <i class="fa fa-caret-right"/>
            <input placeholder="Section Name"/>
            <i class="fas fa-trash" ></i>
        </div>
        <div class='subsect'>
            <p style={{marginLeft:'0px'}}><i class="fas fa-plus-circle"></i> &nbsp;&nbsp;Add New Section</p>
        </div>
        </>);
    }
export default SubSection;