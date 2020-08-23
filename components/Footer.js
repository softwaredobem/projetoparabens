import React from 'react'

const Footer = () => {
  return (
    <footer class='text-gray-700 body-font'>
      <div class='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <a class='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
          <span class='ml-3 text-xl'>Associação Projeto Parabéns</span>
        </a>
        <p class='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2020 Entidade sem fins lucrativos (CNPJ: 00.0000.0000)
        </p>
        <span class='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <a
            class='text-gray-500'
            href='https://www.facebook.com/projetoparabenss/'
          >
            <svg
              fill='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              class='w-12 h-12'
              viewBox='0 0 24 24'
            >
              <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
            </svg>
          </a>
          <a
            class='ml-3 text-gray-500'
            href='https://www.instagram.com/projetoparabens'
          >
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              class='w-12 h-12'
              viewBox='0 0 24 24'
            >
              <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}
export default Footer
