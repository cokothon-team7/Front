import React, { useState } from 'react';
import Button from '../Components/button'
import { useNavigate } from "react-router-dom";

const Signup = () =>{
  const movePage = useNavigate();
  const [name, setName] = useState();
	const [ID, setID] = useState();
  const [PW, setPW] = useState();

  function gologin(){
    movePage('/login');
  }


  return(
    <div>
      <input onChange={(e) => setName(e.target.value)} value={name} placeholder="이름" />
      <input onChange={(e) => setID(e.target.value)} value={ID} placeholder="ID" />
      <input onChange={(e) => setPW(e.target.value)} value={PW} placeholder="PW" />  
      <button width={380} height={100} onClick={gologin}>회원가입 완료</button>  {/* 이 때 서버에 이름, ID, PW를 보내주어야함 */}
    </div>
  )
};

export default Signup;