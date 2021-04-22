import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

import Course from './Course';

const Main=(props)=>{
  
    const { introtxt,conctxt } = props.formData;
    const handleChange=props.handleChange;
    
  

    return(
        <>
        <div class='mainpage'>
        <textarea class="inpBox" id="introtxt" 
          type="textarea" 
          placeholder="Say Something.." 
          onChange={handleChange('introtxt')} value={introtxt}/>
          <div class="container" style={{maxWidth:'850px', alignItems:'center'}}>
            <Course {...props}/>
          </div>

          <textarea class="inpBox" id='conctxt'
          type="textarea" 
          placeholder="Epilogue" 
          onChange={handleChange('conctxt')} value={conctxt}/>
        </div>
        </>);
    }
export default Main;