import React, {useState} from 'react';
import Img from './download.png'
import  img from './1.jpg'
import imgg from './2.png'
import imggg from './4.jpg'
import "./board.css"
export const NoticeBoard = ()=>{
    var [notice, setNotice] = useState({'notice': []});
    var [count, setCount] = useState(0);
    var [view,setView] = useState();
    
        if(count<1)
        {
          setCount(count+1);
        fetch('https://student-utility-webapp.herokuapp.com/notice',{
          method: 'GET',
          headers: { 
          "Content-type": "application/json; charset=UTF-8",
          "api":1.0
      }
    }).then(response=>response.json())
      .then(message => {
          setNotice(message);
          
          //console.log(data);
          console.log(message);
      })
    }
    return (<div className="notice_board">
      <div className="notice_board_left"></div>
    <div className="notice_board_middle">
      <center><img src={Img}/></center>
      <br/>
      <center><img src={img}/></center>
      <br/>
      <center><img src={imgg}/></center>
      <br/>
      <center><img src={imggg}/></center>
    </div >
    <div className="notice_board_right"></div>
    </div>
    )
    }
