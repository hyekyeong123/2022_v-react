import React, {useState} from 'react';
import {createContext} from "react";

const ColorContext = createContext({
  state: {color: "black", subColor: "red"},
  action: {
    setColor: () => {
    },
    setSubColor: () => {
    },
  }
})

const ColorProvider = ({children}) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');

  const value = {
    state : {color, subColor},
    action: {setColor, setSubColor}
  };

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  )
}

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const {Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export {ColorProvider, ColorConsumer};

export default ColorContext;