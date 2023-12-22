/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const myName = 'minjae';
  const [testDataList, setTestDataList] = useState({
      "minwoo": 30,
      "minjae": -999,
      "jongmin": 30,
      "hyohyun": 85,
  });


  useEffect(() => {
    const timer = setTimeout(() => {
      // 5초 후에 Minjea의 score 값을 변경합니다.
      setTestDataList(prevDataList => ({
        ...prevDataList,
        "minjae": 777,
      }));
    }, 2000);

    // 컴포넌트가 언마운트되면 타이머를 클리어합니다.
    return () => clearTimeout(timer);
  }, []);

  const [dataList, setDataList] = useState([
    {
      'Name': '하하',
      'Score': 900,
      'Diff': '-'
    },
    {
      'Name': '하하22',
      'Score': 700,
      'Diff': '-'
    },
    {
      'Name': '하하33',
      'Score': 500,
      'Diff': '-'
    },
    {
      'Name': '하하44',
      'Score': 400,
      'Diff': '-'
    },
    {
      'Name': '하하55',
      'Score': 300,
      'Diff': '-'
    },
    {
      'Name': '하하++',
      'Score': 200,
      'Diff': '-'
    },
    {
      'Name': 'Minjea',
      'Score': 100,
      'Diff': '-'
    },
    {
      'Name': '하하88',
      'Score': 50,
      'Diff': '-'
    }
  ]);

  return (
    <div className='container-wrap w-full h-full bg-[#232323] m-0 p-0'>
      <section className='p-[50px]'>
        <nav className='flex itmes-center bg-[#5055cb] py-[10px] px-[25px] border-[1px] border-[#686EF9] rounded-[10px]'>
          <div>
            <h1 className='text-white text-[20px] font-bold'>Leaderboard</h1>
          </div>
        </nav>
        <table id='rankings' className='w-full text-left border-collapse'>
          <thead>
            <tr className='[&_th]:p-[25px] [&_th]:text-[#747474] [&_th]:text-[14px] [&_th]:font-bold'>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
              <th>Diff</th>
            </tr>
          </thead>
          <tbody className='[&_td]:py-[15px] [&_td]:px-[25px] [&_td]:text-[16px] [&_td]:border-b-[5px] [&_td]:border-[#232323]
          '>
            {/* My Data */}
            <tr className='bg-[#1a1a1a] hover:bg-[#1d1d1d] text-[#686EF9]'>
              <td className='rank-element'>7</td>
              <td key={myName} className='rank-element'>{myName}</td>
              <td key={testDataList[myName]} className='rank-element'>{testDataList[myName]}</td>
              <td className='rank-element'>-</td>
            </tr>
            {/* All List */}
            {/* {dataList.map((list, index) => (
              <tr key={index} className='rank-element bg-[#1a1a1a] hover:bg-[#1d1d1d] text-[#747474]'>
                <td>{index+1}</td>
                <td>{list.Name}</td>
                <td>{list.Score}</td>
                <td>{list.Diff}</td>
              </tr>
            ))} */}

            {Object.keys(testDataList)?.map((name, index) => {
              return (
              <tr key={index} className='bg-[#1a1a1a] hover:bg-[#1d1d1d] text-[#747474]'>
                <td key={index+1} className='rank-element'>{index+1}</td>
                <td key={name} className='rank-element'>{name}</td>
                <td key={testDataList[name]} className='rank-element'>{testDataList[name]}</td>
                <td className='rank-element'>{'-'}</td>
              </tr>
            )})
            }
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
