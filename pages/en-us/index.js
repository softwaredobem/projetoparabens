import React from 'react'
import Footer from '../../components/Footer'
import Prismic from 'prismic-javascript'
import Hero from '../../components/Home/Hero'

const Index = ({ data }) => {
  return (
    <div className='container mx-auto'>
      <Hero data={data} />
      <Footer />
    </div>
  )
}

export async function getServerSideProps({ res }) {
  res.setHeader('Cache-control', 's-maxage=2, stale-while-revalidate')
  const client = Prismic.client('https://parabens.cdn.prismic.io/api/v2')
  const page = await client.getSingle('home', { lang: 'en-us' })
  return {
    props: {
      data: page.data,
    },
  }
}

export default Index
