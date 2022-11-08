import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import "./Nav.css"
import logo from '../img/logo.png'
import  profile from '../img/img_1.png'

export default function Nav() {
    const [show, setShow] =useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [click, setClick] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
       window.addEventListener("scroll",()=>{
        if(window.scrollY > 50) {
            setShow(true);
        }else{
            setShow(false)
        }

       
       })

        return()=>{
            window.removeEventListener("scroll",()=>{})
            
        }
    },[]);
    


    window.addEventListener("click",()=> {
     setClick(true)
      
    })

    const hadleChange = (e)=> {
      setSearchValue(e.target.value);
      navigate(`/search?q=${e.target.value}`)

    }

   
    return (

    <nav className={`nav ${show && "nav_black"}`}>
      <img src={logo} className="nav_logo" alt="gomovie" onClick={()=>window.location.reload()}/>
      <span className="search">< i className='xi-search' /></span>
      <input value={searchValue} onChange={hadleChange} className={`nav_search ${click && "show"}`} type='text' placeholder='검색' />
      <img src={profile} className="nav_profile" alt="프로필" />
    </nav>
    
  )
    }

