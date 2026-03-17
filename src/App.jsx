import Navbar from './components/Navbar'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='text-slate-500 font-bold'>Hello world</div>
    </>
  )
}

export default App
