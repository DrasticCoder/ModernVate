import React from 'react'

const UserInfo = () => {
  return (
    <div className='container p-5'>
      <div className='grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-5 mx-auto'>
        
        <div className='bg-gray-100 p-5 text-center rounded-lg drop-shadow-2xl'>
          <h1 className='text-indigo-900 pb-2 font-bold xl:inline text-2xl sm:text-3xl md:text-4xl'>Student</h1>
          <p className='text-gray-500 sm:mx-auto text-sm sm:mt-5 sm:text-lg  md:text-xl lg:mx-0'>We are the industry’s first to offer a unique model of combining technology partnership, incubation and domain / tech acceleration capabilities</p>
          <button className='bg-indigo-500 text-white p-2 mt-4 rounded-full drop-shadow-lg'>Learn more</button>
        </div>
        
        <div className='bg-gray-100 p-5 text-center rounded-lg drop-shadow-2xl'>
          <h1 className='text-indigo-900 pb-2 font-bold xl:inline text-2xl sm:text-3xl md:text-4xl'>University</h1>
          <p className='text-gray-500 sm:mx-auto text-sm sm:mt-5 sm:text-lg  md:text-xl lg:mx-0'>We are the industry’s first to offer a unique model of combining technology partnership, incubation and domain / tech acceleration capabilities</p>
          <button className='bg-indigo-500 text-white p-2 mt-4 rounded-full drop-shadow-lg'>Learn more</button>
        </div>
        
        <div className='bg-gray-100 p-5 text-center rounded-lg drop-shadow-2xl'>
          <h1 className='text-indigo-900 pb-2 font-bold xl:inline text-2xl sm:text-3xl md:text-4xl'>Organization</h1>
          <p className='text-gray-500 sm:mx-auto text-sm sm:mt-5 sm:text-lg  md:text-xl lg:mx-0'>We are the industry’s first to offer a unique model of combining technology partnership, incubation and domain / tech acceleration capabilities</p>
          <button className='bg-indigo-500 text-white p-2 mt-4 rounded-full drop-shadow-lg'>Learn more</button>
        </div>
        
      </div>
    </div>
  )
}

export default UserInfo