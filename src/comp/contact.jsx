import React from 'react'
import email from '../../public/email.png'

function Contact() {
  return (
    <> 
    <section className=' flex flex-col items-center mt-[128px] mb-5 '>
      <h5 className='text-[#9d9da6]'> Get In Touch</h5>
      <h2 className=' text-[30px] mb-[48px] text-[#4db5ff]'>  Contact Me</h2>
      <div className=' flex flex-row  w-[792px] h-[532px] mx[286px]'> 
        <div className=' flex flex-col gap-5'>
        <article className=' flex flex-col items-center bg-[#2c2c6c] w-[237px] h-[164px] justify-center rounded-3xl '>=
            <img src={email} alt="" className=' h-[24px] w-[24px]'/>
            <h4 className=' text-white'> Email</h4>
            <h5 className=' text-[#9f9fa9]'>chatifali@gail.com</h5>
            <a href=""> send a email</a>
          </article>

          <article className=' flex flex-col items-center bg-[#2c2c6c] w-[237px] h-[164px] justify-center rounded-3xl '>
            <img src={email} alt="" className=' h-[24px] w-[24px]'/>
            <h4 className=' text-white'> Email</h4>
            <h5 className=' text-[#9f9fa9]'>chatifali@gail.com</h5>
            <a href=""> send a email</a>
          </article>

          <article className=' flex flex-col items-center bg-[#2c2c6c] w-[237px] h-[164px] justify-center rounded-3xl '>
            <img src={email} alt="" className=' h-[24px] w-[24px]'/>
            <h4 className=' text-white'> Email</h4>
            <h5 className=' text-[#9f9fa9]'>chatifali@gail.com</h5>
            <a href=""> send a email</a>
          </article>
        </div>
        <div className=' ml-24'>
          <form className=' flex flex-col gap-5'>
            <input type="text" placeholder='enter your name ' className=' w-[460px] h-[67px] bg-transparent rounded-2xl border-2 border-[#2c2c6c] ' />
            <input type="text" placeholder=' your email'  className=' w-[460px] h-[67px] bg-transparent rounded-2xl border-2 border-[#2c2c6c] '  />
            <input type="text" placeholder=' your massage'  className=' w-[460px] h-[157px] bg-transparent rounded-2xl border-2 border-[#2c2c6c] '  />
            <button className=' w-[100px] h-[40px] text-[13px] bg-[#2c2c6c] text-white hover:bg-transparent  '>sendmassage</button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact