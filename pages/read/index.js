import Layout from '../../layouts/Layout'
import PostCard from '../../components/global/PostCard'

const index = () => {
  return (
    <Layout>
      <section className='py-5'>
        <h2 className='fw-bolder fs-5 mb-4 text-capitalize'>all articles</h2>
        <div className='row gx-5'>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className='text-end mb-5 mb-xl-0'>
          <a className='text-decoration-none' href='#!'>
            More stories
            <i className='bi bi-arrow-right'></i>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default index
