import Layout from '../layouts/Layout'
import Hero from '../components/landing/Hero'
import LatestArticle from '../components/landing/LatestArticle'
import RecentArticles from '../components/landing/RecentArticles'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <LatestArticle />
      <RecentArticles />
    </Layout>
  )
}

export default Home
