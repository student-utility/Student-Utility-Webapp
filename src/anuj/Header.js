import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className = 'header'>
            <div className= 'header_option'><h6> Coding </h6></div>
            <div  className= 'header_option'><h6> Blog</h6></div>
            <div  className= 'header_option'><h6> Resource</h6></div>
            <div  className= 'header_option'><h6> Calendar</h6></div>
        </div>
    )
}

export default Header
