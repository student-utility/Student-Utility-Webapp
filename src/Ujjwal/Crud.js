import React, {useEffect, useState} from 'react';
import { Form } from './Form';
import './Crud.css';
//import { Create } from './Create';
import { Delete } from './Delete';
import { Update } from './Update';
import { Read } from './Read';
import { Area } from './Area';


export const Crud = () =>{
    const [add, setAdd] = useState('')
    const [val, setVal] = useState()
    // const [ddaattaa, setDdaattaa] = useState([])
    const [read, setRead] = useState([])

    // useEffect(() => {
    //   fetch('/api').then(
    //     response => response.json()
    //   ).then(data => setDdaattaa(data))}
    // , []);
    const handleFormChange = (inputvalue) => {
        setAdd(inputvalue)
        console.log(add)
        
        
    }
    
    const handleFormSubmit = (restaurant_id,name,category,description,id,img_url,menu_id,option_groups,popular,price,size_group,
        size_prices,valll) => {
        if (valll =="add") {
            fetch('https://student-utility-webapp.herokuapp.com/users',{
                method: 'POST',
                body: JSON.stringify({
                  restaurant_id,name,category,description,id,img_url,menu_id,option_groups,popular,price,size_group,
                  size_prices
              }),
              headers: { 
                "Content-type": "application/json; charset=UTF-8",
                "api":1.0
            }
            }).then(response =>{
              console.log(response.statusText)
             })
              
    }
        if (valll =="read") {
        fetch(`https://student-utility-webapp.herokuapp.com/users?id=${id}`,{
          method: 'GET',
          //   body: JSON.stringify({
          //     id,name
          // }),
          // headers: { 
          //     "Content-type": "application/json; charset=UTF-8"
          // }
        }).then(response =>response.json())
          .then(message => console.log(message,setRead(message)))
    }
        if (valll =="del") {
            fetch('https://student-utility-webapp.herokuapp.com/users',{
                method: 'DELETE',
                body: JSON.stringify({
                  id,name
              }),
              headers: { 
                  "Content-type": "application/json; charset=UTF-8",
                  "api":1.0
              }
            }).then(response => console.log(response.statusText))
              
    }
        if (valll =="upcate") {
            fetch('https://student-utility-webapp.herokuapp.com/users',{
                method: 'PUT',
                body: JSON.stringify({
                  id,name,category,valll
              }),
              headers: { 
                "Content-type": "application/json; charset=UTF-8",
                "api":1.0
            }
            }).then(response =>{
               console.log(response.statusText)
              })
    }
        if (valll =="uppri") {
            fetch('https://student-utility-webapp.herokuapp.com/users',{
                method: 'PUT',
                body: JSON.stringify({
                  id,price,valll
              }),
              headers: { 
                "Content-type": "application/json; charset=UTF-8",
                "api":1.0
            }
            }).then(response =>{
               console.log(response.statusText)
              })
    }
        if (valll =="uppop") {
            fetch('https://student-utility-webapp.herokuapp.com/users',{
                method: 'PUT',
                body: JSON.stringify({
                  id,name,popular,valll
              }),
              headers: { 
                "Content-type": "application/json; charset=UTF-8",
                "api":1.0
            }
            }).then(response =>{
               console.log(response.statusText)
              })
    }
        if (valll =="uppp") {
            fetch('https://student-utility-webapp.herokuapp.com/users',{
                method: 'PUT',
                body: JSON.stringify({
                  id,name,price,popular,valll
              }),
              headers: { 
                "Content-type": "application/json; charset=UTF-8",
                "api":1.0
            }
            }).then(response =>{
               console.log(response.statusText)
              })
    }
    }
    return(
        <>
        <Create userInput = {val} onFormChange={handleFormChange} onFormSubmit ={handleFormSubmit} />
        <Delete userInput = {val} onFormChange={handleFormChange} onFormSubmit ={handleFormSubmit} />
        <Update userInput = {val} onFormChange={handleFormChange} onFormSubmit ={handleFormSubmit} />
        <Read userInput = {val} onFormChange={handleFormChange} onFormSubmit ={handleFormSubmit} />
        <Area userInput = {val} onFormChange={handleFormChange} onFormSubmit ={handleFormSubmit} />
        <h1>output</h1>
        <h1>
              <table >
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>price</th>
                    <th>img_url</th>
                  </tr>
                  <tr>
                    <td>{read.id}</td>
                    <td>{read.name}</td>
                    <td>{read.price}</td>
                    <td><img src = {read.img_url}></img></td>
                  </tr>
                  </table>
  </h1>
        </>
    )


}