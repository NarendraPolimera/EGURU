import React from 'react';
import { Link } from 'react-router-dom';
import Feedback from './feedback';

const CourseCont=()=>{

    return(
        <>
        <div class='coursecont'>
        <i class="fas fa-chevron-circle-left"></i>
        <i class="fas fa-chevron-circle-right" style={{float:'right'}}></i>
        <div class='container' style={{marginTop:'20px'}}>
            <h4 style={{margin:'auto', textAlign:'center',letterSpacing:'2px', color:'grey'}}>Introduction</h4>
            <div class='contBox'>
                <i class="far fa-file-video" title='add video'></i>
                <i class="far fa-file-pdf" title='add pdf'></i>
                <i class="far fa-clipboard" title='add assignment'></i>
                <i class="fas fa-thumbs-up" id="like"></i>
            </div>
            
            <Feedback/>
        </div>
        </div>
        </>);
    }
export default CourseCont;