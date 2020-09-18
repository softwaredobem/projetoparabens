import React from 'react'
import Layout from '../components/Layout'
import { RichText, Elements } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'

const htmlRender = (type, element, content, children, key) => {
  if (type === Elements.paragraph) {
    return React.createElement(
      'p',
      {
        key,
        className: 'my-6', // 'text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl',
      },
      children,
    )
  }
  if (type === Elements.image) {
    return (
      <div>
        <img
          className='shadow-lg rounded'
          src={element.url}
          alt={element.alt}
        />
      </div>
    )
  }
  if (type === Elements.em) {
    return React.createElement(
      'span',
      { key, className: 'text-indigo-600' },
      children,
    )
  }
  return null
}

const Donate = ({ data }) => {
  return (
    <Layout>
      <div className='w-1/2 mx-auto'>
        <h2 className='mt-16 mb-6 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl'>
          <RichText render={data.headline} />
        </h2>
        <RichText render={data.contentPreBtn} htmlSerializer={htmlRender} />
        <div className='border rounded p-6 text-center'>
          <form
            action='https://www.paypal.com/cgi-bin/webscr'
            method='post'
            target='_top'
          >
            <input type='hidden' name='cmd' value='_s-xclick' />
            <input
              type='hidden'
              name='hosted_button_id'
              value='UEVEGDSQWUDS2'
            />
            <input
              type='image'
              src='https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif'
              border='0'
              name='submit'
              title='PayPal - The safer, easier way to pay online!'
              alt='Faça doações com o botão do PayPal'
            />
            <img
              alt=''
              border='0'
              src='https://www.paypal.com/pt_BR/i/scr/pixel.gif'
              width='1'
              height='1'
            />
          </form>
        </div>
        <RichText render={data.content} htmlSerializer={htmlRender} />
      </div>
    </Layout>
  )
}
export async function getStaticProps() {
  const client = Prismic.client('https://parabens.cdn.prismic.io/api/v2')
  const page = await client.getSingle('doacao')
  return {
    props: {
      data: page.data,
    },
    revalidate: 10,
  }
}
export default Donate
