import Layout from '../layouts/Layout'
import Hero from '../components/landing/Hero'
import LatestArticle from '../components/landing/LatestArticle'
import PostCard from '../components/global/PostCard'
import { getPosts } from '../lib/posts'

const Home = ({ posts }) => {
  return (
    <Layout>
      <Hero />
      <LatestArticle />
      <section className='py-5'>
        <h2 className='fw-bolder fs-5 mb-4 text-capitalize'>recent articles</h2>
        <div className='row gx-5'>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </section>
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
