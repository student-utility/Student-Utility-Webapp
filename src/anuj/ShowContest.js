import React,{useState} from 'react'
import axios from 'axios';
function ShowContest({data, details}) {
    
    var [a1,seta1] = useState()
    var [a2,seta2] = useState()
    var [a3,seta3] = useState()
    var [a4,seta4] = useState()
    var [a5,seta5] = useState()

    const q1submit = (e)=>{
        e.preventDefault()
        seta1((document.getElementById('a1')).files[0])
        var formData1 = new FormData()
        formData1.append('file',a1)
        axios.post('https://student-utility-webapp.herokuapp.com/a1', formData1, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>{
                console.log(response)

                if (response.status ==200){
                alert(`${response.data.a1}`)
                if (response.data.a1=='pass')
                document.getElementById('r1').style.backgroundColor="green"
                else
                document.getElementById('r1').style.backgroundColor="red"


            }
                if (response.status ==500){
                console.log(response)
                alert(`try again,server error`)

            }
        }).catch(function (error) {
            // handle error
            alert('something wrong ,try again');
          })

    }
    const q2submit = (e)=>{
        e.preventDefault()
        seta2((document.getElementById('a2')).files[0])
        var formData2 = new FormData()
        formData2.append('file',a2)
        axios.post('https://student-utility-webapp.herokuapp.com/a2', formData2, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>{
                console.log(response)

                if (response.status ==200){
                alert(`${response.data.a2}`)
                if(response.data.a2=='pass')
                document.getElementById('r2').style.backgroundColor="green"
                else
                document.getElementById('r2').style.backgroundColor="red"

            }
                if (response.status ==500){
                console.log(response)
                alert(`try again,server error`)
            
            }
        }).catch(function (error) {
            // handle error
            alert('something wrong ,try again');
          })

    }
    const q3submit = (e)=>{
        e.preventDefault()
        seta3((document.getElementById('a3')).files[0])
        var formData3 = new FormData()
        formData3.append('file',a3)
        axios.post('https://student-utility-webapp.herokuapp.com/a3', formData3, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>{
                console.log(response)

                if (response.status ==200){
                alert(`${response.data.a3}`)
                if(response.data.a3=='pass')
                document.getElementById('r3').style.backgroundColor="green"
                else
                document.getElementById('r3').style.backgroundColor="red"
            }
                if (response.status ==500){
                console.log(response)
                alert(`try again,server error`)

            }
        }).catch(function (error) {
            // handle error
            alert('something wrong ,try again');
          })

    }
    const q4submit = (e)=>{
        e.preventDefault()
        seta4((document.getElementById('a4')).files[0])
        var formData4 = new FormData()
        formData4.append('file',a4)
        axios.post('https://student-utility-webapp.herokuapp.com/a4', formData4, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>{
                console.log(response)

                if (response.status ==200){
                alert(`${response.data.a4}`)
                if(response.data.a4=='pass')
                document.getElementById('r4').style.backgroundColor="green"
                else
                document.getElementById('r4').style.backgroundColor="red"
            }
                if (response.status ==500){
                console.log(response)
                alert(`try again,server error`)

            }
        }).catch(function (error) {
            // handle error
            alert('something wrong ,try again');
          })

    }
    const q5submit = (e)=>{
        e.preventDefault()
        seta5((document.getElementById('a5')).files[0])
        var formData5 = new FormData()
        formData5.append('file',a5)
        axios.post('https://student-utility-webapp.herokuapp.com/a5', formData5, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}).then(response=>{
                console.log(response)

                if (response.status ==200){
                alert(`${response.data.a5}`)
                if(response.data.a5=='pass')
                document.getElementById('r5').style.backgroundColor="green"
                else
                document.getElementById('r5').style.backgroundColor="red"
            }
                if (response.status ==500){
                console.log(response)
                alert(`try again,server error`)
            }
        }).catch(function (error) {
            // handle error
            alert('something wrong ,try again');
          })

    }
    return (
        <div>
           <center><h1> <div>Contest Timing {data.s}-{data.e}</div></h1></center>
           <table border = '5px'><tr>
               <th>S.no</th>
               <th>Question</th>
               <th>test cases</th>
               <th>submit</th></tr>

            <tr id='r1'>
                <td>1.</td>
                <td>{(data.q1)}</td>
                
               <td>{data.t1}</td>
               <td><form onSubmit ={q1submit}><input type = 'file' id = 'a1'></input>
                <br/>
                <input type='submit'></input></form></td>
                
                
             </tr>   
          
            <tr id="r2">
                <td>2.</td>
                <td>{(data.q2)}</td>
                
               <td>{data.t2}</td>
               <td><form onSubmit ={q2submit}><input type = 'file' id = 'a2'></input>
                <br/>
                <input type='submit'></input></form></td>
                
                
             </tr>   
            <tr id = "r3">
                <td>3.</td>
                <td>{(data.q3)}</td>
                
               <td>{data.t3}</td>
               <td><form onSubmit ={q3submit}><input type = 'file' id = 'a3'></input>
                <br/>
                <input type='submit'></input></form></td>
                
                
             </tr>   
            <tr id = "r4">
                <td>4.</td>
                <td>{(data.q4)}</td>
                
               <td>{data.t4}</td>
               <td><form onSubmit ={q4submit}><input type = 'file' id = 'a4'></input>
                <br/>
                <input type='submit'></input></form></td>
                
                
             </tr>   
          
            <tr id= "r5">
                <td>5.</td>
                <td>{(data.q5)}</td>
                
               <td>{data.t5}</td>
               <td><form onSubmit ={q5submit}><input type = 'file' id = 'a5'></input>
                <br/>
                <input type='submit'></input></form></td>
                
                
             </tr>   
          </table>
          </div>

    )
}

export default ShowContest
