import React, {useState} from 'react';
import { Resource } from './Resource';
import axios from 'axios';


export const ResourceForm = ({back})=> {
  const [add, setAdd] = useState('')
  const [val, setVal] = useState()
  const [read, setRead] = useState([])


  const handleFormChange = (inputvalue) => {
      setAdd(inputvalue)
      console.log(add)
  }

const handleFormSubmit = (course_code,subject_name,teacher_name,topic_name,resource_link,valll,file,fileName) => {
  if (valll =="add") {
      fetch('https://student-utility-webapp.herokuapp.com/users',{
          method: 'POST',
          body: JSON.stringify({
            course_code,subject_name,teacher_name,topic_name,resource_link,fileName
        }),
        headers: { 
          "Content-type": "application/json; charset=UTF-8",
          "api":1.0
      }
    }).then(response=>response.json())
      .then(message => {
        const formData = new FormData()
        formData.append('file',file)
         axios.post('https://student-utility-webapp.herokuapp.com', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>{              
              resource_link = response.data.file
              fetch('https://student-utility-webapp.herokuapp.com/users',{
              method: 'PUT',
              body: JSON.stringify({
              course_code,subject_name,teacher_name,topic_name,resource_link,fileName
                  }),
        headers: { 
          "Content-type": "application/json; charset=UTF-8",
          "api":1.0
      }
    }) 
            })
        console.log(valll,formData,file) 
        console.log(message,setVal(message))
      })
    console.log(course_code,subject_name,teacher_name,topic_name,resource_link,valll)
  }
}
  return (
    <div>
      <Resource userInput = {val} onFormChange={handleFormChange} onFormSubmit ={handleFormSubmit} backk={back}/> 
    </div>
  );
}

