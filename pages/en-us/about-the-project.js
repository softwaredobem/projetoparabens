import React from 'react'
import Prismic from 'prismic-javascript'
import About from '../../components/About'

const AboutTheProject = ({ data }) => {
  return <About data={data} />
}
export async function getStaticProps() {
  const client = Prismic.client('https://parabens.cdn.prismic.io/api/v2')
  const page = await client.getSingle('sobre', { lang: 'en-us' })
  return {
    props: {
      data: page.data,
    },
    revalidate: 10,
  }
}
export default AboutTheProject
