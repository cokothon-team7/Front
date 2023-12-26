import React from 'react';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import Box from '../Components/box';

export default function Main() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // 세로 축에서 가운데 정렬 추가
      flex: "1",
      width: "100%",
      flexWrap: "wrap",
      justifyContent: "center",
    }}>
      <Header />
        <div style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <Box width={166} height={166} />
          <Box width={166} height={166} />
          <Box width={166} height={166} />
          <Box width={166} height={166} />
        </div>
      <Footer />
    </div>
  );
}
