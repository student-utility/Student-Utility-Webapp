import React, {useState} from 'react';
import {ResourceForm} from './Ujjwal/ResourceForm'
import {ResourceData} from './Ujjwal/ResourceData'
import {NoticeBoard} from './Ujjwal/NoticeBoard'
function Ujjwal() {
  var [view, setView] = useState(<ResourceData/>);
  function FormFunction(){
    setView(<ResourceForm back={backButton}/>)

  }
  
  function backButton(){
    setView(<ResourceData/>);
  }
  return (
    <div>
      <center><button onClick = {FormFunction}>
        Upload Resource
      </button></center>
      {view}
    </div>
  );
}
export default Ujjwal;
