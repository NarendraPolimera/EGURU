import React, { useState } from 'react';
import NaviDesgn from './NaviDesgn';
import Banner from './Banner';
import Sidepane from './sidepane';
import Main from './Main';
import Footer from './CustoFooter';
import useFetch from '../../useFetch';
import { isAuth } from '../../helpers/auth';
import axios from 'axios';
import '../App.css';

function Builder() {
 
  const [load, setload]=useState(1);
  const [formData, setFormData]= useState({title:'', tag:'', author:'', descript:'', introtxt:'',conctxt:'',about:'',contacts:''});
  const [PageId, pagit] = useState('');
  const [CourseList, listing] = useState([]);
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
    console.log(formData);
  }
  const token=isAuth().token;
  const { data, error} = useFetch('/builder/pageinfo',{token});
  if(data && load)
  {  
    setFormData(data.pageDetails);
    setload(0);
    console.log(formData);
    pagit(data.pageDetails._id);
    if(data.pageDetails.courses.length!==0)
    {
      listing(data.pageDetails.courses);
    }
  }
  function save()
  {
    axios.post(`${process.env.REACT_APP_API_URL}/builder/updatePage`, formData)
      .then(res => {
        console.log(res.data);
        alert('saved');
      })
      .catch(err => {
         alert('oops eror occured!');
          console.log(err.message);
        }
      );
      
  }
  const courseChange=(ind, field)=> (event)=>{
    let newArr = [...CourseList]; 
    newArr[ind] = {...newArr[ind], [field]:event.target.value};
    listing(newArr);
    console.log(CourseList);
  }


  return (
    <>
    <NaviDesgn save={save}/>
    <Banner formData={formData} handleChange={handleChange}/>
    <div>
      <div class='content'>
        <Main formData={formData} handleChange={handleChange} Courses={{CourseList, listing, PageId, courseChange}}/>
        <Sidepane/>
      </div>
    </div>
    <Footer formData={formData} handleChange={handleChange}/>
    </>
    );
}

export default Builder;
/**
 <Navbar bg="dark" variant="dark">
    <Nav defaultActiveKey="/" as="ul" className="justify">
      <Nav.Item as="li">
        <Nav.Link href="/" disabled>EGURU</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
          <Nav.Link  href="/profile">{isAuth().name}</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
          <Nav.Link  onSelect={signout} href="/login">SignOut</Nav.Link>
      </Nav.Item> 
      <Nav.Item as="li">
          <Nav.Link  onSelect={signout} >Save</Nav.Link>
      </Nav.Item>     
    </Nav>
    </Navbar>*/



/**
<div>
  {CourseList.map(C => (
    <div key={C.id} >
        <h2>{ C.title }</h2>
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
  
  </div>*/