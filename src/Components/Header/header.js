import React from 'react'
import logo from '../../images/Header.svg';

export default function header(){
  return(
    <a href = '/'> 
      <img src ={logo} alt ="logo" />
    </a>
  )
}