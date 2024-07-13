import React from 'react'

function About() {
  return (
   <>
   <div className='  flex flex-col items-center w-[1024px] ml-[170px] mt-20 '>
    <h5 className=' text-[#fcfcfd]'>Hello I'm</h5>
    <h1 className=' text-white'>ATIF ALI</h1>
    <h5 className=' text-[#fcfcfd] mt-4'>Front-end Developer</h5>
    <span className=' flex gap-5 mt-[40px]'>
      <button className=' bg-transparent hover:bg-white border-blue-400 text-blue-600 '> Download CV </button>
      <button> Let's talk </button>
    </span>

   </div>
   
   </>
  )
}

export default About