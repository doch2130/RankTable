import React from 'react'

type MyRankType = {
  myName: string;
  myRank: number;
  objectDataList: objectDataType;
}

type objectDataType = {
  [key:string]:number
}

export default function MyRank({ myName, myRank, objectDataList }:MyRankType) {
  return (
    <tr key={`${objectDataList[myName]}_${myName}`} className='myChange bg-[#1a1a1a] hover:bg-[#1d1d1d] text-[#686EF9] font-bold'>
      <td className='w-[20%]'>{myRank}</td>
      <td className='w-[30%]'>{myName}</td>
      <td className='w-[30%]'>{objectDataList[myName]}</td>
      <td className='w-[20%]'>-</td>
    </tr>
  )
}
