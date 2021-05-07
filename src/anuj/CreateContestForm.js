import React,{useState} from 'react'
import axios from 'axios';
import "./form.css"

function CreateContestForm() {
        var [f1,setf1] = useState()
        var [f2,setf2] = useState()
        var [f3,setf3] = useState()
        var [f4,setf4] = useState()
        var [f5,setf5] = useState()
        var [o1,seto1] = useState()
        var [o2,seto2] = useState()
        var [o3,seto3] = useState()
        var [o4,seto4] = useState()
        var [o5,seto5] = useState()
    const submitContest = (e) =>{
        e.preventDefault()
        setf1((document.getElementById('f1')).files[0])
        setf2((document.getElementById('f2')).files[0])
        setf3((document.getElementById('f3')).files[0])
        setf4((document.getElementById('f4')).files[0])
        setf5((document.getElementById('f5')).files[0])
        seto1((document.getElementById('o1')).files[0])
        seto2((document.getElementById('o2')).files[0])
        seto3((document.getElementById('o3')).files[0])
        seto4((document.getElementById('o4')).files[0])
        seto5((document.getElementById('o5')).files[0])
        var formData1 = new FormData()
        var formData2 = new FormData()
        var formData5 = new FormData()
        var formData3 = new FormData()
        var formData4 = new FormData()
        var formDatao1 = new FormData()
        var formDatao2 = new FormData()
        var formDatao5 = new FormData()
        var formDatao3 = new FormData()
        var formDatao4 = new FormData()
        formData1.append('file',f1)
        formData2.append('file',f2)
        formData3.append('file',f3)
        formData4.append('file',f4)
        formData5.append('file',f5)
        formDatao1.append('file',o1)
        formDatao2.append('file',o2)
        formDatao3.append('file',o3)
        formDatao4.append('file',o4)
        formDatao5.append('file',o5)
         axios.post('https://student-utility-webapp.herokuapp.com/f1', formData1, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>console.log(response))
         axios.post('https://student-utility-webapp.herokuapp.com/f2', formData2, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>console.log(response))
         axios.post('https://student-utility-webapp.herokuapp.com/f3', formData3, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>console.log(response))
         axios.post('https://student-utility-webapp.herokuapp.com/f4', formData4, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>console.log(response))
         axios.post('https://student-utility-webapp.herokuapp.com/f5', formData5, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>console.log(response))
         axios.post('https://student-utility-webapp.herokuapp.com/o1', formDatao1, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>console.log(response))
         axios.post('https://student-utility-webapp.herokuapp.com/o2', formDatao2, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>console.log(response))
         axios.post('https://student-utility-webapp.herokuapp.com/o3', formDatao3, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>console.log(response))
         axios.post('https://student-utility-webapp.herokuapp.com/o4', formDatao4, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>console.log(response))
         axios.post('https://student-utility-webapp.herokuapp.com/o5', formDatao5, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>console.log(response))
              
        
        var start =document.getElementById('a').value
        var end=document.getElementById('aa').value
        var q1 =document.getElementById('q1').value
        var t1=document.getElementById('t1').value
        var q2 =document.getElementById('q2').value
        var t2=document.getElementById('t2').value
        var q3 =document.getElementById('q3').value
        var t3=document.getElementById('t3').value
        var q4 =document.getElementById('q4').value
        var t4=document.getElementById('t4').value
        var q5 =document.getElementById('q5').value
        var t5=document.getElementById('t5').value
        console.log(start,end)
        fetch(`https://student-utility-webapp.herokuapp.com/coding`,{
        method: 'POST',
        body: JSON.stringify({
          start,end,q1,q2,q3,q4,q5,t1,t2,t3,t4,t5
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response =>response.json())
      .then(message => console.log(message))
        }
        return (
        <div className = "contest_form">
            <form onSubmit ={submitContest} >
              <div className="contest_time">
              <div className="contest_timee">
                <label>time of contest</label>
                
                <input  required type ='time' id ='a'></input>
</div><div className="contest_timee">
                <label>Duration of contest</label>
                <input  required type = 'time' id = 'aa'></input></div></div>
                
                <div className="contest_table">
                <table border ="5px solid black" ><tr>
                <th>S.no</th>
                <th>Question</th>
                <th>test cases</th>
                <th>test case file</th>
                <th>output case file</th>
              </tr>
            <tr>
                  <td>1</td>
                  <td><textarea required type = 'text' id = 'q1'></textarea></td>
                  <td><textarea required type = 'text' id = 't1'></textarea></td>
                  <td><input  required type = 'file' id = 'f1'></input></td>
                  <td><input  required type = 'file' id = 'o1'></input></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><textarea required type = 'text' id = 'q2'></textarea></td>
                  <td><textarea required type = 'text' id = 't2'></textarea></td>
                  <td><input  required type = 'file' id = 'f2'></input></td>
                  <td><input  required type = 'file' id = 'o2'></input></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><textarea required type = 'text' id = 'q3'></textarea></td>
                  <td><textarea required type = 'text' id = 't3'></textarea></td>
                  <td><input  required type = 'file' id = 'f3'></input></td>
                  <td><input  required type = 'file' id = 'o3'></input></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><textarea required type = 'text' id = 'q4'></textarea></td>
                  <td><textarea required type = 'text' id = 't4'></textarea></td>
                  <td><input  required type = 'file' id = 'f4'></input></td>
                  <td><input  required type = 'file' id = 'o4'></input></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><textarea required type = 'text' id = 'q5'></textarea></td>
                  <td><textarea required type = 'text' id = 't5'></textarea></td>
                  <td><input  required type = 'file' id = 'f5'></input></td>
                  <td><input  required type = 'file' id = 'o5'></input></td>
                </tr>
                </table>
                </div>
              <div className="contest_time">
                <input type='submit' ></input></div>

            </form>
        </div>
    )
}

export default CreateContestForm
