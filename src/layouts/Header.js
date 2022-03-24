import React, {useState, useEffect } from 'react'
import styled  from 'styled-components'
import { useNavigate, useLocation, Link } from "react-router-dom";
import Flag from 'react-world-flags'
import Hamburger from 'hamburger-react'
import { getByDisplayValue } from '@testing-library/react';


const HeaderWrapper = styled.header`
display:flex;
flex-direction:row;
width:100%;
height:100px;
position:fixed;
background:white;
justify-content:center;
align-items:center;
gap:2rem;
  a{
    font-size:1.5rem;
  }
  nav{
    display:flex;
    flex-direction:row;
    gap:2rem;
    background:white;
  }
  .hamburger-react{
    display:none;
  }
  .logo{
    font-size:1.5rem;
    color:blue;
    font-weight:bold;
  }
  .logo >span{
    color:black;
  }
@media(max-width:1020px){
  display:flex;
  position:relative;
  nav{
    position:absolute;
    height:100vh;
    width:100%;
    top:0;
    left:100%;
    z-index:2;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    transition:.5s;
  }
  .mobile-nav{
    left:0%;
  }
  .hamburger-react{
    display:block;
    position:absolute !important;
    z-index:5;
    top:40px;
    right:40px;
  }
}
`
const Header =(props)=> { 
  const navigate = useNavigate();
    
    const location = useLocation();
   
    const pages=props.pages;
    const languages = [...Object.keys(pages[0].name)];
    const [currentLanguage, setCurrentLanguage]=useState("pl");
    
    useEffect(()=>{
      navigate(`/${currentLanguage}/${location.pathname.slice(4)}`, { replace: true })
    },[currentLanguage])
    
    const handleNavMenu=()=>{
      document.querySelector("nav").classList.toggle("mobile-nav");
    }
    const FlagSwitcher = () =>(languages.map(lang =><div><Flag onClick={()=>setCurrentLanguage(lang)} code={lang} height="32"/></div>))
    const Logo = ()=><div className="logo">News<span>App</span></div>;  

     const links = pages.map((page) => <Link key={page.id} to={`${currentLanguage}/${page.id}`} >{page.name[currentLanguage]}</Link>)

  return (
    <HeaderWrapper>  

        <Logo/>
        <nav>
          <FlagSwitcher />
          {links}
          
        </nav>
    <Hamburger onToggle={() => handleNavMenu()}/>
    </HeaderWrapper>
  )
}

export default Header