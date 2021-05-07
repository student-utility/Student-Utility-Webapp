import React,{useState} from 'react';
import '../index.css';
import GoogleLogin from 'react-google-login';

function Header({showDisplay, login}){
  
  const responseGoogle = (res)=>{
    var email=(res.profileObj.email)
    console.log(res)
    var n = email.search("@nituk.ac.in");
    // if(n>=0){
    login(res.profileObj)
    
    console.log('access granted')
    SetLogin(<div>{res.Qs.Te}  <img width="50px" height="50px" src={res.profileObj.imageUrl} /></div>)
    
  // }
  //   else
    // console.log('access denied')

  }
  const rejectGoogle = (res)=>{
    console.log(res)
  }
  var [loggedIn,SetLogin] = useState(<GoogleLogin
    clientId="60439721996-l9td0h43i6m286h1c04ausu040rcnqum.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={rejectGoogle}
    cookiePolicy={'single_host_origin'}
  />)
  var coding =() =>{
    showDisplay("coding")
  }
  var notice = ()=>{
    showDisplay("notice")
  }
  var Blog =() =>{
    showDisplay("blog")
  }
  var resources =() =>{
    showDisplay("resources")
  }
  var home =() =>{
    showDisplay("home")
  }
    return(
        <nav className="navbar navbar-expand-lg" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#" onClick={home}>Student Utility Website</a>
    <button className="navbar-toggler" type="button" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active "  href="https://calendar.google.com/calendar" target ="_blank">Calendar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={coding}>Coding Section</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={notice}>Notice Board</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" onClick={resources}>
            Resources
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" onClick={Blog}>Local Attractions Guide</a>
        </li>
        </ul>
        <div id="login">
       {loggedIn}
      </div>
    
    </div>
  </div>
</nav>
    );
}

export default Header;