import Layout from '../../../layouts/Layout'
import PostCard from '../../../components/global/PostCard'

const CategoryPage = () => {
  return (
    <Layout>
      <section className='py-5'>
        <h2 className='fw-bolder fs-5 mb-4 text-capitalize'>category name</h2>
        <div className='row gx-5'>
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
    </Layout>
  )
}

export default CategoryPage
