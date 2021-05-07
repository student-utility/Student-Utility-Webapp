import React,{useState} from 'react';
import "./resource.css"
export const Resource = ({userInput, onFormChange, onFormSubmit, backk}) => {
    function goBack(){
        backk()
    }

    const [file, setFile] = useState()
    const handleSubmitadd = (event) =>{
        event.preventDefault()
        var course_code=(document.getElementById('course_code').value)
        var subject_name=(document.getElementById('subject_name').value)
        var teacher_name=(document.getElementById('teacher_name').value)
        var topic_name=(document.getElementById('topic_name').value)
        var resource_link
        var fileName = (document.getElementById('file').value)
        var valll='add'
        setFile((document.getElementById('file')).files[0])
        onFormSubmit(course_code,subject_name,teacher_name,topic_name,resource_link,valll,file,fileName)
        console.log(course_code,subject_name,teacher_name,topic_name,resource_link,valll)} 
    const changeHandle = (event) =>{
        onFormChange(event.target.value)
    }

    return(
        <><center>
        <form onSubmit = {handleSubmitadd} onChange = {changeHandle} >
            <h1>Add the details of the resource</h1>
            <label className = 'labela' size='30px'>Course code</label>
            <input className ='input' type='text' id='course_code' required></input>
            <br/>
            <label className = 'labela'>Subject Name</label>
            <input className ='input' type='text' id='subject_name' required></input>
            <br/>
            <label className = 'labela'>Teacher's name</label>
            <input className='input' type='text' id='teacher_name' required></input>
            <br/>
            <label className = 'labela'>Topic of the resource</label>
            <input className='input' type='text' id='topic_name' required></input>
            <br/>
            <label className = 'labela'>Upload file</label>
            <input className = 'input' type = 'file' id = 'file' required></input>
            <br/>
            <input className ='input' type='submit'></input>

        </form>
        <button onClick={goBack}>Back</button>
        </center>
        </>
    )
}