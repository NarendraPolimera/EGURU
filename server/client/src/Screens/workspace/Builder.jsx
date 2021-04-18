import React, { useState } from 'react';
import NaviDesgn from './NaviDesgn';
import Banner from './Banner';
import Sidepane from './sidepane';
import Main from './Main';
import Footer from './CustoFooter';
import '../App.css';

function Builder() {

  const [formData, setFormData] = useState({ title: '', tagline: '', author: '', descript:'' });
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
    console.log(formData);
  }

  const [mainData, setMainData] = useState({ introtxt:'',conctxt:'' });
  const handleMain = text => e => {
    setMainData({ ...mainData, [text]: e.target.value });
   }
  const [CourseList, listing] = useState([{id:0}]);

  const [footerData, setFooterData] = useState({ about:'',contacts:'' });
  const handleFooter = text => e => {
    setFooterData({ ...footerData, [text]: e.target.value });
}

  return (
    <>
    <NaviDesgn/>
    <Banner formData={formData} handleChange={handleChange}/>
    <div>
      <div class='content'>
        <Main formData={mainData} handleChange={handleMain} Courses={{CourseList, listing}}/>
        <Sidepane/>
      </div>
    </div>
    <Footer formData={footerData} handleChange={handleFooter}/>
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