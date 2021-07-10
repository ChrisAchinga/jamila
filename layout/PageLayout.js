import Head from 'next/head'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'


const PageLayout = ({
  children,
  title,
  keywords,
  description,
  pageURL,
  image,
}) => {
  return (
    <div>
      <Head>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta property='og:url' content={pageURL} />
        <meta property='og:type' content='website' />
        <title>{title}</title>
      </Head>
      <Navigation />
      <main classname='container'>{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout

PageLayout.defaultProps = {
  title: 'AirSpace | Aviation Blog',
  keywords: 'Aviation, Airbus, Boeing, Airlines, Airports, Air Travel',
  description:
    'Aviation Blog Website, with articles on Airlines and Aircraft types, and commercial air travel',
  image: '/images/base.jpg',
}
