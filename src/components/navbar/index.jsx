import React, { useState } from "react";
import {FaBars,FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import './style.scss'

var data =[
    {
        label:'Home',
        to:'/'
    },
    {
        label:'About',
        to:'/about'
    },
    {
        label:'Skills',
        to:'/skills'
    },
    {
        label:'Resume',
        to:'/resume'
    },
    {
        label:'Projects',
        to:'/projects'
    },
    {
        label:'Contact',
        to:'/contact'
    }
    
]
var Navbar=()=>{
    var [togleicon,settogleicon] = useState()
var handletogle = () =>{
settogleicon(!togleicon)
console.log(togleicon)

}

return(
    <div>
        <nav className="navbar">
            <div className="navbar_container">
                <Link to='/' className="navbar_container_logo">
                <FaReact size={30}/>
                </Link>
            </div>
            <ul className={`navbar_container_menu ${togleicon ? 'active':"" }`}>
{data.map(
(item,key)=>(
    <li key={key} className="navbar_container_menu_item">
 <Link className="navbar_container_menu_item_links" to={item.to}>
 {item.label}
 </Link>

    </li>
)
)}

            </ul>
            <div className="nav_icon" onClick={handletogle}>
 {togleicon ? <HiX size={30}/> : <FaBars size={30} />}

            </div>
        </nav>

    </div>
)

}
export default Navbar