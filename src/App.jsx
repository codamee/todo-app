import Navbar from './components/Navbar'
import Todo from './components/Todo';

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='text-slate-600 box-border  flex flex-col gap-4 w-full md:w-[50%] md:mx-auto bg-slate-300 px-4 md:m-4 md:rounded-sm'>
        <div className='flex flex-col md:flex-row w-full border-b py-6 gap-2'>
          <input className='border focus:outline-0 focus:border-cyan-700 px-4 py-2  md:w-[80%]' type="text" placeholder='Add your todo here...' name="todoText" id="todoText" />
          <button className='bg-slate-950 md:w-[20%]  cursor-pointer text-slate-50 px-4 py-2  hover:bg-slate-800'>Add Todo</button>
        </div>
        <div className='flex flex-col gap-3'>
          <h2>Your Todos</h2>
          <div className='todo-container flex flex-col gap-2 overflow-auto  h-125'>
            <Todo />
            <Todo />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
