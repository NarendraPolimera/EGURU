import React from 'react';
import { Link } from 'react-router-dom';
import Feedback from './feedback';

const CourseCont=()=>{

    return(
        <>
        <div class='coursecont'>
        <i class="fas fa-chevron-circle-left"></i>
        <i class="fas fa-chevron-circle-right" style={{float:'right'}}></i>
        <div class='container'>
            <div class='contBox'>video/pdf/assignment<i class="far fa-file-video"></i></div>
            <i class="fas fa-thumbs-up"></i>
            <Feedback/>
        </div>
        </div>
        </>);
    }
export default CourseCont;