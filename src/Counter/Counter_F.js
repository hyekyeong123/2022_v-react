import React,{useState} from 'react';

// 함수형 useState 사용하기
function Counter_F() {
  const [number, setNumber] = useState(0);
  // *****************************************
  const onIncrease = () => {
    setNumber(number+1)
  };

  const onDecrease = () => {
    setNumber(number+2)
  };

  return (
    <div>
      <h1>
        {number}
      </h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter_F;
