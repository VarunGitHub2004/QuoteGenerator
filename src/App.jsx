import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
  const [quote,setQuote]=useState({quote:"Motivation is temporary but discipline is last forever",id:0,author:"Varun Tiwari"})
  const [count,setCount]=useState(1);
  useEffect(()=>{
   async function handleGenerate()
    {
      const {data}=await axios.get(`https://dummyjson.com/quotes/${count}`)
      setQuote(data)
      console.log(quote)
    }
    handleGenerate()
  },[count])
  const handleClick=()=>{
       setCount(Math.floor(Math.random()*100+1))
       console.log(count)
  }
  return (
    <div className="App flex place-items-center justify-center min-h-screen w-screen bg-slate-800">
     <div style={{minHeight:'200px',width:'800px'}} className="box  flex flex-col justify-between rounded-md shadow-md shadow-slate-400  bg-slate-500 text-white p-2 border-t-8 border-t-blue-600 ">
        <blockquote className='flex flex-col '>
          <div className='flex justify-between   gap-8 text-lg sm:text-4xl'>
          <q className='anta-regular'>{quote.quote} </q> <span className='bg-blue-800 h-min px-3 shadow-md shadow-slate-200 rounded-md'>{quote.id}</span> 
          </div>
          <p className='text-right'>~{quote.author}</p>
        </blockquote>
      <button className='rounded-sm text-white bg-blue-950 p-2' onClick={handleClick}>Generate</button>
     </div>
    </div>
  );
}

export default App;
