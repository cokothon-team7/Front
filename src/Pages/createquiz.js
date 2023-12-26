import React from "react";
import Header from "../Components/Header/header";
import * as style from "./createquiz.css";

export default function createquiz() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				flex: "1",
				width: "100%",
				flexWrap: "wrap",
				justifyContent: "center",
				// width: 390,
			}}
		>
			<Header />
			<div>
				<p>문제의 카테고리를 입력해주세요.</p>
				<input placeholder="카테고리 입력" />
			</div>
			<div>
				<p>문제의 힌트를 입력해주세요.</p>
				<input placeholder="힌트 입력" />
			</div>
			<div>
				<p>이미지를 업로드 해주세요.</p>
				<button>업로드</button>
			</div>
		</div>
	);
}
