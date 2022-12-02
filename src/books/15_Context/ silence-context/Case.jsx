import React from 'react';
import ColorContext from "./ColorContext";
import ColorBox from "./ColorBox";

function Case() {

 // ******************************************
  return (
    <div>
      <ColorContext.Provider value={{color:'red'}}>
        <ColorBox/>
      </ColorContext.Provider>
    </div>
  );
};
export default Case;