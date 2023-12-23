import React from 'react'
import RankTable from './component/RankTable';
import './App.css';

const myName = 'Strawberry';

function App() {
  return (
    <div className='container-wrap w-full h-full bg-[#232323] m-0 p-0'>
      <section className='p-[50px] flex flex-col items-center max-w-[1480px] m-auto'>
        <nav className='flex itmes-center w-full bg-[#5055cb] py-[10px] px-[25px] border-[1px] border-[#686EF9] rounded-[10px]'>
          <div>
            <h1 className='text-white text-[20px] font-bold'>Leaderboard</h1>
          </div>
        </nav>
        <table className='relative w-full text-center border-collapse'>
          <thead>
            <tr className='[&_th]:py-[25px] [&_th]:text-[#747474] [&_th]:text-[14px] [&_th]:font-bold'>
              <th className='w-[20%] max-w-[150px]'>Rank</th>
              <th className='w-[30%]'>Name</th>
              <th className='w-[30%]'>Score</th>
              <th className='w-[20%] max-w-[150px]'>Diff</th>
            </tr>
          </thead>
          <tbody className='relative [&_td]:py-[15px] [&_td]:text-[16px] [&_td]:border-b-[5px] [&_td]:border-[#232323]'>
            <RankTable myName={myName} />
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
