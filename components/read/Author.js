import Image from 'next/image'

const Author = () => {
  return (
    <div className='col-lg-3'>
      <div className='d-flex align-items-center mt-lg-5 mb-4'>
        <Image
          className='img-fluid rounded-circle'
          src='https://dummyimage.com/50x50/ced4da/6c757d.jpg'
          alt='author image, Chris Achinga'
          width={50}
          height={50}
        />
        <div className='ms-3'>
          <div className='fw-bold'>Chris Achinga</div>
          <div className='text-muted'>News, Business</div>
        </div>
      </div>
    </div>
  )
}

export default Author
