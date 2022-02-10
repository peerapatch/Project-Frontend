import React, { useState } from 'react'
// import menu from '../../../config/menu'
// import Icon from '../../items/Icon'
// import Link from 'next/link'
const SideMenu = (props) => {
  // const { activeMenu } = props
  // const [active, setActive] = useState()
  // const ShowMenu = menu
  // const handleMenu = (subMenu) => hasSub(subMenu) && setActive(!active)

  return (
    <div id='content_left'>
      <div className='content_left_section'>
        <div className='left_section_title'>Menu</div>
        <div className='left_section_content'>
          <ul>
            <li><a href=''>ROI</a></li>
            <li><a href=''>Check Staff</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideMenu
