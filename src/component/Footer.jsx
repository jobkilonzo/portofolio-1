import React from 'react'

const Footer = () => {
    return (
        <div className='flex xsm:flex-col md:flex-row flex-row md:justify-between justify-between'>
            <div className=''>
                <h1 className='text-[#00df9a] flex justify-center  p-6 font-mono'>{new Date().getFullYear()} JOB PETER</h1>


            </div>

            <div className='flex justify-center'>
            <div className='flex p-6 flex-col '>
                <p className=' font-mono'>GitHub: <a className='text-gray-200 hover:scale-105 duration-300 hover:text-gray-500' href="htttps://www.github.com/jobkilonzo">htttps://www.github.com/jobkilonzo</a></p>
                <p className=' font-mono'>Email: jobkilonzo2@gmail.com</p>
                <p className=' font-mono'>Phone: +254 725 993 935</p>
            </div>
            </div>
        </div>
    )
}

export default Footer