import React from 'react'

const LargeBox = ({ groupDetail }) => {
  return (
    <div className=' box grid grid-cols-12 col-span-12 xl:col-span-5 gap-1 p-5 px-10 mx-5 my-2 border rounded-md'>
      <div className='border-b pb-3 grid grid-cols-12 col-span-12 '>
        <div className=' flex flex-col items-center justify-center col-span-12 pt-5'>
          <div className='col-span-12 text-left'> Sender Name : {groupDetail.sender}</div>
        </div>
      </div>
      <div className=' pb-3 grid grid-cols-12 col-span-12'>
        <div className=' flex flex-col items-center justify-center col-span-12 pt-3'>
          <div className='py-1 px-10 rounded-full text-base bg-theme-1 text-white cursor-pointer mb-2 truncate box col-span-3 text-center'>ข้อความ</div>
          <div className='col-span-12 text-center'> {groupDetail.message}</div>
        </div>
      </div>
    </div>
  )
}
export default LargeBox
