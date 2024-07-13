import React from 'react'
import mail from '../../public/mailvail.png'

function Portf() {
  return (
    <>
    <section className=' flex flex-col items-center mt-[128px] gap-4'>
      <h5 className=' text-[#9d9da6] '>My Recent Work</h5>
      <h2 className=' mb-[48px] text-[#4db5ff] font-semibold text-[30px]'>Portfolio</h2>
    </section>
    <div className=' w-[1024px] h-[721px] ml-[170px] flex flex-row flex-wrap gap-[2.5rem]  '>
    <article className=' flex flex-col  w-[274px] h-[300px] hover:border-2 p-[19px] rounded-3xl '>
      <div>
        <img src={mail} className=' h-[149px] ' />
      </div>
      <h3 className=' text-white my-[20px] text-[20px] font-semibold'>Mailavail</h3>
      <div className=' flex flex-row gap-4'>
        <button className='h-[51px] w-[93px] bg-transparent hover:bg-white text-[#4db5ff] border-[1px] border-[#4db5ff]'>Github</button>
        <button className=' w-[122px] h-[51px] bg-[#4db5ff] hover:bg-white'> Live Demo</button>
      </div>
    </article>

    <article className=' flex flex-col  w-[274px] h-[300px] hover:border-2 p-[19px] rounded-3xl '>
      <div>
        <img src={mail} className=' h-[149px] ' />
      </div>
      <h3 className=' text-white my-[20px] text-[17px] font-semibold'>Parify Packaging Customiser</h3>
      <div className=' flex flex-row gap-4'>
        <button className='h-[51px] w-[93px] bg-transparent hover:bg-white text-[#4db5ff] border-[1px] border-[#4db5ff]'>Github</button>
        <button className=' w-[122px] h-[51px] bg-[#4db5ff] hover:bg-white'> Live Demo</button>
      </div>
    </article>

    <article className=' flex flex-col  w-[274px] h-[300px] hover:border-2 p-[19px] rounded-3xl '>
      <div>
        <img src={mail} className=' h-[149px] ' />
      </div>
      <h3 className=' text-white my-[20px] text-[15px] font-semibold'>Capregsoft Portfolio Website</h3>
      <div className=' flex flex-row gap-4'>
        <button className='h-[51px] w-[93px] bg-transparent hover:bg-white text-[#4db5ff] border-[1px] border-[#4db5ff]'>Github</button>
        <button className=' w-[122px] h-[51px] bg-[#4db5ff] hover:bg-white'> Live Demo</button>
      </div>
    </article> 

    <article className=' flex flex-col  w-[274px] h-[300px] hover:border-2 p-[19px] rounded-3xl '>
      <div>
        <img src={mail} className=' h-[149px] ' />
      </div>
      <h3 className=' text-white my-[20px] text-[20px] font-semibold'>Mailavail</h3>
      <div className=' flex flex-row gap-4'>
        <button className='h-[51px] w-[93px] bg-transparent hover:bg-white text-[#4db5ff] border-[1px] border-[#4db5ff]'>Github</button>
        <button className=' w-[122px] h-[51px] bg-[#4db5ff] hover:bg-white'> Live Demo</button>
      </div>
    </article>

    </div>
    </>
  )
}

export default Portf