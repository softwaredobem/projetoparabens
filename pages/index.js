import React from 'react'
import Prismic from 'prismic-javascript'
import Home from '../components/Home'

const Index = ({ data }) => {
  return <Home data={data} />
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
