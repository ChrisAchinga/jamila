import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({image, name, }) => {
  return (
    <div className='col-lg-4 mb-5'>
      <div className='card h-100 shadow border-0'>
        <Image
          className='card-img-top'
          src='/images/a380.jpg'
          width={600}
          height={350}
          alt='image here'
        />
        <div className='card-body p-4'>
          <Link href='/read/category/category-name'>
            <div className='badge bg-primary bg-gradient rounded-pill mb-2 text-uppercase'>
              category
            </div>
          </Link>
          <Link href='/read/a-great-article'>
            <a className='text-decoration-none link-dark stretched-link'>
              <div className='h5 card-title mb-3'>Article title</div>
            </a>
          </Link>
          <p className='card-text mb-0'>
            Some more quick description text on the article.
          </p>
        </div>
        <div className='card-footer p-4 pt-0 bg-transparent border-top-0'>
          <div className='d-flex align-items-end justify-content-between'>
            <div className='d-flex align-items-center'>
              <div className='small'>
                <div className='text-muted'>
                  April 2, 2021 &middot; 10 min read
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
