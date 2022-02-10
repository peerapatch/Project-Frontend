import React, { useState } from 'react'
import Icon from '../../items/Icon'
import { useUser } from '../../../hooks/user'
import Link from 'next/link'
const AccountMenu = (props) => {
  const [activeDropdown, setDropdownActive] = useState(false)
  const { userData, genAvatar } = useUser()
  const { username, bio } = userData
  const avatar = genAvatar
  return (
    <div className='intro-x dropdown w-8 h-8 relative'>
      <div
        className='dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in'
        onClick={() => setDropdownActive(!activeDropdown)}
      >
        <img title='Shortms User' alt='Shortms User' src={avatar} />
      </div>
      <div
        className={`dropdown-box mt-10 absolute w-56 top-0 right-0 z-20 ${
          activeDropdown === true ? 'show' : ''
        }`}
      >
        <div className='dropdown-box__content box bg-theme-38 text-white'>
          <div className='p-4 border-b border-theme-40'>
            <div className='font-medium'>{bio && bio.company}  </div>
            <div className='text-xs text-theme-41'>{username}</div>
          </div>
          {/* <div className='p-2'>
            <a href='' className='flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md'>
              Profile
            </a>
          </div> */}
          <div className='p-2 border-t border-theme-40 text-white'>
            <Link href='/logout' as='/logout'>
              <a
                className='flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md cursor-pointer text-white'
              >
                <Icon name='toggle-right' className='w-4 h-4 mr-2' />
              Logout
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountMenu
