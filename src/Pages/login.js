import React, { useState } from 'react';
import Button from '../Components/button'
import { useNavigate } from "react-router-dom";

const Login = () =>{
  const movePage = useNavigate();
  const [ID, setID] = useState();
	const [PW, setPW] = useState();

  function gomain(){
    movePage('/main');
  }


  return(
    <div>
      <input onChange={(e) => setID(e.target.value)} value={ID} placeholder="ID" />
      <input onChange={(e) => setPW(e.target.value)} value={PW} placeholder="PW" />  {/*이 때 로그인을 누르면 서버에서 ID값에 맞는 PW가 있으면
      로그인 시킴*/ }
      <button width={380} height={100} onClick={gomain}>Login</button>
    </div>
  )
};

export default Login;