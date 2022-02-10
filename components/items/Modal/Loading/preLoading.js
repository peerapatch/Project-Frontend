import React from 'react'
import Modal from 'react-modal'
import DotLoader from 'react-spinners/DotLoader'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: '1px solid rgb(204 204 204 / 0%)',
    background: 'rgb(255 255 255 / 0%)',
    zIndex: '99',
    transform: 'translate(-50%, -50%)'

  }
}

const ModalPreLoading = (props) => {
  const loading = true
  // const closeModal = () => {
  //   props.closeModal()
  // }
  return (
    <Modal
      isOpen={props.modalIsOpen}
      // onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className='justify-center text-center'>
        <DotLoader color='#002046' size={70} loading={loading} />
      </div>
    </Modal>
  )
}

export default ModalPreLoading
