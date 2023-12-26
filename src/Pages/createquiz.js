import React, { useState } from "react";
import Header from "../Components/Header/header";
import * as style from "./createquiz.css";

const Createquiz = () => {
	const [category, setCategory] = useState();
	const [question, setQuestion] = useState();
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				flex: "1",
				width: "100%",
				maxWidth: "600px",
				minWidth: "320px",
				minHeight: "100vh",
				height: "100%",
				flexWrap: "wrap",
				margin: "0 auto",
				overscrollBehaviorY: "contain",
				backgroundColor: "#D9D9D9",
			}}
		>
			<Header />
			<div style={{ padding: "20px" }}>
				<div
					style={{
						marginTop: "20px",
						borderRadius: "20px",
						backgroundColor: "#fff",
						height: "91px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center", // 수직 가운데 정렬을 위해 추가
						textAlign: "center",
					}}
				>
					<p>문제의 카테고리를 입력해주세요.</p>
					<input onChange={(e) => setCategory(e.target.value)} value={category} placeholder="카테고리 입력" style={{ width: "60%", margin: "0 auto" }} />
				</div>
				<div
					style={{
						marginTop: "20px",
						borderRadius: "20px",
						backgroundColor: "#fff",
						height: "91px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center", // 수직 가운데 정렬을 위해 추가
						textAlign: "center",
					}}
				>
					<p>문제의 힌트를 입력해주세요.</p>
					<input onChange={(e) => setQuestion(e.target.value)} value={question} placeholder="힌트 입력" style={{ width: "60%", margin: "0 auto" }} />
				</div>
				<div
					style={{
						marginTop: "20px",
						borderRadius: "20px",
						backgroundColor: "#fff",
						height: "91px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center", // 수직 가운데 정렬을 위해 추가
						textAlign: "center",
					}}
				>
					<p>이미지를 업로드 해주세요.</p>
					<button onClick={() => console.log(question)} style={{ width: "20%", margin: "0 auto" }}>업로드</button>
				</div>
			</div>
		</div>
	);
}

export default Createquiz;