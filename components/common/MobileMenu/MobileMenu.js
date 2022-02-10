import React, { useState } from 'react'
import navMenu from '../../../config/menu'
import Icon from '../../items/Icon'
import Link from 'next/link'
const checkArray = (slug, items) => {
  if (items) {
    const data = items.filter((item) => slug === item.subSlug)
    if (data[0] != null) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

const hasSub = (slug) => {
  if (slug) {
    return true
  } else {
    return false
  }
}

const SideMenu = (props) => {
  const [active, setActive] = useState()
  const [activeDropdown, setDropdownActive] = useState(false)
  const sideMenuOpenClass = active ? 'menu--open' : ''
  const sideMenuSubOpenClass = active ? 'menu__sub-open block' : ''
  const handleMenu = (subMenu) => {
    if (hasSub(subMenu)) {
      setActive(!active)
    } else {
      setDropdownActive(!activeDropdown)
    }
  }
  return (
    <div className='mobile-menu md:hidden'>
      <div className='mobile-menu-bar'>
        <Link href='/' as='/'>
          <a className='flex mr-auto'>
            <img alt='ShortMS บริการ ส่ง SMS ที่ดีที่สุด' className='w-32' src='/static/dist/images/logo.svg' />
          </a>
        </Link>
        <a id='mobile-menu-toggler' onClick={() => setDropdownActive(!activeDropdown)}>
          {' '}
          <Icon name='menu' className='text-white' />{' '}
        </a>
      </div>
      <ul
        className={`border-t border-theme-24 py-5 ${activeDropdown === true ? 'show' : 'hidden'}`}
      >
        {navMenu.map((mainItem, key) => (
          <li key={mainItem.mainSlug}>
            <Link
              href={hasSub(mainItem.subMenu) ? '#' : mainItem.mainSlug}
              as={hasSub(mainItem.subMenu) ? '#' : mainItem.mainSlug}
            >
              <a
                className={`menu menu--active
              ${
                mainItem.mainSlug === props.activeMenu ||
                checkArray(props.activeMenu, mainItem.subMenu)
                  ? 'side-menu--active'
                  : ''
              }
              ${sideMenuOpenClass}
              `}
                onClick={() => handleMenu(mainItem.subMenu)}
              >
                <div className='menu__icon'>
                  <Icon name={`${mainItem.mainIcon}`} />
                </div>
                <div className='menu__title'> {mainItem.mainValue} </div>
                {hasSub(mainItem.subMenu) ? (
                  <Icon name='chevron-down' className='menu__sub-icon' />
                ) : (
                  ''
                )}
              </a>
            </Link>
            {hasSub(mainItem.subMenu) ? (
              <ul
                className={`${
                  props.activeMenu === mainItem.mainSlug ||
                  checkArray(props.activeMenu, mainItem.subMenu)
                    ? 'menu__sub-open'
                    : ''
                } ${sideMenuSubOpenClass}`}
              >
                {mainItem.subMenu.map((subItem, key2) => (
                  <li key={subItem.subSlug}>
                    <Link href={`/${subItem.subSlug}`} as={`/${subItem.subSlug}`}>
                      <a
                        className={`menu ${
                        props.activeMenu === subItem.subSlug ? 'menu--active' : ''
                        }`}
                      >
                        <div className='menu__icon'>
                          <Icon name={`${subItem.subIcon}`} />
                        </div>
                        <div className='menu__title'>{subItem.subValue} </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideMenu
