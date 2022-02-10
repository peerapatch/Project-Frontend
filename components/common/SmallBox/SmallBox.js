import React from 'react'

const SmallBox = ({ Detail, topic, color }) => {
  return (
    <div className=' box grid grid-cols-12 col-span-6 xl:col-span-4 gap-1 p-10 px-10 mx-5 my-2 text-left border rounded-md'>
      <div className='col-span-8'>{topic[0]}:</div>
      <div className={`col-span-4 text-right ${color && 'text-theme-9'}`}> {Detail[0]}</div>
      <div className='col-span-8'>{topic[1]}:</div>
      <div className={`col-span-4 text-right ${color && 'text-theme-11'}`}> {Detail[1]}</div>
      <div className='col-span-8'>{topic[2]}:</div>
      <div className={`col-span-4 text-right ${color && 'text-theme-6'}`}> {Detail[2]}</div>
    </div>
  )
}
export default SmallBox
