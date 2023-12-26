import React, { useState } from 'react';
import * as style from './styles';

export default function Box(props) {
  // const getBox = () => {
  //   const response = [];
  //   const [box, setBox] = useState();
  // }
  return (
    <style.Box
      width={`${props.width}px`}
      height={`${props.height}px`}
    >
    </style.Box>
  );
}