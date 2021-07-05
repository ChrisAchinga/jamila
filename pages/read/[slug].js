import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../../layouts/Layout'
import Author from '../../components/read/Author'
import Article from '../../components/read/Article'
import CategoryLabel from '../../components/global/CategoryLabel'

const Read = ({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) => {
  return (
    <Layout title={title}>
      <section className='py-5'>
        <div className='container px-5 my-5'>
          <div className='row gx-5'>
            {/* author image section */}
            <Author />
            {/* article body */}
            <Article image={cover_image} title={title} date={date} content={content} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Read

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}