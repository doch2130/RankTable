import React, { useState, useEffect } from 'react';
import { arrayData } from './data/ArrayData';
import './Test.css';

const Test = () => {
  const [arr, setArr] = useState(arrayData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setArr((prevArr) => [...prevArr.sort(() => Math.random() - 0.5)]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='w-[300px] h-[500px]'>
      <div className='w-full h-full relative'>
        {arr.map((el, index) => (
          <div
            key={el}
            style={{
              top: `${index * 60}px`,
              transition: 'top 0.5s ease', // 트랜지션 속성 설정
            }}
            className={`element top-[${index*60}px]`}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
