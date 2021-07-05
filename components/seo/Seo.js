import Head from 'next/head'

const Seo = ({ title, description, pageURL }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={pageURL} />
      <meta property='og:type' content='website' />
    </Head>
  )
}

export default Seo
