import React from 'react';
import react, {useState} from 'react';
import axios from 'axios';
// import '.../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Blog = ({userInput, onFormChange, onFormSubmit, }) => {

    const [file, setFile] = useState()
    
    const handleSubmitadd = async event =>{
        event.preventDefault()
        var location=(document.getElementById('location').value)
        var description=(document.getElementById('description').value)
        var map = (document.getElementById('map').value)
        var valll='add'
        // const formData = new FormData()
        // formData.append('file',file)
        // await axios.post('http://localhost:3000', formData, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data'
        //     }})
        onFormSubmit(location,description,map,valll)
        console.log(location,description,map,valll)}
    const changeHandle = (event) =>{
        onFormChange(event.target.value)
        // setFile(event.target.files[0])
    }
    
    return(
        <div>
            
        </div>

    );

}