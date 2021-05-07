import React from 'react';

export const Create = ({userInput, onFormChange, onFormSubmit, }) => {


    
    const handleSubmitadd = (event) =>{
        event.preventDefault()
        var upload=(document.getElementById('upload').value)
        var valid=(document.getElementById('valid').value)
        var valll='add'
        onFormSubmit(upload,valid,valll)
        console.log(upload,valid,valll)} 
    const changeHandle = (event) =>{
        onFormChange(event.target.value)

    }
    
    return(
        <>
        <form onSubmit = {handleSubmitadd} onChange = {changeHandle} >
            <h1>Add</h1>
            <label className = 'labela'>Date of Upload</label>
            <input className ='input' type='date' id='upload' required></input>
            <br/>
            <label className = 'labela'>valid Date</label>
            <input className ='input' type='date' id='valid' required></input>
            <br/>
            <input className ='input' type='submit'></input>
        </form>
        </>
    
    )

}