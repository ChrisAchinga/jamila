import Layout from '../../layouts/Layout'
import Author from '../../components/read/Author'
import Article from '../../components/read/Article'

const Read = () => {
  return (
    <Layout>
      <section className='py-5'>
        <div className='container px-5 my-5'>
          <div className='row gx-5'>
            {/* author image section */}
            <Author />
            {/* article body */}
            <Article />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Read
