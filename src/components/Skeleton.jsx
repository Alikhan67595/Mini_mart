import React from 'react'

const Skeleton = () => {
  return (
    <div className='box-border flex flex-wrap justify-center gap-6   max-w-7xl m-auto '>
    {
        Array.from({length:30}).map((_,index)=>(
            <div key={index} className='box-border border-[#262626] border-[1px] bg-[#262626] flex flex-col  w-[300px] h-[400px] rounded-[15px] p-[25px] px-[25px] justify-between '>


       <div className='bg-[#141414] w-[100%] h-[250px] flex justify-center items-center rounded-[15px]'> <div className='w-[200px]'  /></div>

       <div className='flex flex-col gap-[5px] mt-[5px]'>
        <h1 className='bg-[#141414] w-[100%] h-[30px] px-[7px] py-[6px] rounded-md mt-[10px]'></h1>
        <div className=' bg-[#141414] w-[50px] h-[25px] rounded-[15px] py-[4px] px-[8px] '></div>
      
      <h6 className='bg-[#141414] w-[50px] h-[15px] px-[7px] py-[6px] rounded-[4px]'></h6>

      <div className='flex justify-between items-end '>
      <h6 className='bg-[#141414] w-[65px] h-[25px] px-[7px] py-[6px] rounded-md'></h6>

      <button className='bg-[#141414] w-[80px] h-[30px] px-[7px] py-[6px] rounded-md '></button>

      </div>
       </div>



            </div>
        ))
    }
    </div>
  )
}

export default Skeleton
