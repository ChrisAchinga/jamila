import Layout from '../../../layouts/Layout'
import PostCard from '../../../components/global/PostCard'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import CategoryList from '../../../components/read/CategoryList'
import matter from 'gray-matter'
import { getPosts } from '../../../lib/posts'

const CategoryPage = ({ posts, categoryName, categories }) => {
  return (
    <Layout>
      <section className='py-5'>
        <h2 className='fw-bolder fs-5 mb-4 text-capitalize'> Posts in {categoryName}</h2>
        <div className='row gx-5'>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default CategoryPage

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return frontmatter.category.toLowerCase()
  })

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  )

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  }
}
