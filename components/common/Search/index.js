const Search = () => {
  return (
    <div className='intro-x relative mr-3 sm:mr-6'>
      <div className='search hidden sm:block'>
        <input
          type='text'
          className='search__input input placeholder-theme-13'
          placeholder='Search...'
        />
      </div>
      <a className='notification sm:hidden' href='' />
      <div className='search-result'>
        <div className='search-result__content'>
          <div className='search-result__content__title'>Pages</div>
          <div className='mb-5'>
            <a href='' className='flex items-center'>
              <div className='w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full' />
              <div className='ml-3'>Mail Settings</div>
            </a>
            <a href='' className='flex items-center mt-2'>
              <div className='w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full' />
              <div className='ml-3'>Users &amp; Permissions</div>
            </a>
            <a href='' className='flex items-center mt-2'>
              <div className='w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full' />
              <div className='ml-3'>Transactions Report</div>
            </a>
          </div>
          <div className='search-result__content__title'>Users</div>
          <div className='mb-5'>
            <a href='' className='flex items-center mt-2'>
              <div className='w-8 h-8 image-fit'>
                <img
                  alt='ShortMS บริการ ส่ง SMS ที่ดีที่สุด'
                  className='rounded-full'
                  src='/static/dist/images/profile-2.jpg'
                />
              </div>
              <div className='ml-3'>Arnold Schwarzenegger</div>
              <div className='ml-auto w-48 truncate text-gray-600 text-xs text-right'>
                arnoldschwarzenegger@gmail.com
              </div>
            </a>
            <a href='' className='flex items-center mt-2'>
              <div className='w-8 h-8 image-fit'>
                <img
                  alt='ShortMS บริการ ส่ง SMS ที่ดีที่สุด'
                  className='rounded-full'
                  src='/static/dist/images/profile-2.jpg'
                />
              </div>
              <div className='ml-3'>Nicolas Cage</div>
              <div className='ml-auto w-48 truncate text-gray-600 text-xs text-right'>
                nicolascage@gmail.com
              </div>
            </a>
            <a href='' className='flex items-center mt-2'>
              <div className='w-8 h-8 image-fit'>
                <img
                  alt='ShortMS บริการ ส่ง SMS ที่ดีที่สุด'
                  className='rounded-full'
                  src='/static/dist/images/profile-12.jpg'
                />
              </div>
              <div className='ml-3'>Kate Winslet</div>
              <div className='ml-auto w-48 truncate text-gray-600 text-xs text-right'>
                katewinslet@gmail.com
              </div>
            </a>
            <a href='' className='flex items-center mt-2'>
              <div className='w-8 h-8 image-fit'>
                <img
                  alt='ShortMS บริการ ส่ง SMS ที่ดีที่สุด'
                  className='rounded-full'
                  src='/static/dist/images/profile-15.jpg'
                />
              </div>
              <div className='ml-3'>Tom Cruise</div>
              <div className='ml-auto w-48 truncate text-gray-600 text-xs text-right'>
                tomcruise@gmail.com
              </div>
            </a>
          </div>
          <div className='search-result__content__title'>Products</div>
          <a href='' className='flex items-center mt-2'>
            <div className='w-8 h-8 image-fit'>
              <img
                alt='ShortMS บริการ ส่ง SMS ที่ดีที่สุด'
                className='rounded-full'
                src='/static/dist/images/preview-6.jpg'
              />
            </div>
            <div className='ml-3'>Nike Air Max 270</div>
            <div className='ml-auto w-48 truncate text-gray-600 text-xs text-right'>
              Sport &amp; Outdoor
            </div>
          </a>
          <a href='' className='flex items-center mt-2'>
            <div className='w-8 h-8 image-fit'>
              <img
                alt='ShortMS บริการ ส่ง SMS ที่ดีที่สุด'
                className='rounded-full'
                src='/static/dist/images/preview-9.jpg'
              />
            </div>
            <div className='ml-3'>Samsung Q90 QLED TV</div>
            <div className='ml-auto w-48 truncate text-gray-600 text-xs text-right'>
              Electronic
            </div>
          </a>
          <a href='' className='flex items-center mt-2'>
            <div className='w-8 h-8 image-fit'>
              <img
                alt='ShortMS บริการ ส่ง SMS ที่ดีที่สุด'
                className='rounded-full'
                src='/static/dist/images/preview-14.jpg'
              />
            </div>
            <div className='ml-3'>Oppo Find X2 Pro</div>
            <div className='ml-auto w-48 truncate text-gray-600 text-xs text-right'>
              Smartphone &amp; Tablet
            </div>
          </a>
          <a href='' className='flex items-center mt-2'>
            <div className='w-8 h-8 image-fit'>
              <img
                alt='ShortMS บริการ ส่ง SMS ที่ดีที่สุด'
                className='rounded-full'
                src='/static/dist/images/preview-4.jpg'
              />
            </div>
            <div className='ml-3'>Apple MacBook Pro 13</div>
            <div className='ml-auto w-48 truncate text-gray-600 text-xs text-right'>
              PC &amp; Laptop
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Search
