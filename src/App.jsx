import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState(" ")
  const [todoArray, setTodoArray] = useState([])
  const [finished, setFinished] = useState(false)
  // const funti

  useEffect(() => {
    const array = localStorage.getItem("todoArray")
    if (array) {
      const todos = JSON.parse(array)
      setTodoArray(todos)
    }
  }, [])

  const saveLocalStorage = () => {
    localStorage.setItem("todoArray", JSON.stringify(todoArray))
  }

  const handleInputChange = (e) => {
    setTodo(e.target.value)
  }
  const handleBtn = (e) => {
    setTodoArray([...todoArray, { todo, isCompleted: false }])
    setTodo("")
  }
  const handleCheckbox = (e) => {
    const id = (e.target.name);
    const newArray = [...todoArray]
    newArray[id].isCompleted = !newArray[id].isCompleted
    setTodoArray(newArray)
    saveLocalStorage()
  }
  const handleEdit = (item, index) => {
    const newArray = todoArray.filter((item, i) => i !== index)
    setTodoArray(newArray)
    setTodo(item.todo)
    saveLocalStorage()
  }
  const handleDelete = (index) => {
    const newArray = todoArray.filter((item, i) => i !== index)
    setTodoArray(newArray)
    saveLocalStorage()
  }
  const toggleFinished = (e) => {
    setFinished(!finished)
  }
  return (
    <>
      <Navbar />
      <div className='text-slate-600 box-border  flex flex-col gap-4 w-full md:w-[50%] md:mx-auto bg-slate-300 px-4 md:m-4 md:rounded-sm'>
        <div className='flex flex-col md:flex-row w-full border-b py-6 gap-2'>
          <input className='border focus:outline-0 focus:border-cyan-700 px-4 py-2  md:w-[80%]' type="text" value={todo} onChange={handleInputChange} placeholder='Add your todo here...' name="todoText" id="todoText" />
          <button disabled={todo.length < 1} onClick={handleBtn} className='bg-slate-950 md:w-[20%]  cursor-pointer text-slate-50 px-4 py-2  hover:bg-slate-800'>Add Todo</button>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between'>
            <h2 className='font-bold'>Your Todos</h2>
            <div className='flex gap-2'>
              <input className='w-4 cursor-pointer' onChange={toggleFinished} type="checkbox" name="show" id="show" checked={finished} />
              <p>Show Finished</p>
            </div>

          </div>
          <div className='todo-container flex flex-col gap-2 overflow-auto  h-125'>
            {
              todoArray.length === 0 && <div className="p-4">No Todo's to show ! Lets add some todos🔥</div>
            }
            {todoArray.map((item, index) => {

              return <div key={index} className="todo flex justify-between items-center bg-slate-200 px-4 py-2 rounded-sm">
                <div className=' flex gap-3'>
                  <input onChange={handleCheckbox} name={index} checked={item.isCompleted} className='w-4 cursor-pointer' type="checkbox" id="check" />
                  <p className={`text-sm md:text-lg ${item.isCompleted ? 'line-through' : ''}`}>
                    {item.todo}
                  </p>
                </div>
                <div className="edit flex gap-4">
                  <FaEdit className='cursor-pointer text-xl' onClick={() => { handleEdit(item, index) }} />
                  <MdDelete className='cursor-pointer text-xl' onClick={() => { handleDelete(index) }} />
                </div>
              </div>

            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
