import { useEffect, useState } from "react";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import Box from "../Components/box";
import axios from "axios";

export default function Main() {
  const [puzzles, setPuzzles] = useState([]);
  useEffect(() => {
    axios.get("/api/users/me/puzzles").then((res) => {
      setPuzzles(res.data);
    });
  }, []);

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            // marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            maxWidth: "600px",
            minWidth: "320px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center", // 수직 가운데 정렬을 위해 추가
            textAlign: "center",
          }}
        >
          <p style={{ padding: "10px" }}>
            아래 카드를 선택해{" "}
            <span style={{ fontWeight: "bold", color: "#5c6ff4" }}>
              기억의 퍼즐
            </span>
            을 만들어주세요
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {puzzles.map((puzzle) => (
              <Box width={166} height={166} puzzle={puzzle} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
