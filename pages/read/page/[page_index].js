import fs from 'fs'
import path from 'path'
import Layout from '../../../layouts/Layout'
import PostCard from '../../../components/global/PostCard'
import Pagination from '../../../components/global/Pagination'
import { POSTS_PER_PAGE } from '../../../config/index'
import { getPosts } from '../../../lib/posts'

const index = ({ posts, numPages, currentPage, categories }) => {
  return (
    <Layout>
      <section className='py-5'>
        <h2 className='fw-bolder fs-5 mb-4 text-capitalize'>all articles</h2>
        <div className='row gx-5'>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}

          <Pagination currentPage={currentPage} numPages={numPages} />
        </div>
        {/* <div className='text-end mb-5 mb-xl-0'>
          <a className='text-decoration-none' href='#!'>
            More stories
            <i className='bi bi-arrow-right'></i>
          </a>
        </div> */}
      </section>
    </Layout>
  )
}

export default index

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)

  let paths = []

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    })
  }

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1)

  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  )

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  }
}
