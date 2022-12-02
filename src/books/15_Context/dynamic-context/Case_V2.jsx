import React from 'react';
import {ColorProvider} from'./ColorContext'
import ColorBox from "./ColorBox";

function Case_V2() {

 // ******************************************
  return (
    <ColorProvider>
      <ColorBox/>
    </ColorProvider>
  );
};
export default Case_V2;