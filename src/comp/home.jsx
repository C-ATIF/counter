import React from 'react'
import port from '../../public/port.jpg'
import image from '../../public/images.png'

function Home() {
  return (
    <>
    <section className=' flex flex-col items-center mt-[128px] overflow-hidden'>
      <h5 className='  text-[#8d8d98]'>Get to Know </h5>
      <h2 className=' text-[#4db5ff] mb-[48px] h-[40px] font-extrabold text-[30px]'> About Me</h2>
    </section>
    <div  className=' flex flex-row  text-white overflow-hidden '>
      <div className=' bg-[#4db5ff] rounded-3xl h-[358px] w-[358px] ml-[170px] '>
        <div className='  rotate-12 hover:rotate-0 flex items-center justify-center '>
          <img src={port} alt="" className=' hover: h-[358px] w-[332px] rounded-[50px]'/>
        </div>

      </div>
      <div className=' h-[512px] w-[436px]  mx-[170px]'>
        <div className=' flex flex-row gap-4 '>
        <span className=' h-[154px] w-[146px]  rounded-lg hover:bg-transparent  border-[#2c2c6c]  border-2 bg-[#2c2c6c]  flex flex-col items-center justify-center gap-y-3 '>
        <h5>Experience</h5>
       <small> 1+ Years Working</small>
          </span>

          <span className=' h-[154px] w-[146px]  rounded-lg hover:bg-transparent  border-[#2c2c6c]  border-2 bg-[#2c2c6c]  flex flex-col items-center justify-center gap-y-3 '>
            <h5>Experience</h5>
            <small> 1+ Years Working</small>
          </span>

          <span className=' h-[154px] w-[146px]  rounded-lg hover:bg-transparent  border-[#2c2c6c]  border-2 bg-[#2c2c6c]  flex flex-col items-center justify-center gap-y-3 '>
          <h5>Experience</h5>
          <small> 1+ Years Working</small>
          </span>
        </div>
        
        <p className=' py-[24px]' >
        I'm , Ambreen Akhtar a seasoned front-end developer passionate about creating cutting-edge and seamless web applications. With proficiency in both front-end and back-end technologies, I bring a meticulous attention to detail to every project. I strive to deliver high-quality code and exceed expectations, making me a valuable asset to any development team.
        </p>
          <button className=' bg-[#5aa7e6]'>Let's talk</button>
      
        </div>
    
    </div>
    </>
  )
}

export default Home