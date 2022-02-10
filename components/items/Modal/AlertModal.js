import React from 'react'
import Modal from 'react-modal'
import Icon from '../../../components/items/Icon'
import Link from 'next/link'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    zIndex: '99',
    transform: 'translate(-50%, -50%)'

  }
}

const AlertModal = (prop) => {
  const closeModal = () => {
    prop.closeModal()
  }

  return (
    <Modal
      isOpen={prop.modalIsOpen}
      style={customStyles}
      contentLabel='จะแก้ไขแฟ้มนี้หรือไม่?'
      ariaHideApp={false}
    >
      <div className='border-b border-gray-200 intro-y mx-10 my-5 justify-center text-center'>
        <h1 className='text-center justify-center px-2 my-1 mb-2 flex '><Icon name='check-circle' className='w-32 text-theme-9' /></h1>
        <h2 className='font-medium text-base mr-auto text-center  text-xl mb-5'> {prop.message}สำเร็จ </h2>
      </div>
      <div className='col-span-6 text-center mx-10 my-5'>
        <button type='button' onClick={closeModal} className='button bg-theme-9 text-white mt-2 text-xl'>
          <div className='mx-1'>{prop.messageButton}</div>
        </button>
        {prop.register &&
          <Link href='/login'>
            <a>
              <button className='text-left ml-5'>
                <div className='button bg-theme-6 text-white mt-2 text-xl'>
                  <div className='mx-1'>ปิด</div>
                </div>
              </button>
            </a>
          </Link>}
      </div>
    </Modal>
  )
}
export default AlertModal
