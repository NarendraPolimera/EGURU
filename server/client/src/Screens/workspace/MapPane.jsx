import React, { useState } from 'react';
import Sections from './sections';
//import { Link } from 'react-router-dom';

const MapPane=()=>{
  
    return(
        <>
        <div class='mappane'>
        <div class="sectionSubHead dashboard">Dashboard</div>
        <div>
            <Sections/>
        </div>
        </div>
        </>);
    }
export default MapPane;