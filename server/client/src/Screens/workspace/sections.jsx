import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import Subsection from './Subsections';

const Sections=()=>{
  
    return(
        <>
        <div>
        <div class='Csections'>
            <i class="fa fa-caret-right"/>
            <input placeholder="Section Name"/>
            <i class="fas fa-trash" ></i>
        </div>
                <Subsection/>
        </div>
        <div class='Csections'>
            
            <p style={{marginLeft:'0px'}}><i class="fas fa-plus-circle"></i> &nbsp;&nbsp;Add New Section</p>
        </div>
        </>);
    }
export default Sections;