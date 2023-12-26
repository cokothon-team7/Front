import React, { useState } from "react";
import Button from "../Components/button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const movePage = useNavigate();
	const [name, setName] = useState();
	const [ID, setID] = useState();
	const [PW, setPW] = useState();

	function gologin() {
		movePage("/login");
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
			<input
				onChange={(e) => setName(e.target.value)}
				value={name}
				placeholder="이름"
				style={{
					width: "100%",
					height: "40px",
					backgroundColor: "#fff",
					border: "none",
				}}
			/>
			<input
				onChange={(e) => setID(e.target.value)}
				value={ID}
				placeholder="ID"
				style={{
					width: "100%",
					height: "40px",
					backgroundColor: "#fff",
					border: "none",
				}}
			/>
			<input
				onChange={(e) => setPW(e.target.value)}
				value={PW}
				placeholder="PW"
				style={{
					width: "100%",
					height: "40px",
					backgroundColor: "#fff",
					border: "none",
					marginBottom: "20px",
				}}
			/>
			<button
				width={380}
				height={100}
				onClick={gologin}
				style={{
					width: "100%",
					height: "40px",
					backgroundColor: "#fff",
					border: "none",
					boxShadow: "2px 2px 2px 2px lightGray",
				}}
			>
				회원가입 완료
			</button>{" "}
			{/* 이 때 서버에 이름, ID, PW를 보내주어야함 */}
		</div>
	);
};

export default Signup;
