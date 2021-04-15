import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

const SubSection=()=>{
  
    return(
        <>
        <div class="sscont">
        <div class='subsect'>
            <input placeholder="Section Name"/>
            <i class="far fa-times-circle"></i>
        </div>
        <div class='subsect'>
            <p style={{marginLeft:'0px',marginBottom:'0px'}}><i class="fas fa-plus-circle"></i> &nbsp;&nbsp;Add Content</p>
        </div>
        </div>
        </>);
    }
export default SubSection;