import React from 'react'
import Link from 'next/link'

const MenuItem = ({ href, label }) => {
  return (
    <li className='inline-block p-4 hover:bg-gray-100'>
      <Link href={href}>
        <a className='hover:underline'>{label}</a>
      </Link>
    </li>
  )
}

const Header2 = () => {
  return (
    <div>
      <h1 className='inline-block'>
        <Link href='/'>
          <a>
            <img src='/logo.png' alt='Projeto Parabéns' />
          </a>
        </Link>
      </h1>
      <div>
        <ul className='inline-block'>
          <MenuItem href='/o-projeto' label='O projeto' />
          <MenuItem href='/novidades' label='Novidades' />
          <MenuItem href='/parceiros' label='Parceiros' />
          <MenuItem href='/loja' label='Loja' />
          <MenuItem href='/contato' label='Contato' />
        </ul>
        <ul className='float-right'>
          <li className='inline-block p-4 hover:bg-gray-100'>
            <Link href={'/seja-voluntario'}>
              <a className='hover:underline'>Seja voluntário</a>
            </Link>
          </li>
          <li className='inline-block p-4 text-white rounded bg-blue-800 hover:bg-blue-900'>
            <Link href={'/doar'}>
              <a className='hover:underline'>Doar</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

const Header3 = () => {
  return (
    <header class='text-gray-700 body-font'>
      <div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <nav class='flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto'>
          <a class='mr-5 hover:text-gray-900'>First Link</a>
          <a class='mr-5 hover:text-gray-900'>Second Link</a>
          <a class='mr-5 hover:text-gray-900'>Third Link</a>
          <a class='hover:text-gray-900'>Fourth Link</a>
        </nav>
        <a class='flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0'>
          <img src='/logo.png' alt='Projeto Parabéns' />
        </a>
        <div class='lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0'>
          Seja um voluntário
          <button class='inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0'>
            DOAR
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              class='w-4 h-4 ml-1'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

const Header = () => {
  return (
    <div class='relative bg-white overflow-hidden'>
      <div class='max-w-screen-xl mx-auto'>
        <div class='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            class='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <div class='relative pt-6 px-4 sm:px-6 lg:px-8'>
            <nav class='relative flex items-center justify-between sm:h-10 lg:justify-start'>
              <div class='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                <div class='flex items-center justify-between w-full md:w-auto'>
                  <a href='#' aria-label='Home'>
                    <img
                      class='h-8 w-auto sm:h-10'
                      src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                      alt='Logo'
                    />
                  </a>
                  <div class='-mr-2 flex items-center md:hidden'>
                    <button
                      type='button'
                      class='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                      id='main-menu'
                      aria-label='Main menu'
                      aria-haspopup='true'
                    >
                      <svg
                        class='h-6 w-6'
                        stroke='currentColor'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M4 6h16M4 12h16M4 18h16'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class='hidden md:block md:ml-10 md:pr-4'>
                <a
                  href='#'
                  class='font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Sobre o projeto
                </a>
                <a
                  href='#'
                  class='ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Apoiadores
                </a>
                <a
                  href='#'
                  class='ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out'
                >
                  Ser voluntário
                </a>
                <a
                  href='#'
                  class='ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out'
                >
                  Doar
                </a>
              </div>
            </nav>
          </div>

          <div class='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
            <div class='rounded-lg shadow-md'>
              <div
                class='rounded-lg bg-white shadow-xs overflow-hidden'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='main-menu'
              >
                <div class='px-5 pt-4 flex items-center justify-between'>
                  <div>
                    <img
                      class='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                      alt=''
                    />
                  </div>
                  <div class='-mr-2'>
                    <button
                      type='button'
                      class='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                      aria-label='Close menu'
                    >
                      <svg
                        class='h-6 w-6'
                        stroke='currentColor'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class='px-2 pt-2 pb-3'>
                  <a
                    href='#'
                    class='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                    role='menuitem'
                  >
                    Product
                  </a>
                  <a
                    href='#'
                    class='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                    role='menuitem'
                  >
                    Features
                  </a>
                  <a
                    href='#'
                    class='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                    role='menuitem'
                  >
                    Marketplace
                  </a>
                  <a
                    href='#'
                    class='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                    role='menuitem'
                  >
                    Company
                  </a>
                </div>
                <div>
                  <a
                    href='#'
                    class='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out'
                    role='menuitem'
                  >
                    Doar
                  </a>
                </div>
              </div>
            </div>
          </div>

          <main class='mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div class='sm:text-center lg:text-left'>
              <img src='/logo.png' />
              <h2 class='text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl'>
                Unimos corações generosos <br class='xl:hidden' />
                <span class='text-indigo-600'>numa rede do bem!</span>
              </h2>
              <div class='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div class='rounded-md shadow'>
                  <a
                    href='#'
                    class='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
                  >
                    Doar
                  </a>
                </div>
                <div class='mt-3 sm:mt-0 sm:ml-3'>
                  <a
                    href='#'
                    class='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
                  >
                    Ser voluntário
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          class='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src='/home.jpg'
          alt=''
        />
      </div>
    </div>
  )
}

export default Header
