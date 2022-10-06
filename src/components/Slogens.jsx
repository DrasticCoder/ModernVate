import React from 'react';
import img2 from '../assets/page2img.png';


const Slogens = () => {
    return (
        <section className="px-36 py-24 bg-cover h-full bg-[url('https://i.ibb.co/L6DgBg8/bg2.png')] " style={{ 'fontFamily': 'Baloo Bhai 2' }}>
            <h1 className='text-center text-4xl font-extrabold text-[#EF4A37]'>Inspiring Young Minds, Aspiring Brave Ideas</h1>
            <p className='px-28 text-[#7587A4] text-center my-10 '
            >Students mind are full of  unique ideas and young minds are important for a nation’s development. Providing opportunities and a platform for youth to present their perspectives,
                opinions, share their ideas is an important part of development.</p>
            <div className=' mx-20 p-10 bg-[#0345CA] bg-opacity-20 rounded-tl-extraLarge rounded-br-extraLarge'>
                <img className=' object-fill '
                    src={img2} alt="slogen"
                ></img>
                <div className="grid grid-cols-4 items-center gap-4 text-xl text-[#013BBA] font-bold">
                    <div>IDEA</div>
                    <div>MODERNVATE</div>
                    <div>SELECTED</div>
                    <div>SUCCESSFUL</div>
                </div>

            </div>
            <h1 className='text-center text-4xl font-extrabold text-[#013BBA] mt-10'>Inspiring Young Minds, Aspiring Brave Ideas</h1>

            <p className='px-28 text-[#7587A4] text-xl text-center my-10'
            >When we put all our efforts and hard work into achieving any goal, the result will always be positive. It is the responsibility of Universities and
                Industries to nourish the ideas of Students and enlighten them towards their success.
            </p>
            <h1 className='text-[#7587A4] text-center text-2xl font-bold'>“If you cannot do great things, do small things in a great way”
            </h1>

        </section>
    )
}
export default Slogens