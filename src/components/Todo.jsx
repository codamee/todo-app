import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Todo = () => {
    return (
        <div className="todo flex justify-between items-center bg-slate-200 px-4 py-2 rounded-sm">
            <div className=' flex gap-3'>
                <input className='w-4 cursor-pointer' type="checkbox" name="check" id="check" />
                <p className='text-sm md:text-'lg>Read a book in the evening</p>
            </div>
            <div className="edit flex gap-4">
                <FaEdit className='cursor-pointer text-xl' />
                <MdDelete className='cursor-pointer text-xl' />
            </div>
        </div>
    )
}

export default Todo