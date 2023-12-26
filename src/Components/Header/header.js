import React from "react";
import light from "../../images/image-light.png";

export default function Header() {
	return (
		<div style={{ backgroundColor: "#CBEDD5" }}>
			<img src={light} alt="전구이미지" style={{ height: "60px", paddingTop: "16px" }} />
			<h3 style={{ fontSize: "30px", fontWeight: "bold", margin: "0 0 16px 0" }}>PicPuzzle</h3>
		</div>
	);
}
