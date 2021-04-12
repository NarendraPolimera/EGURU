
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustoFooter=()=>{

    const [formData, setFormData] = useState({ about:'',contacts:'' });
    const { about, contacts } = formData;

    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
    }

    return(
        <>
<div class="footer" style={{marginTop:'60px'}}>
    <div style={{display:'flex', flexFlow: 'row wrap', gap: '10px' }}>
      <div style={{flexGrow:'1',textAlign:'center',color:"#676770"}}>
        <h6>About Me</h6>
        <textarea class="inpBox" id="about"
          type="textarea" 
          placeholder="Type Something About Yourself.. ." 
          onChange={handleChange('about')} value={about}/>

      </div>
      <div style={{flexGrow:'1',textAlign:'center',color:"#676770"}}>
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