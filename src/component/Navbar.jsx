import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNab = () => {
        setNav(!nav)
        
      }
  return (
    <div className='h-24 max-w-[1240px] text-white flex justify-between mx-auto px-4'>
        <div>
        <h1 className='text-[#00df9a] w-full text-3xl uppercase font-bold hover:scale-105 duration-300 mt-3 hover:text-[#ffffff]'>JOB PETER</h1>
        </div>
        <ul className='hidden md:flex justify-between text-white'>
                <li className='p-4 hover:scale-105 duration-300 hover:text-[#00df9a]'><a href="/">Home</a></li>
                <li className='p-4 hover:scale-105 duration-300 hover:text-[#00df9a]'><a href="#portofolio">Portofolio</a></li>
                
            </ul>

        <div onClick={handleNab} className='block md:hidden mt-3'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'fixed left-0 md:hidden px-4 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out' : 'fixed left-[-100%] md:hidden'}>
        <h1 className='text-[#00df9a] w-full text-3xl capitalize font-bold hover:scale-105 duration-300 hover:text-[#ffffff] mt-3'>JOB PETER</h1>
        <ul className=''>
                <li className='p-4 hover:scale-105  duration-300 border-b border-gray-600 hover:text-[#00df9a]'><a href="/">Home</a></li>
                <li className='p-4 hover:scale-105 duration-300 border-b border-gray-600 hover:text-[#00df9a]'><a href="#portofolio">Portofolio</a></li>
                
            </ul>
        </div>
        
        

    </div>
  )
}

export default Navbar