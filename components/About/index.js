import React from 'react'
import Head from 'next/head'
import { RichText, Elements } from 'prismic-reactjs'
import Layout from '../Layout'

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

const About = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>{data.pagetitle}</title>
      </Head>
      <div className='w-1/2 mx-auto'>
        <h2 className='mt-16 mb-6 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl'>
          <RichText render={data.headline} />
        </h2>
        <RichText render={data.content} htmlSerializer={htmlRender} />
      </div>
    </Layout>
  )
}
export default About
