import React from 'react'

const PortofolioCard = ({ imgURL, name, url }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full  ' >
      <img src={imgURL} alt={name} className='md:w-full md:h-full ' />
      <div className='text-center'>
        <h3 className='mt-2  leading-normal font-semibold font-palanguin xsm:text-xs md:text-lg'>{name}</h3>
        <a className='md:text-sm py-1 cursor-pointer text-[#00df9a] xsm:text-xs' href={url}>{url}</a>
      </div>
    </div>
  )
}

export default PortofolioCard