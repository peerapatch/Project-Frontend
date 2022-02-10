// import TopBar from '../TopBar'
// import Footer from '../Footer'
import Content from '../Content'

const Body = (props) => {
  const { pathname, children } = props
  console.log(pathname)
  return (
    <div className='app body'>
      <section className='bg'>
        <div className='container '>
          <div />
          {/* <TopBar /> */}
          <Content>
            {children}

          </Content>

        </div>
        {/* <Footer /> */}
      </section>

    </div>
  )
}

export default Body
