import React from 'react';
import ColorContext from "./ColorContext";

function ColorBox() {
  return (
    <ColorContext.Consumer>
      {
       value => (
         <div
          style={{
            width:'64px',
            height:'64px',
            background:value.color
          }}
         >안녕</div>
       )
      }
    </ColorContext.Consumer>
  );
};
export default ColorBox;