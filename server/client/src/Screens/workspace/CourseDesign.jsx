import React from 'react';


function CourseDesign(props) {
    
 console.log(props);
  return (
      <div>
        <button onClick={props.back}>back</button>
        welcome {props.cn.title}
      </div>
    
  );
}
export default CourseDesign;