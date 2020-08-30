import React from 'react'
import Footer from '../components/Footer'
import Prismic from 'prismic-javascript'
import Hero from '../components/Home/Hero'
import Head from 'next/head'

const Index = ({ data }) => {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Projeto Parabéns</title>
      </Head>
      <Hero data={data} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const client = Prismic.client('https://parabens.cdn.prismic.io/api/v2')
  const page = await client.getSingle('home')
  return {
    props: {
      data: page.data,
    },
    revalidate: 10,
  }
}

export default Index
