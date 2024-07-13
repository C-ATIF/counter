import React from 'react'
import icon from '../../public/icon2.png'

function Test() {
  return (
    <>
    <section className=' flex flex-col items-center mt-[128px]'>
      <h5 className='text-[#9d9da6]'>Review from clients</h5>
      <h2  className=' text-[30px] mb-[48px] text-[#4db5ff]'> Testimonials</h2>

      <div className=' h-[292px] w-[546px] mx-[409px] flex flex-col items-center justify-center bg-[#2c2c6c] rounded-3xl gap-y-4'>
        <div className=' h-[64px] w-[64px] rounded-full'>
        <img src={icon} className=' h-[64px] w-[64px] rounded-full' />
        
        </div>
        <h5 className=' text-[#ceced8] '> Ernest Achiever</h5>
        <small className=' text-[#9d9da6] ml-2 h-[109px] w-[381px] '> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae. Vero, neque. Possimus quo repellendus vitae unde, nostrum doloremque perspiciatis nemo, tempore nam laboriosam officia eius accusantium fugit quae quod.
        </small>
      </div>
    </section>

    
    </>
  )
}

export default Test