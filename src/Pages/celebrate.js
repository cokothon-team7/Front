import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

const Celebrate = () => {
  const location = useLocation();
  const recivedmsg = location.state && location.state.message;
  const navigate = useNavigate();
  function goMain() {
    navigate("/main");
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // 가로로 가운데 정렬
        justifyContent: "center", // 세로로 중앙에 정렬
        minHeight: "100vh", // 최소한 화면 높이만큼의 높이 설정
        padding: "40px",
        gap: "20px",
        position: "fixed", // 화면에 고정
        top: 0, // 상단에 정렬 (bottom 대신 top 사용)
        left: 0, // 왼쪽에 정렬
        right: 0, // 오른쪽에 정렬
        bottom: 0, // 하단에 정렬
        backgroundColor: "#CBEDD5", // 배경색 지정
      }}
    >
      <p style={{ fontSize: "80px", margin: 0 }}>🎆</p>
      <p style={{ padding: "10px" }}>
        <span style={{ fontWeight: "bold", color: "#5c6ff4" }}>메세지</span>를
        확인하세요.
      </p>
      <div
        style={{
          background: "#fff",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <p style={{ fontSize: "26px", fontWeight: "bold" }}>정답!</p>
        {recivedmsg && <p>{recivedmsg}</p>}
        <button onClick={goMain}>돌아가기</button>
      </div>
    </div>
  );
};

export default Celebrate;
