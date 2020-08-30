import React from 'react'
import Footer from '../components/Footer'
import Prismic from 'prismic-javascript'
import Hero from '../components/Home/Hero'

const Index = ({ data }) => {
  return (
    <div className='container mx-auto'>
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
