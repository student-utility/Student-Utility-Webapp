import './App.css';
import react, {useState} from 'react';
import CodingPlatform from './anuj/CodingPlatform';
import Ujjwal from './Ujjwal';
import Dee from './Dee';
import Header from './Deepanshu/Header';
import { NoticeBoard } from './Ujjwal/NoticeBoard';
import Home from './anuj/Home';
import pic from './login.PNG'

function App() {
  var [add, setAdd] = useState('')
  var [val, setVal] = useState()
  var [display, setDisplay] = useState(<center><img src={pic}/></center>)
  var [Login, setLogin] = useState()
  var [LoggedIn, setLoggedIn] = useState(false)

  var loginStatus=(data)=>{
    setLogin(data)
    setLoggedIn(true)
    setDisplay(<Home data={data}/>)
  }
  

  const handleFormChange = (inputvalue) => {
      setAdd(inputvalue)
      console.log(add)  
  }

  const changeDisplay = (show)=>{
    if (show =="coding"){
      if (LoggedIn)
      setDisplay(<CodingPlatform logindetails={Login}/>)
      else(setDisplay(<center><img src={pic}/></center>))
    }
    if (show =="blog"){
      if (LoggedIn)
      setDisplay(<Dee/>)
      else(setDisplay(<center><img src={pic}/></center>))
    }
    if (show =="resources"){
      if (LoggedIn)

      setDisplay(<Ujjwal/>)
      else(setDisplay(<center><img src={pic}/></center>))

    }
    if(show=="notice"){
      if (LoggedIn)

      setDisplay(<NoticeBoard/>)
      else(setDisplay(<center><img src={pic}/></center>))

    }
    if (show=="home"){
      if (LoggedIn)
      setDisplay(<Home data ={Login}/>)
      else(setDisplay(<center><img src={pic}/></center>))

    }
  }

 
  return (
    <div>
       <Header showDisplay = {changeDisplay} login={loginStatus}/>
      {display}
     
    </div>
    
  
  );
}

export default App;
