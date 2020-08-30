import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Prismic from 'prismic-javascript'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

const SobreProjeto = ({ data }) => {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>{data.pagetitle}</title>
      </Head>
      <Menu />
      <h2 className='text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl'>
        <RichText render={data.headline} />
      </h2>
      <RichText render={data.content} />
    </div>
  )
}
export async function getStaticProps() {
  const client = Prismic.client('https://parabens.cdn.prismic.io/api/v2')
  const page = await client.getSingle('sobre')
  return {
    props: {
      data: page.data,
    },
    revalidate: 10,
  }
}
export default SobreProjeto
