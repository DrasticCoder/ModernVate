import React from 'react'

const UserInfo = () => {
  return (
    <div className='container'>
      <div className='grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-5 md:mx-10 md:content-center'>
        
        <div className='bg-gray-100 p-5 m-4 md:m-0 text-center rounded-lg drop-shadow-2xl border-2 border-gray-200 hover:bg-gray-200'>
          <h1 className='text-indigo-900 pb-2 font-bold xl:inline text-2xl sm:text-3xl md:text-4xl'>Student</h1>
          <p className='text-gray-500 text-sm sm:mt-5 sm:text-lg  md:text-xl lg:mx-0'>Students can register themselves and get internship and job opportunities with respective of their skills and interest.</p>
          <button className='bg-indigo-500 text-white p-2 mt-4 rounded-full drop-shadow-lg'>Learn more</button>
        </div>
        
        <div className='bg-gray-100 p-5 text-center m-4 md:m-0 rounded-lg drop-shadow-2xl border-2 border-gray-200 hover:bg-gray-200'>
          <h1 className='text-indigo-900 pb-2 font-bold xl:inline text-2xl sm:text-3xl md:text-4xl'>University</h1>
          <p className='text-gray-500 text-sm sm:mt-5 sm:text-lg  md:text-xl lg:mx-0'>Institute can register their details this help them to provide internship and job opportunities to their studetns. </p>
          <button className='bg-indigo-500 text-white p-2 mt-4 rounded-full drop-shadow-lg'>Learn more</button>
        </div>
        
        <div className='bg-gray-100 p-5 text-center rounded-lg m-4 md:m-0 drop-shadow-2xl border-2 border-gray-200 hover:bg-gray-200'>
          <h1 className='text-indigo-900 pb-2 font-bold xl:inline text-2xl sm:text-3xl md:text-4xl'>Organization</h1>
          <p className='text-gray-500 text-sm sm:mt-5 sm:text-lg  md:text-xl lg:mx-0'>Company or startup can register themselves, this help them in project and  hiring by seeing cadidate assesment.</p>
          <button className='bg-indigo-500 text-white p-2 mt-4 rounded-full drop-shadow-lg'>Learn more</button>
        </div>
        
      </div>
    </div>
  )
}

export default UserInfo