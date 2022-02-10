import React from 'react'
import Modal from 'react-modal'
import Icon from '../../../components/items/Icon'
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

const ShowErrorModal = (prop) => {
  const closeModal = () => {
    prop.closeModal()
  }

  return (
    <Modal
      isOpen={prop.modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='จะแก้ไขแฟ้มนี้หรือไม่?'
      ariaHideApp={false}
    >
      <div className='border-b border-gray-200 intro-y mx-10 my-2 justify-center text-center'>
        <h1 className='text-center justify-center px-2 my-1 mr-1 mb-2 flex '><Icon name='alert-triangle' className='w-32 text-red-700' /></h1>
        {prop.errorUsername && <h2 className='font-medium text-base mr-auto text-center  text-2xl mb-5'> ชื่อผู้ใช้นี้ไม่สามารถใช้งานได้ </h2>}
        {prop.errorEmail && <h2 className='font-medium text-base mr-auto text-center  text-2xl mb-5'> อีเมลนี้ไม่สามารถใช้งานได้ </h2>}
        {prop.errorTel && <h2 className='font-medium text-base mr-auto text-center  text-2xl mb-5'> เบอร์โทรนี้ไม่สามารถใช้งานได้ </h2>}
        {prop.errorRole && <h2 className='font-medium text-base mr-auto text-center  text-2xl mb-5'> {prop.errorRole} </h2>}
        {prop.errorBlock && <h2 className='font-medium text-base mr-auto text-center  text-2xl'> {prop.errorBlock} </h2>}
      </div>
      <div className='col-span-12 sm:col-span-12 text-center intro-x mx-20'>
        {prop.subError && <h2 className='font-medium text-base mr-auto text-center text-lg mb-5'> {prop.subError} </h2>}
        <button type='button' onClick={closeModal} className='button bg-theme-12 text-white mt-2 text-xl'>
          <div className='flex flex-row'>
            <div className='mx-1'>ตกลง</div>
          </div>
        </button>
      </div>

    </Modal>
  )
}
export default ShowErrorModal
