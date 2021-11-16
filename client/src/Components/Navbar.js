import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <div>
       <nav>
        <h1>User Management</h1>

      <div className="nav-links"> 
        <Link className="tags" to="/"> Home </Link>
        <Link  className="tags" to="/add"> Add User </Link>
        <Link  className="tags" to="/about"> About </Link>
      </div>
        
     </nav>

    </div>
  )
}

export default Navbar
