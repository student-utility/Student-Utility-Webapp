import React,{useState} from 'react'
import CreateContestForm from './CreateContestForm';

function CreateContest() {
    var [time,setTime] = useState(new Date().toLocaleTimeString())
    var [display,setDisplay] = useState()
    var [count,setCount] = useState(0)
   
    
    return (
        <div>
           <CreateContestForm/>
        </div>
    )
}

export default CreateContest
