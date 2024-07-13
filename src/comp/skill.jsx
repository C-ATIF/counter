import React from 'react'
import icon from '../../public/icon.png'

function Skill() {
const container =[
  { 
    img: icon,
    tit: 'HTML',
    des: 'Experienced',
  },

  

]

  return (
    <>
    <section className=' flex flex-col items-center mt-[128px] mb-5'>
      <h5 className='text-[#9d9da6]'>What Skills I have</h5>
      <h1 className=' mb-[48px] text-[#4db5ff]'>My Experience</h1>
    </section>

    <div className=' flex flex-row gap-5 ml-[170px] w-[1024px] h-[369px]'>

      
    <div className=' flex flex-col w-[496px] h-[369px] bg-[#2c2c6c] border-[#2c2c6c] border-2 items-center justify-center rounded-2xl hover:bg-transparent'>
      <h2 className=' font-extrabold text-[25px] text-[#4db5ff]'> Frontend Development</h2>
    <div className='w-[324px] h-[227px] mt-8 flex flex-row gap-6 items-center'>
    {container.map((item)=>(
    <span className=' flex flex-col gap-9'>
<span className=' flex flex-row  text-white h-[54px] w-[167px]  ' >
    
    <img src={item.img} className=' h-7 w-7 mt-[6px]' />
    <span className=' ml-4'>
    <h2 className=' font-bold'>{item.tit}</h2>
    <h6 className=' text-[#9f9fa9]'> {item.des} </h6>
    </span>
  
  </span>

  <span className=' flex flex-row  text-white h-[54px] w-[167px]  ' >
    
    <img src={item.img} className=' h-7 w-7 mt-[6px]' />
    <span className=' ml-4'>
    <h2 className=' font-bold'>{item.tit}</h2>
    <h6 className=' text-[#9f9fa9]'> {item.des} </h6>
    </span>
  
  </span>
   
  <span className=' flex flex-row  text-white h-[54px] w-[167px]  ' >
    
    <img src={item.img} className=' h-7 w-7 mt-[6px]' />
    <span className=' ml-4'>
    <h2 className=' font-bold'>{item.tit}</h2>
    <h6 className=' text-[#9f9fa9]'> {item.des} </h6>
    </span>
  
  </span>
    </span>
  

))

}

{container.map((item)=>(
    <span className=' flex flex-col gap-9'>
<span className=' flex flex-row  text-white h-[54px] w-[167px]  ' >
    
    <img src={item.img} className=' h-7 w-7 mt-[6px]' />
    <span className=' ml-4'>
    <h2 className=' font-bold'>{item.tit}</h2>
    <h6 className=' text-[#9f9fa9]'> {item.des} </h6>
    </span>
  
  </span>

  <span className=' flex flex-row  text-white h-[54px] w-[167px]  ' >
    
    <img src={item.img} className=' h-7 w-7 mt-[6px]' />
    <span className=' ml-4'>
    <h2 className=' font-bold'>{item.tit}</h2>
    <h6 className=' text-[#9f9fa9]'> {item.des} </h6>
    </span>
  
  </span>
   
  <span className=' flex flex-row  text-white h-[54px] w-[167px]  ' >
    
    <img src={item.img} className=' h-7 w-7 mt-[6px]' />
    <span className=' ml-4'>
    <h2 className=' font-bold'>{item.tit}</h2>
    <h6 className=' text-[#9f9fa9]'> {item.des} </h6>
    </span>
  
  </span>
    </span>
  

))

}




    </div>

</div>
  
<div className=' flex flex-col w-[496px] h-[369px]  bg-[#2c2c6c] border-[#2c2c6c] hover:bg-transparent rounded-2xl border-2 items-center justify-center'>
      <h2 className=' font-extrabold text-[25px] text-[#4db5ff]'> Frontend Development</h2>
    <div className='w-[324px] h-[227px] mt-8 flex flex-row gap-6 items-center'>
    {container.map((item)=>(
    <span className=' flex flex-col gap-9'>
<span className=' flex flex-row  text-white h-[54px] w-[167px]  ' >
    
    <img src={item.img} className=' h-7 w-7 mt-[6px]' />
    <span className=' ml-4'>
    <h2 className=' font-bold'>{item.tit}</h2>
    <h6 className=' text-[#9f9fa9]'> {item.des} </h6>
    </span>
  
  </span>

  <span className=' flex flex-row  text-white h-[54px] w-[167px]  ' >
    
    <img src={item.img} className=' h-7 w-7 mt-[6px]' />
    <span className=' ml-4'>
    <h2 className=' font-bold'>{item.tit}</h2>
    <h6 className=' text-[#9f9fa9]'> {item.des} </h6>
    </span>
  
  </span>
   
  <span className=' flex flex-row  text-white h-[54px] w-[167px]  ' >
    
    <img src={item.img} className=' h-7 w-7 mt-[6px]' />
    <span className=' ml-4'>
    <h2 className=' font-bold'>{item.tit}</h2>
    <h6 className=' text-[#9f9fa9]'> {item.des} </h6>
    </span>
  
  </span>
    </span>
  

))

}

{container.map((item)=>(
    <span className=' flex flex-col gap-9'>
<span className=' flex flex-row  text-white h-[54px] w-[167px]  ' >
    
    <img src={item.img} className=' h-7 w-7 mt-[6px]' />
    <span className=' ml-4'>
    <h2 className=' font-bold'>{item.tit}</h2>
    <h6 className=' text-[#9f9fa9]'> {item.des} </h6>
    </span>
  
  </span>

  <span className=' flex flex-row  text-white h-[54px] w-[167px]  ' >
    
    <img src={item.img} className=' h-7 w-7 mt-[6px]' />
    <span className=' ml-4'>
    <h2 className=' font-bold'>{item.tit}</h2>
    <h6 className=' text-[#9f9fa9]'> {item.des} </h6>
    </span>
  
  </span>
   
  <span className=' flex flex-row  text-white h-[54px] w-[167px]  ' >
    
    <img src={item.img} className=' h-7 w-7 mt-[6px]' />
    <span className=' ml-4'>
    <h2 className=' font-bold'>{item.tit}</h2>
    <h6 className=' text-[#9f9fa9]'> {item.des} </h6>
    </span>
  
  </span>
    </span>
  

))

}




    </div>

    </div>

     
   
    </div>
    </>
  )
}

export default Skill