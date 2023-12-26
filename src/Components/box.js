import React from 'react';
import * as style from './styles';

export default function Box(props) {
  return (
    <style.Box
      width={`${props.width}px`}
      height={`${props.height}px`}
    >
    </style.Box>
  );
}