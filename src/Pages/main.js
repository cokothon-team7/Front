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
          flexDirection: "row",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            maxWidth: "600px",
            minWidth: "320px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center", // 수직 가운데 정렬을 위해 추가
            textAlign: "center",
          }}
        >
          {puzzles.map((puzzle) => (
            <Box width={166} height={166} puzzle={puzzle} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
