import React, { useState } from 'react';
import NaviDesgn from './NaviDesgn';
import StuNav from './Stunav';
import { useParams } from "react-router";
import MapPane from './MapPane';
import Content from './CourseCont';


function CourseDesign(props) {
  let { courseId } = useParams();
 console.log(courseId);

 const [sections, addSection]=useState( [ { sName:'Getting Started', sContent:[{cName:'Introduction'}] } ] );
  return (
      <>
      <NaviDesgn/>
      <StuNav/>
      <div style={{display:'flex', flexWrap:'row wrap', maxHeight:'580px', background: 'linear-gradient(to top, rgb(245, 245, 245), white)'}}>
        <MapPane sections={sections} />
        <Content/>
      </div>
      </>
    
  );
}
export default CourseDesign;

/**
 <div>
        <button onClick={props.back}>back</button>
        welcome {props.cn.title}
      </div>
 */