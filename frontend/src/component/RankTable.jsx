import React from 'react'
import { useEffect, useState } from 'react';

import { objectData } from '../data/ObjectData'
import MyRank from './MyRank';
import AllRankList from './AllRankList';

export default function RankTable() {
  const myName = 'Banana';
  const [myRank, setMyRank] = useState(Object.keys(objectData).indexOf(myName) + 1);
  const [objectDataList, setObjectDataList] = useState(objectData);

  useEffect(() => {
    setTimeout(() => {
      setObjectDataList(prevDataList => ({
        ...prevDataList,
        "Strawberry": 777,
      }));
    }, 3000);
  
  
    setTimeout(() => {
      setObjectDataList(prevDataList => ({
        ...prevDataList,
        "Strawberry": 20,
        "Banana": 100,
      }));
    }, 5000);

    setTimeout(() => {
      setObjectDataList(prevDataList => ({
        ...prevDataList,
        "Grape": 99,
      }));
    }, 7000);

    setTimeout(() => {
      setObjectDataList(prevDataList => ({
        ...prevDataList,
        "Strawberry": 100,
        "Banana": 50,
      }));
    }, 10000);
  }, []);



  useEffect(() => {
    const sortedData = Object.fromEntries(
      Object.entries(objectDataList).sort((a, b) => b[1] - a[1])
    );

    if (JSON.stringify(objectDataList) !== JSON.stringify(sortedData)) {
      setObjectDataList(sortedData);
      setMyRank(Object.keys(sortedData).indexOf(myName) + 1);
    }

  }, [objectDataList]);

  return (
    <>
    <MyRank myName={myName} myRank={myRank} objectDataList={objectDataList} />
    <AllRankList objectDataList={objectDataList} />
    </>
  )
}
