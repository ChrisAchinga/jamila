import Head from 'next/head'
import Header from '@/components/Header'
import Search from '@/components/Search'

const Layout = ({ title, keywords, description, children, pageURL }) => {
  return (
    <div>
      <Head>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={pageURL} />
        <meta property='og:type' content='website' />
        <title>{title}</title>
      </Head>
      <Header />
      <Search />
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'AirSpace | Aviation Blog',
  keywords: 'Aviation, Airbus, Boeing, Airlines, Airports, Air Travel',
  description: 'Aviation Blog Website, with articles on Airlines and Aircraft types, and commercial air travel',
}
