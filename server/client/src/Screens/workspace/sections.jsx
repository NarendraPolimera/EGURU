import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import Subsection from './Subsections';

const Sections=(props)=>{
  const Secs=props.state.sections;
    return(
        <>
        {Secs.map((S,index)=>(
            <div>
            <div class='Csections'>
            <i class="fa fa-caret-down" />
            <input placeholder="Section Name" onChange={(event) => props.dispatch({type: 'sectionName', payload:[index,event]})} value={S}/>
            <i class="fas fa-trash" onClick={(event) => props.dispatch({type: 'delsection', payload:index})}></i>
            </div>
            {<Subsection  SecIndex={index} {...props}/>}
        </div>
        ))}
        
        <div class='Csections' onClick={() => props.dispatch({type: 'addNewSection'})}>
            <p style={{marginLeft:'0px'}}><i class="fas fa-plus-circle"></i> &nbsp;&nbsp;Add New Section</p>
        </div>
        </>);
    }
export default Sections;