import Seo from '../components/seo/Seo'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Layout = ({ children, title, description, pageURL }) => {
  return (
    <div>
      <Seo title={title} dscription={description} pageURL={pageURL} />
      <Header />
      <main className='container'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: "airSpace",
  description: "The Aviation Blog",
  pageURL: "airspace.com"
}