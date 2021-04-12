import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

import Course from './Course';
import CourseDesign from './CourseDesign';

const Main=()=>{
  const [formData, setFormData] = useState({ introtxt:'',conctxt:'' });
    const { introtxt,conctxt } = formData;

    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
    }

  const [CourseList, listing] = useState([]);
  const [page, change] = useState(0);
  const [cname, changename] = useState({});
  function edit(e){
    changename(e);
    change(1);
  }
  function back(e){
    change(0);
  }
    return(
        <>
        <div class='mainpage'>
        <textarea class="inpBox" id="introtxt"
          type="textarea" 
          placeholder="Say Something.." 
          onChange={handleChange('introtxt')} value={introtxt}/>
          <div class="container" style={{maxWidth:'850px'}}>
          {page===0 && <Course CourseList={CourseList} listing={listing} edit={edit}/>}
          {page===1 && <CourseDesign cn={cname} back={back}/>}
          </div>
        </div>
        </>);
    }
export default Main;