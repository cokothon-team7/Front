import React, { useState } from "react";
import Button from "../Components/button";
import { useNavigate } from "react-router-dom";
import puzzle from "../images/image-puzzle.png";

const Initpage = () => {
	const navigate = useNavigate();

	function goLogin() {
		console.log("goLogin 함수 호출");
		navigate("/login");
	}

	function goSignup() {
		console.log("goSignup 함수 호출");
		navigate("/signup");
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center", // 가로로 가운데 정렬
				justifyContent: "flex-end", // 세로로 하단에 정렬
				minHeight: "100vh", // 최소한 화면 높이만큼의 높이 설정
				padding: "40px",
				paddingBottom: "160px",
				gap: "20px",
				position: "fixed", // 화면에 고정
				bottom: 0, // 하단에 정렬
				width: "100%", // 전체 너비를 차지
				backgroundColor: "#CBEDD5", // 배경색 지정
			}}
		>
			<img src={puzzle} alt="전구이미지" style={{ height: "140px" }} />
			<p style={{ fontSize: "40px", marginBottom: "120px" }}>PicPuzzle</p>
			<button
				style={{
					width: "100%",
					height: "40px",
					backgroundColor: "#fff",
					border: "none",
					boxShadow: "2px 2px 2px 2px lightGray",
				}}
				onClick={goLogin}
			>
				로그인
			</button>
			<button
				style={{
					width: "100%",
					height: "40px",
					backgroundColor: "#fff",
					border: "none",
					boxShadow: "2px 2px 2px 2px lightGray",
				}}
				onClick={goSignup}
			>
				회원가입
			</button>
		</div>
	);
};

export default Initpage;
