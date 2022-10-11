import React, { useEffect, useRef, useState } from 'react';

const SimpleHabit = (props) => {
  //function componenet는 component가 변경이 되면 {}전체가 반복해서 호출이 된다.
  //다만, useState는 따로 저장이 되어서 reset되지 않는다.
  const [count, setCount] = useState(0);
  const spanRef = useRef();
  //React.creatRef() 대신 사용한다. useRef는 한번만 사용하고 메모리에 저장해 계속 새로고침되지 않는다.

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`mounted and updated : ${count}`);
  }, []);

  return (
    <li className='habit'>
      <span ref={spanRef} className='habit-name'>
        Reading
      </span>
      <span className='habit-count'>{count}</span>
      <button className='habit-button habit-increse' onClick={handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
