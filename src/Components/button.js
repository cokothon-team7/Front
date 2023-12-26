import React, { useState } from 'react';
import * as style from './buttonstyle';

export default function Button(props) {

  return (
    <style.Button
      width={`${props.width}px`}
      height={`${props.height}px`}
    >
    </style.Button>
  );
  }