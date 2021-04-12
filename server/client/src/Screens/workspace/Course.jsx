import React from 'react';

import Eye from '../../assets/eye.png';
import Edit from '../../assets/edit.png';

function Course(props) {

  const CL = props.CourseList;
  function addCourse(e) {
    let T = document.getElementById("Title");
    let I = document.getElementById("id");
    props.listing(CL => [...CL, { title: T.value, id: I.value }]);
    T.value = '';
    I.value = '';
    console.log(CL);
  }


  return (
    <>
      <div>
        {CL.map(C => (
          <div key={C.id} >
            <h2>{C.title}</h2>
            <button onClick={() => props.edit(C)}>edit</button>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          required
          id="Title"
          placeholder="Title"
        />
        <input
          type="text"
          required
          id="id"
          placeholder="id"
        />
        <button onClick={addCourse}>Add Course</button>
      </div>
      <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '80px' }}>
        <div class="courseCard">
          <div class="image">
            <img src="https://picsum.photos/300" alt="" />
          </div>

          <div class="wrapper">
            <input class="inpBox" id="cTitle"
              placeholder="course name" />
            <textarea class="inpBox"
              placeholder="course description" />
            <table class="ctable">
              <tr><td>Duration</td><td>0 hrs</td></tr>
              <tr><td>Ratings</td><td>0 %</td></tr>
              <tr><td>Enrolled</td><td>0 </td></tr>
            </table>
            <div class="btns">
              <button><img src={Edit} alt='edit' /></button>
              <button><img src={Eye} alt='view' /></button>
            </div>
          </div>
        </div>
        <div class="addCourse">+</div>
      </div>


    </>
  );

}
export default Course;