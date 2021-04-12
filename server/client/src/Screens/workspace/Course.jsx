import React from 'react';


function Course(props) {
    
  const CL=props.CourseList;
  function addCourse(e){
    let T=document.getElementById("Title");
    let I=document.getElementById("id");
    props.listing(CL=>[...CL,{title:T.value, id:I.value}]);
    T.value='';
    I.value='';
    console.log(CL);
    }
    
  
  return (
    <>
    <div>
    {CL.map(C => (
      <div key={C.id} >
          <h2>{ C.title }</h2>
          <button  onClick={()=>props.edit(C)}>edit</button>
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

    <div class="courseCard">
      <div class="image">
         <img src="https://picsum.photos/300" alt=""/>
      </div>
      
        <div class="wrapper">
        <input class="inpBox" id="cTitle"
          placeholder="course name" />
          <textarea 
          placeholder="course description" />
          
          <div class="btns">
            <button>Edit</button>
            <button>View</button>
          </div>
          </div>
        </div>
    <div class="addCourse"></div>
    </>
  );
  
}
export default Course;