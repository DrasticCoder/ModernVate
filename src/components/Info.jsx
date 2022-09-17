import React from 'react';
import InfoImg from '../inventory/Info.png';

function Info() {
  return (
    <div className='container mx-auto text-center p-5 sm:p-15 md:p-20 lg:p-25'>
      <h1 className='block font-bold text-indigo-600 xl:inline text-2xl sm:text-3xl md:text-4xl'>CREATING THE NEXT BIG STARTUP</h1>
      <p className='text-gray-500 sm:mx-auto text-sm sm:mt-5 sm:text-lg  md:text-xl lg:mx-0'>We are the industry’s first to offer a unique model of combining technology partnership, incubation and domain / tech acceleration capabilities for Student, Institute, and for Companies.Combining state of the art services with access to a global ecosystem allows us to create the next big startup or product.Let us partner and build your legendary dream together.</p>
      
      <img className='sm:p-40 md:p-6 lg:p-10' src={InfoImg} alt="Information" />
    </div>
  )
}

export default Info

