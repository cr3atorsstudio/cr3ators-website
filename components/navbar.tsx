const Navabr = () => {
  return (
    <div>
      <nav className='px-2 py-2.5 sm:px-4'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <a href='https://www.cr3ators.studio/' className='flex items-center'>
            <img
              src={"/logo.jpeg"}
              className='mr-3 h-6 rounded-lg sm:h-9'
              alt='CS Logo'
            />
            <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
              Creators Studio
            </span>
          </a>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <svg
              className='h-6 w-6'
              aria-hidden='true'
              fill='white'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 p-4 dark:border-gray-700 md:mt-0 md:flex-row md:space-x-10 md:border-0 md:font-medium lg:space-x-20 lg:text-2xl '>
              <li>
                <a
                  href='#'
                  className='block rounded bg-yellow-300 py-2 pr-4 pl-3 text-white hover:text-yellow-300 dark:text-white md:bg-transparent md:p-0'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block rounded bg-yellow-300 py-2 pr-4 pl-3 text-white hover:text-yellow-300 dark:text-white md:bg-transparent md:p-0'
                  aria-current='page'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block rounded bg-yellow-300 py-2 pr-4 pl-3 text-white hover:text-yellow-300 dark:text-white md:bg-transparent md:p-0'
                  aria-current='page'
                >
                  Apply Form
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navabr;
