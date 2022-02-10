import Icon from '../../items/Icon'
import { pagesName } from '../../../helpers/pages'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Breadcrumb = (props) => {
  const { loading, pathname, subPathname } = props
  const router = useRouter()
  const { id } = router.query
  const asPath = router.asPath
  const pathnameCurrent = router.pathname
  return (
    <div className='-intro-x hidden breadcrumb mr-auto  sm:flex'>
      <Link href='/' as='/'>
        <a className='text-black'>
        ShortMS
        </a>
      </Link>
      {!loading &&
        <>
          {subPathname &&
            <>
              <Icon name='chevron-right' className='breadcrumb__icon' />
              <Link href={`/${pathname}`} as={`/${pathname}`}>
                <a className='breadcrumb--active'>
                  {pagesName(pathname)}
                </a>
              </Link>
              <Icon name='chevron-right' className='breadcrumb__icon' />
              <Link href={`${pathnameCurrent}`} as={asPath}>
                <a className='breadcrumb--active'>
                  {subPathname ? `${pagesName(`${pathname}/${subPathname}`)}` : pagesName(pathname)}
                </a>
              </Link>
            </>}
          {!subPathname &&
            <>
              <Icon name='chevron-right' className='breadcrumb__icon' />
              <Link href={`/${pathname}${id ? '/[id]' : ''}`} as={`/${pathname}${id ? `/${id}` : ''}`}>
                <a className='breadcrumb--active'>
                  {pagesName(pathname)}
                </a>
              </Link>
            </>}
        </>}
      {loading &&
        <>
          <Icon name='chevron-right' className='breadcrumb__icon' />
          <a href='' className='breadcrumb--active'>
          Loading ...
          </a>
        </>}
    </div>
  )
}

export default Breadcrumb
