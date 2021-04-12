import React from 'react';
import NaviDesgn from './NaviDesgn';
import Banner from './Banner';
import Sidepane from './sidepane';
import Main from './Main';
import Footer from './CustoFooter';
import '../App.css';

function Builder() {
  

  
  return (
    <>
    <NaviDesgn/>
    <Banner/>
    <div>
      <div class='content'>
        <Main/>
        <Sidepane/>
      </div>
    </div>
    <Footer/>
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