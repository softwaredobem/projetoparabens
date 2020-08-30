import React from 'react'
import { useI18n } from '../utils/I18nContext'
import lang from './Menu.lang.json'

const Menu = () => {
  const { t } = useI18n(lang)
  return (
    <React.Fragment>
      <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
        <nav className='relative flex items-center justify-between sm:h-10 lg:justify-start'>
          <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <a href='#' aria-label='Home'>
                <img
                  className='h-8 w-auto sm:h-10'
                  src='./projetoparabens-v4.png'
                  alt='Projeto Parabéns'
                />
              </a>
              <div className='-mr-2 flex items-center md:hidden'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                  id='main-menu'
                  aria-label='Main menu'
                  aria-haspopup='true'
                >
                  <svg
                    className='h-6 w-6'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='hidden md:block md:ml-10 md:pr-4'>
            <a
              href='#'
              className='font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out'
            >
              {t('about')}
            </a>
            <a
              href='#'
              className='ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out'
            >
              {t('supporters')}
            </a>
            <a
              href='#'
              className='ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out'
            >
              {t('beAVolunteer')}
            </a>
            <a
              href='#'
              className='ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out'
            >
              {t('donate')}
            </a>
          </div>
        </nav>
      </div>

      <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
        <div className='rounded-lg shadow-md'>
          <div
            className='rounded-lg bg-white shadow-xs overflow-hidden'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='main-menu'
          >
            <div className='px-5 pt-4 flex items-center justify-between'>
              <div>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                  alt=''
                />
              </div>
              <div className='-mr-2'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                  aria-label='Close menu'
                >
                  <svg
                    className='h-6 w-6'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='px-2 pt-2 pb-3'>
              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                role='menuitem'
              >
                Product
              </a>
              <a
                href='#'
                className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                role='menuitem'
              >
                Features
              </a>
              <a
                href='#'
                className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                role='menuitem'
              >
                Marketplace
              </a>
              <a
                href='#'
                className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                role='menuitem'
              >
                Company
              </a>
            </div>
            <div>
              <a
                href='#'
                className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out'
                role='menuitem'
              >
                Doar
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Menu
