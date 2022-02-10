import React, { useState } from 'react'
import Modal from 'react-modal'
import Icon from '../../../components/items/Icon'
import DotLoader from 'react-spinners/DotLoader'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    zIndex: '99',
    transform: 'translate(-50%, -50%)',
    minWidth: '300px'
  }
}

const confirmModal = (prop) => {
  const [loading, setLoading] = useState(false)
  const callAction = () => {
    setLoading(true)
    prop.setAlertMessage(prop.message)
    prop.confirmAction()
    if (!prop.checkCorrect) {
      setTimeout(() => {
        prop.openAlertModal()
        prop.closeModal()
      }, 500)
    }
  }
  const closeModal = () => {
    setLoading(false)
    prop.closeModal()
  }
  const setStart = () => {
    setLoading(false)
  }
  return (
    <Modal
      isOpen={prop.modalIsOpen}
      onRequestClose={closeModal}
      onAfterOpen={setStart}
      style={customStyles}
      contentLabel='จะแก้ไขแฟ้มนี้หรือไม่?'
      ariaHideApp={false}
    >
      <div className='border-b border-gray-200 intro-y mx-10 my-5 justify-center text-center'>
        {!prop.confirmIcon && <h1 className='text-center justify-center px-2 my-1 mr-1 mb-2 flex '>{<Icon name='alert-triangle' className='w-32 text-red-700' />}</h1>}
        <h2 className='font-medium text-base mr-auto text-center text-lg lg:text-xl mb-5'> {prop.message}หรือไม่ ? </h2>
        {prop.confirmIcon && <h1 className='text-center justify-center px-2 my-1 mr-1 mb-2 flex '>{<Icon name={prop.confirmIcon} className='w-10 h-10 text-theme-1' />}</h1>}
      </div>
      {prop.detail &&
        <div className='font-medium text-base mr-auto text-center text-sm lg:text-lg mb-5'>
          {prop.detail()}
        </div>}
      <div className='col-span-12 grid grid-cols-12 gap-1 text-center my-5 w-full'>
        {!loading &&
          <button type='button' onClick={callAction} className='button bg-theme-9 text-white mt-2 text-xl col-span-6 lg:mx-2'>
            <div className='mx-1'>ตกลง</div>
          </button>}
        {!loading &&
          <button type='button' onClick={closeModal} className='button bg-theme-1 text-white mt-2 text-xl col-span-6 lg:mx-2'>
            ยกเลิก
          </button>}
        {loading &&
          <div className='col-span-12 flex flex-col justify-center items-center'>
            <DotLoader color='black' size={30} loading={loading} />
          </div>}
      </div>

    </Modal>
  )
}
export default confirmModal
