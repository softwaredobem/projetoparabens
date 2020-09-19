import Head from 'next/head'

const Title = ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  )
}
export default Title
