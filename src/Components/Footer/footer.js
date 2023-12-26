import React from 'react'
import logo from '../../images/Footer.svg';
import { useNavigate } from "react-router-dom";

const Footer= () =>{
  const movePage = useNavigate();
  function goCreatequiz(){
    movePage('../createquiz');
  }
  return(
    <img src ={logo} alt ="logo" onClick={goCreatequiz}/>
  )
}

export default Footer;