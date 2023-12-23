import React from 'react'

type objectDataType = {
  [key:string]:any
}

export default function AllRankList({ objectDataList }:objectDataType) {
  return (
    <>
    {Object.keys(objectDataList)?.map((name, index) => (
    <tr key={`${objectDataList[name]}_${name}`} className='change absolute w-full bg-[#1a1a1a] hover:bg-[#1d1d1d] text-[#fff]' style={{transform: `translateY(${index*60}px)`}}>
      <td className='w-[20%] inline-block'>{index+1}</td>
      <td className='w-[30%] inline-block'>{name}</td>
      <td className='w-[30%] inline-block'>{objectDataList[name]}</td>
      <td className='w-[20%] inline-block'>{'-'}</td>
    </tr>
    ))}
    </>
  )
}
