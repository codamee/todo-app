import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-slate-900 text-slate-200 p-4 text-lg font-semibold flex items-center justify-between'>
            <p className=''>Todo<span className='text-green-500 font-bold font-'>Ex</span></p>
            <ul className='flex gap-4 '>
                <li className='hover:text-white cursor-pointer'>Home</li>
                <li className='hover:text-white cursor-pointer'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar