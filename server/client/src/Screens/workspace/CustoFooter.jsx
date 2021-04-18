
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustoFooter=(props)=>{

    
    const { about, contacts } = props.formData;
    const handleChange=props.handleChange;

    return(
        <>
<div class="footer" style={{marginTop:'60px',paddingTop:'30px', paddingBottom:'10px'}}>
    <div style={{display:'flex', flexFlow: 'row wrap', gap: '10px' }}>
      <div class="sectionSubHead" style={{flexGrow:'1',textAlign:'center',color:"#676770"}}>
        <h6>About Me</h6>
        <textarea class="inpBox" id="about"
          type="textarea" 
          placeholder="Type Something About Yourself.. ." 
          onChange={handleChange('about')} value={about}/>

      </div>
      <div class="sectionSubHead" style={{flexGrow:'1',textAlign:'center',color:"#676770"}}>
       <h6>Contacts</h6>
       <textarea class="inpBox" id="contact"
          type="textarea" 
          placeholder="Your contacts" 
          onChange={handleChange('contacts')} value={contacts}/>
      </div>
     </div> 
    </div>
    <div class="footer2">Made using EGuru Inc.</div>
    </>
    );

}
export default CustoFooter;