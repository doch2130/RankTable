import React, { useEffect, useState } from 'react';
import { objectData } from '../data/ObjectData';
import { arrayData } from '../data/ArrayData';
import MyRank from './MyRank'

type RankTableType = {
  myName: string;
}

const RankTable = ({ myName }:RankTableType) => {
  const [myRank, setMyRank] = useState(Object.keys(objectData).indexOf(myName) + 1);
  const [objectDataList, setObjectDataList] = useState(objectData);
  const [arrayDataList, setArrayDataList] = useState(arrayData);

  // useEffect(() => {
  //   const timeouts = [
  //     setTimeout(() => {
  //       setObjectDataList((prevDataList) => ({
  //         ...prevDataList,
  //         Strawberry: 777,
  //       }));
  //     }, 3000),
  //     setTimeout(() => {
  //       setObjectDataList((prevDataList) => ({
  //         ...prevDataList,
  //         Strawberry: 20,
  //         Banana: 100,
  //       }));
  //     }, 5000),
  //     setTimeout(() => {
  //       setObjectDataList((prevDataList) => ({
  //         ...prevDataList,
  //         Grape: 99,
  //       }));
  //     }, 7000),
  //     setTimeout(() => {
  //       setObjectDataList((prevDataList) => ({
  //         ...prevDataList,
  //         Strawberry: 100,
  //         Banana: 50,
  //       }));
  //     }, 10000),
  //   ];

  //   return () => {
  //     timeouts.forEach(clearTimeout);
  //   };
  // }, []);

  // useEffect(() => {
  //   const sortedData = Object.fromEntries(
  //     Object.entries(objectDataList).sort((a, b) => {
  //       if (b[1] === a[1]) {
  //         return a[0].localeCompare(b[0]);
  //       }
  //       return b[1] - a[1];
  //     })
  //   );

  //   if (JSON.stringify(objectDataList) !== JSON.stringify(sortedData)) {
  //     setObjectDataList(sortedData);
  //   }

  //   const changeMyRank = Object.keys(sortedData).indexOf(myName) + 1;
  //   if (myRank !== changeMyRank) {
  //     setMyRank(changeMyRank);
  //   }
  // }, [objectDataList]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setArrayDataList((prevArr) => [...prevArr.sort(() => Math.random() - 0.5)]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);



  

  return (
    <>
    <MyRank myName={myName} myRank={myRank} objectDataList={objectDataList} />
      {arrayDataList.map((el, index) => (
        <tr
          key={el[0]}
          style={{
            top: `${(index+1) * 60}px`,
            transition: 'top 0.5s ease',
          }}
          className={`element absolute w-full bg-[#1a1a1a] hover:bg-[#1d1d1d] text-[#fff] top-[${index*60}px]`}
        >
          <td className='w-[20%] inline-block'>{index + 1}</td>
          <td className='w-[30%] inline-block'>{el[0]}</td>
          <td className='w-[30%] inline-block'>{el[1]}</td>
          <td className='w-[20%] inline-block'>{'-'}</td>
        </tr>
      ))}
    </>
  );
};

export default RankTable;
