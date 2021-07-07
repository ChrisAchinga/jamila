import Image from 'next/image'
import Link from 'next/link'
import CategoryLabel from './CategoryLabel'

const PostCard = ({ post, compact }) => {
  return (
    <div className='col-lg-4 mb-5'>
      <div className='card h-100 shadow border-0'>
        <Image
          className='card-img-top'
          src={post.frontmatter.cover_image}
          width={600}
          height={350}
          alt='image here'
        />
        <div className='card-body p-4'>
          <Link href='/read/category/category-name' passHref>
            <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
          </Link>
          <Link href={`/read/${post.slug}`}>
            <a className='text-decoration-none link-dark stretched-link'>
              <div className='h5 card-title mb-3'>{post.frontmatter.title}</div>
            </a>
          </Link>
          <p className='card-text mb-0'>{post.frontmatter.excerpt}</p>
        </div>
        <div className='card-footer p-4 pt-0 bg-transparent border-top-0'>
          <div className='d-flex align-items-end justify-content-between'>
            <div className='d-flex align-items-center'>
              <div className='small'>
                <div className='text-muted'>
                  {post.frontmatter.date} &middot; 10 min read
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 
      {!compact && (
        <div className='flex justify-between items-center mt-6'>
          <Link href={`/blog/${post.slug}`}>
            <a className='text-gray-900 hover:text-blue-600'>Read More</a>
          </Link>
          <div className='flex items-center'>
            <img
              src={post.frontmatter.author_image}
              alt=''
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            />
            <h3 className='text-gray-700 font-bold'>
              {post.frontmatter.author}
            </h3>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default PostCard
