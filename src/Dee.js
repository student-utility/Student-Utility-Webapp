import './App.css';
import react, {useState} from 'react';
// import CodingPlatform from './anuj/CodingPlatform';
// import Ujjwal from './Ujjwal';
import { Blog } from './Deepanshu/Blog';
import { Header } from './Deepanshu/Header';
import Description from './Deepanshu/Description';

function Dee() {
  const [add, setAdd] = useState('')
  const [val, setVal] = useState()
  const [read, setRead] = useState([])


  const handleFormChange = (inputvalue) => {
      setAdd(inputvalue)
      console.log(add)  
  }

  function click(){
    fetch(`https://student-utility-webapp.herokuapp.com/users`,{
      method: 'GET',
    }).then(response =>response.json())
      .then(message => console.log(message,setVal(message)))
}
const handleFormSubmit = (location,description,map,valll) => {
  if (valll =="add") {
      fetch('https://student-utility-webapp.herokuapp.com/users',{
          method: 'POST',
          body: JSON.stringify({
            location,description,map
        }),
        headers: { 
          "Content-type": "application/json; charset=UTF-8",
          "api":1.0
      }
    })
    console.log(location,description,map,valll)
  }}
  return (
    <div>
      {/* <CodingPlatform/> */}
       {/* <Test/> */}
       {/* <Ujjwal/> */}
      {/* <Header/> */}
      <Description />

    </div>
  
  );
}

export default Dee;
