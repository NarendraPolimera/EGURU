import React from 'react';
import { useHistory } from "react-router-dom";
import Eye from '../../assets/eye.png';
import Edit from '../../assets/edit.png';

function Course(props) {
  let history = useHistory();
  const CL = props.Courses.CourseList;
  function addCourse(e) {
    let k=CL[CL.length-1].id;
    props.Courses.listing(CL => [...CL, { id: k+1 }]);
    console.log(CL);
  }


  return (
    <>
      
      <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '100px', justifyContent:'center', position:'static' }}>
        {CL.map(C=>(
         
         <div class="courseCard" key={C.id}>
          <div class="image">
            <img src="https://picsum.photos/300" alt="" />
          </div>

          <div class="wrapper">
            <input class="inpBox" id="cTitle"
              placeholder="course name" value={C.Title}/>
            <textarea class="inpBox"
              placeholder="course description" value={C.Descript}/>
            <table class="ctable">
              <tr><td>Duration</td><td>0 hrs</td></tr>
              <tr><td>Ratings</td><td>0 %</td></tr>
              <tr><td>Enrolled</td><td>0 </td></tr>
            </table>
            <div class="btns">
              <button title="Edit Course" onClick={() => history.push('builder/coursedesign/'+C.id)} ><img src={Edit} alt='edit' /></button>
              <button title="View Course" onClick={() => history.push('builder/courseview/'+C.id)} ><img src={Eye} alt='view' /></button>
            </div>
          </div>
        </div>

        ))}
        <div style={{width:'270px',height:'300px'}}>
        <button class="addCourse" onClick={addCourse} title="Add New Course">+</button></div>
      </div>


    </>
  );

}
export default Course;