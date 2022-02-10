import Content from '../Content'
// import Loader from 'react-spinners/BeatLoader'

const Loading = () => {
  return (
    <Content>
      <div className='flex grid mt-10'>
        <div className=' flex-1 intro-y lg:mb-0 lg:ml-5 mb-5 mt-5 text-center'>
          กำลังเปลี่ยนหน้า
          {/* <Loader color='#65c1aa' size={15} loading /> */}
        </div>
      </div>
    </Content>
  )
}

export default Loading
