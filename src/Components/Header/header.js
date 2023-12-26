import React from "react";
import puzzle from "../../images/image-puzzle.png";

export default function Header() {
	return (
		<div style={{ backgroundColor: "#CBEDD5" }}>
			<img src={puzzle} alt="전구이미지" style={{ height: "80px", paddingTop: "26px" }} />
			<h3
				style={{
					fontSize: "30px",
					fontWeight: "bold",
					margin: "0 0 16px 0",
					fontFamily: "Ubuntu Mono, monospace",
				}}
			>
				PicPuzzle
			</h3>
		</div>
	);
}
