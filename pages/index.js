import Layout from '../layouts/Layout'
import Hero from '../components/landing/Hero'
import LatestArticle from '../components/landing/LatestArticle'
import RecentArticles from '../components/landing/RecentArticles'
import { getPosts } from '../lib/posts'

const Home = ({ posts }) => {
  return (
    <Layout>
      <Hero />
      <LatestArticle />
      <RecentArticles />
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  }
}
