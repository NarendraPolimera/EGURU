import React from 'react';
import NaviDesgn from './NaviDesgn';
import StuNav from './Stunav';
import { useParams } from "react-router";
import MapPane from './MapPane';
import Content from './CourseCont';


function CourseDesign(props) {
  let { courseId } = useParams();
 console.log(courseId);
  return (
      <>
      <NaviDesgn/>
      <StuNav/>
      <div style={{display:'flex', flexWrap:'row wrap', height:'500px'}}>
        <MapPane/>
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