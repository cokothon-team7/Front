import React, { useState } from "react";
import * as style from "./styles";

export default function Box(props) {
  console.log(props.puzzle);
  return (
    <style.Box
      width={`${props.width}px`}
      height={`${props.height}px`}
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        cursor: "pointer",
      }}
      onClick={() => {
        window.location.href = `http://localhost:3000/solve/${props.puzzle.id}`;
      }}
    >
      {props.puzzle.category}
    </style.Box>
  );
}
