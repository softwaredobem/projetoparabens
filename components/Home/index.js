import React from 'react'
import Hero from './Hero'
import Head from 'next/head'
import Footer from '../Footer'
import Layout from '../Layout'

const Home = ({ data }) => {
  return (
    <Layout showMenu={false}>
      <Head>
        <title>Projeto Parabéns</title>
      </Head>
      <Hero data={data} />
    </Layout>
  )
}
export default Home
