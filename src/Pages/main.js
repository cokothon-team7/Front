import React from "react";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import Box from "../Components/box";

export default function Main() {
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
					<Box width={166} height={166} />
					<Box width={166} height={166} />
					<Box width={166} height={166} />
					<Box width={166} height={166} />
				</div>
			</div>
			<Footer />
		</div>
	);
}
