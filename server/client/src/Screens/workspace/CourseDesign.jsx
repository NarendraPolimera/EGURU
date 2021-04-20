import React, { useState, useReducer } from 'react';
import NaviDesgn from './NaviDesgn';
import StuNav from './Stunav';
import { useParams } from "react-router";
import MapPane from './MapPane';
import Content from './CourseCont';

const rdmap={
  sections:['Getting Started'],
  subsections:[['Introduction']],
  content:[['link']],
  selected:[0,0]
};

function reducer(state, action) {
 
  switch (action.type) {

    case 'addNewSection':
      return { ...state, sections:[...state.sections,'Name Section'], subsections:[...state.subsections,['Name Content']]};

    case 'addNewContent':
      let ci=action.payload;
      state.subsections[ci]=[...state.subsections[ci],'Name Content'];
      return {...state};

    case 'sectionName':
      let e=action.payload[1];
      let i=action.payload[0];
      state.sections[i]=e.target.value;
      return {...state};
    
      case 'contentName':
        let eve=action.payload[2];
        let si=action.payload[0];
        let coi=action.payload[1];
        state.subsections[si][coi]=eve.target.value;
        return {...state};

    case 'delsection':
        let s=action.payload;
        state.subsections.splice(s,1);
        state.sections.splice(s,1);
        return {...state};

    case 'delcontent':
        let sin=action.payload[0];
        let cin=action.payload[1];
        state.subsections[sin].splice(cin,1);
        return {...state};

    case 'select':
      let sel=action.payload;
      return {...state, selected:[sel[0], sel[1]]};

    case 'selectprev':
      let psel=state.selected;
      if(psel[1]>0)
       --psel[1];
      else if(psel[0]>0){
        --psel[0];
        psel[1]=state.subsections[psel[0]].length-1;
      }
      
      return {...state, selected:[psel[0], psel[1]]};
    

    case 'selectnext':
      let nsel=state.selected;
      if(nsel[1]< state.subsections[nsel[0]].length-1)
       ++nsel[1];
      else if(nsel[0]< state.sections.length-1){
        ++nsel[0];
        nsel[1]=0;
      }
      
      return {...state, selected:[nsel[0], nsel[1]]};

    default:
      return state;
  }
}


function CourseDesign(props) {
  let { courseId } = useParams();

 const [state, dispatch] = useReducer(reducer, rdmap);

 function save(){
   console.log(save);
 }
 
  return (
      <>
      <NaviDesgn  save={save}/>
      <StuNav/>
      <div style={{display:'flex', flexWrap:'row wrap', maxHeight:'580px', background: 'linear-gradient(to top, rgb(245, 245, 245), white)'}}>
        <MapPane state={state} dispatch={dispatch}/>
        <Content state={state} dispatch={dispatch}/>
      </div>
      </>
    
  );
}
export default CourseDesign;