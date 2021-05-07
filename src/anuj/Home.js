import React from 'react'
import "./home.css"
function Home({data}) {
    return (
        <div>
            <div className="box" >
               <center><h1>Welcome to our Website</h1></center> 
               <center> <img  src={data.imageUrl}/>
</center>
<center><h4 >Name: {data.name}</h4></center>
<center><h4>Email: {data.email}</h4></center>
                
                
                
            </div>
            
        </div>
    )
}

export default Home

