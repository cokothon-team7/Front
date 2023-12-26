import React, { useState } from 'react';
import  Button from '../Components/button'
import { useNavigate } from "react-router-dom";
const Initpage = () => {
  const navigate = useNavigate();

  function goLogin(){
    console.log('goLogin 함수 호출');
    navigate('/login');
  }

  function goSignup(){
    console.log('goSignup 함수 호출');
    navigate('/signup');
  }

  return(
    <div>
      <button width={380} height={100} onClick={goLogin}>로그인</button>
      <button width={380} height={100} onClick={goSignup}>회원가입</button> {/* 현재 로그인 -> main이 안넘어가짐*/}
    </div> 
  )
};

export default Initpage;