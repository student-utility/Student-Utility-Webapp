import React from 'react';
import react, {useState} from 'react';
import axios from 'axios';

export const Blog = ({userInput, onFormChange, onFormSubmit, }) => {

    const [file, setFile] = useState()
    
    const handleSubmitadd = async event =>{
        event.preventDefault()
        // var location=(document.getElementById('location').value)
        // var description=(document.getElementById('description').value)
        // var map = (document.getElementById('map').value)
        var valll='add'
        const formData = new FormData()
        formData.append('file',file)
        await axios.post('https://student-utility-webapp.herokuapp.com', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }})
        //onFormSubmit(location,description,map,file,valll)
        console.log(valll,formData,file)} 
    const changeHandle = (event) =>{
        onFormChange(event.target.value)
        setFile(event.target.files[0])
    }
    
    return(
        <>
        <form onSubmit = {handleSubmitadd} onChange = {changeHandle} >
            {/* <h1>Submit Location</h1>
            <label className = 'labela'>Location</label>
            <input className ='input' type='text' id='location' required></input>
            <br/>
            <label className = 'labela'>Description</label>
            <textarea id = 'description' required >Enter text here...</textarea>
            <br/>
            <label className = 'labela'>Path</label>
            <input className = 'labela' type = 'text' id = 'map' required></input> */}
            <br/>
            <input className ='input' type='submit'></input>
            <br/>
            <label className = 'labela'>Upload</label>
            <input className = 'input' type = 'file' id = 'file' required></input>

        </form>
        </>
    
    )

}