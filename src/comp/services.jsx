import React from 'react'
import tick from '../../public/tick.png'

function Service() {
  return (
    <>
    <section className=' flex flex-col items-center mt-[128px] mb-5 '>
      <h5 className='text-[#9d9da6]'  >
      What I Offer
      </h5>
      <h2  className=' text-[30px] mb-[48px] text-[#4db5ff]'>
      Services
      </h2>
    </section>

    <div className='  w-[1048px] h-[380px] ml-[170px]  flex flex-row gap-10'>
      <article className=' bg-[#2c2c6c] border-2 border-[#4db5ff]  rounded-b-[30px] w-[309px] h-[380px] hover:bg-transparent'>
        <div className=' flex  text-white w-[307px] h-[91px] bg-[#4db5ff] rounded-b-[20px] items-center justify-center '>
          <h2 className=' w-[243px] h-[27px]'>Full Stack Development</h2>
        </div>
        <ul className=' flex flex-col gap-3 ml-8 mt-7'>
          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'>Saas product</p>
          </li>
          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'> Web applications</p>
          </li>

          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'> Database management</p>
          </li>

          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5 ml' />
            <p className=' ml-3'>End to end development</p>
          </li>

          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'> Deployment</p>
          </li>

          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'> Fully custom website</p>
          </li>

        </ul>
      </article>

      <article className=' bg-[#2c2c6c] border-2 border-[#4db5ff]  rounded-b-[30px] w-[309px] h-[380px] hover:bg-transparent'>
        <div className=' flex  text-white w-[307px] h-[91px] bg-[#4db5ff] rounded-b-[20px] items-center justify-center '>
          <h2 className=' w-[243px] h-[27px]'>Frontend Development</h2>
        </div>
        <ul className=' flex flex-col gap-3 ml-8 mt-7'>
          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'>Custom web development</p>
          </li>
          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'> UI to UX conversion</p>
          </li>

          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'> Responsive design</p>
          </li>

          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5 ml' />
            <p className=' ml-3'>Api integration</p>
          </li>

          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'> Performance optimization</p>
          </li>

        </ul>
      </article>

      <article className=' bg-[#2c2c6c] border-2 border-[#4db5ff]  rounded-b-[30px] w-[309px] h-[380px] hover:bg-transparent'>
        <div className=' flex  text-white w-[307px] h-[91px] bg-[#4db5ff] rounded-b-[20px] items-center justify-center '>
          <h2 className=' w-[243px] h-[27px]'>Backend Development</h2>
        </div>
        <ul className=' flex flex-col gap-3 ml-8 mt-7'>
          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'>Api creation</p>
          </li>
          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'>Database creation</p>
          </li>

          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'> Database connectivity</p>
          </li>

          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5 ml' />
            <p className=' ml-3'>Secure development</p>
          </li>

          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'> Optimize performance</p>
          </li>

          <li className=' text-white flex flex-row'>
            <img src={tick} className=' h-5 w-5' />
            <p className=' ml-3'> Deployment</p>
          </li>

        </ul>
      </article>

    </div>
    </>
  )
}

export default Service