import React, { useRef, useState } from "react";
import Header from "../Components/Header/header";
import axios from "axios";

const Createquiz = () => {
  const imageRef = useRef();

  const [category, setCategory] = useState();
  const [question, setQuestion] = useState();
  const [puzzleUrl, setPuzzleUrl] = useState();


  async function handleSubmit() {
    if (!category || !question || !imageRef.current.files[0]) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append(
      "json",
      new Blob([JSON.stringify({ hint: question, category: category })], {
        type: "application/json",
      })
    );
    formData.append("image", imageRef.current.files[0]);

    const res = await axios.post("/api/puzzles", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.status === 200) {
      const { puzzleId } = res.data;
      setPuzzleUrl(`http://localhost:3000/solve/${puzzleId}`);
    }
  }

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
        backgroundColor: "#fff",
      }}
    >
      <Header />
      <p style={{ padding: "10px" }}>
				아래 문항을 채워 <span style={{ fontWeight: "bold", color: "#5c6ff4" }}>퍼즐 문제</span>를
				만들어주세요!
			</p>
     <div style={{ padding: "0px 20px 0px 20px" }}>
				<div
					style={{
						margin: "0px 10px 20px 10px",
						paddingBottom: "16px",
						borderRadius: "20px",
						backgroundColor: "#fff",
						height: "91px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center", // 수직 가운데 정렬을 위해 추가
						textAlign: "center",
						border: "solid lightGray",
						boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
					}}
				>
					<p>🤨 문제의 카테고리를 입력해주세요.</p>
					<input
						onChange={(e) => setCategory(e.target.value)}
						value={category}
						placeholder="카테고리 입력"
						style={{ width: "60%", margin: "0 auto" }}
					/>
				</div>
				<div
					style={{
						margin: "0px 10px 20px 10px",
						paddingBottom: "16px",
						borderRadius: "20px",
						backgroundColor: "#fff",
						height: "91px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center", // 수직 가운데 정렬을 위해 추가
						textAlign: "center",
						border: "solid lightGray",
						boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
					}}
				>
					<p>🌟 문제의 힌트를 입력해주세요.</p>
					<input
						onChange={(e) => setQuestion(e.target.value)}
						value={question}
						placeholder="힌트 입력"
						style={{ width: "60%", margin: "0 auto" }}
					/>
				</div>
				<div
					style={{
						margin: "0px 10px 20px 10px",
						paddingBottom: "16px",
						borderRadius: "20px",
						backgroundColor: "#fff",
						height: "91px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
						border: "solid lightGray",
						boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
					}}
				>
					<p>🤗 이미지를 업로드 해주세요.</p>
					{/* 파일을 선택하는 input 요소 */}
					<input
						type="file"
						ref={imageInputRef}
						style={{ display: "none", flexDirection: "row" }}
					/>
					{/* 업로드 버튼과 이미지 업로드 버튼을 나란히 정렬 */}
					<div style={{ display: "flex", justifyContent: "space-between", width: "60%" }}>
						<button onClick={() => imageInputRef.current.click()} style={{ width: "48%" }}>
							업로드
						</button>
						{/* 이미지 업로드 버튼을 누를 때 handleImageUpload 함수 호출 */}
						<button onClick={handleImageUpload} style={{ width: "48%", whiteSpace: "nowrap" }}>
							이미지 업로드
						</button>
        {puzzleUrl && (
          <p>
            <strong>공유 URL: </strong>
            {puzzleUrl}
          </p>
        )}
      </div>
    </div>
  );

};

export default Createquiz;
