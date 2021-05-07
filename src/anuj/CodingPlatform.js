import React,{useState,useEffect} from 'react'
import ShowContest from './ShowContest';
import CreateContest from './CreateContest';
import "./cp.css";
import choose from './choose.jpg'

function CodingPlatform({loginDetails}) {
    var [timee,setTime] = useState(new Date().toLocaleTimeString())

    var [display,setDisplay] = useState(<center><img src={choose}/></center>)
    var [q,setQ] = useState()

    const createContest = () =>{
    
         
        setDisplay(<CreateContest/>)
    }   
    const showContest = () =>{
        
        fetch(`https://student-utility-webapp.herokuapp.com/coding`,{
        method: 'GET',
    //     body: JSON.stringify({
    //       start,end
    //   }),
      headers: { 
          "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response =>response.json())
      .then(message => {
          console.log(message)
          var startTime = [Number(message.s.split(":")[0]),Number(message.s.split(":")[1])]
          var startTimeInSec = 3600000*startTime[0]+60000*startTime[1]
          var endTime = [Number(message.e.split(":")[0]),Number(message.e.split(":")[1])]
          var endTimeInSec = 3600000*endTime[0]+60000*endTime[1]

          var actualTime = new Date().toLocaleTimeString()
          var time =[Number(actualTime.split(':')[0]),Number(actualTime.split(':')[1])]
          var timeInSec = 3600000*time[0]+60000*time[1]

          console.log(actualTime,startTime,endTime,time)
          console.log(startTimeInSec,endTimeInSec,timeInSec)
 

        if (timeInSec>=startTimeInSec&&timeInSec<=endTimeInSec){
          setDisplay(<ShowContest data ={message} details={loginDetails}/>)
          setTimeout(()=>{showContest()},((endTime[0]-time[0])*3600000+(endTime[1]-time[1]+1)*60000))

        }
        
        if (timeInSec<startTimeInSec){
            setDisplay(<h1>contest will start soon {message.s}</h1>)
            setTimeout(()=>{showContest()},((startTime[0]-time[0])*3600000+(startTime[1]-time[1])*60000))
        }
        if (timeInSec>endTimeInSec)
            setDisplay(<h1>contest is over {message.e}</h1>)

    })
        
    }   
    return (
        <div><div className="main_button">
            <button onClick= {createContest}>Create contest</button>

            <button onClick= {showContest}>Show contest</button></div>
            {display}
        </div>
    )
}

export default CodingPlatform
