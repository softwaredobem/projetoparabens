import React from 'react'
import Prismic from 'prismic-javascript'
import Supporters from '../../components/Supporters'

const Index = ({ data }) => {
  return <Supporters data={data} />
}

export async function getStaticProps() {
  const client = Prismic.client('https://parabens.cdn.prismic.io/api/v2')
  const page = await client.getSingle('apoiadores', { lang: 'en-us' })
  return {
    props: {
      data: page.data,
    },
    revalidate: 10,
  }
}

export default Index
