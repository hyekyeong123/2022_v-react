import React from 'react';
import {ColorConsumer} from "./ColorContext";

function ColorBox() {
  return (
    <ColorConsumer>
      {
       value => (
         <>
         <div
          style={{
            width:'64px',
            height:'64px',
            background:value.state.color
          }}>
           안녕
         </div>
           <div
             style={{
               width:'32px',
               height:'32px',
               background:value.state.subColor
             }}>
             안녕
           </div>
         </>
       )
      }
    </ColorConsumer>
  );
};
export default ColorBox;