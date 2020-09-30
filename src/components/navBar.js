import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = (props) => {
 return (
     <div className="nav">
         <Link to='/'>Home</Link>
         <Link to='/trails'>Trails</Link>
         <Link to='/users/:user/journals'>Journals</Link>
     </div>
 )
}

export default NavBar