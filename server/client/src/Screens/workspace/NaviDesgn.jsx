import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Prof } from '../../assets/profile-user.svg';

import {  signout, isAuth } from '../../helpers/auth';

const NaviDesgn=()=>{
    return(
        <>
        <nav class="navbar navbar-expand-sm" style={{paddingBottom:"0px",paddingTop:"0px"}}>
        <div class="container">
        <ul class="mr-auto" style={{marginTop:"-3px"}}> 
              <li style={{display: "inline"}}><Link to="/"  class="Brand">EGURU</Link></li>
              </ul>
  
          <ul class="ml-auto" style={{marginTop:"-3px"}}> 
              <li style={{display: "inline"}}><button class="save-button" style={{fontSize:"13px"}}> SAVE </button></li>
              <li style={{display: "inline"}}><Link to="/profile" class="icon-link"><Prof/></Link></li>
          </ul>
        </div>
      </nav></>);
    }
export default NaviDesgn;