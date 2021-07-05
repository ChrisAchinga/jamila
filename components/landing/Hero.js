import Image from 'next/image'

const Hero = () => {
  return (
    <div className='container col-xxl-8 px-4 py-5'>
      <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className='col-10 col-sm-8 col-lg-6'>
          <Image
            src='/images/header.jpg'
            className='d-block mx-lg-auto img-fluid'
            alt='airSpace header image'
            width={700}
            height={500}
            loading='lazy'
          />
        </div>
        <div className='col-lg-6'>
          <h1 className='display-5 fw-bold lh-1 mb-3'>
            airSpace | Dream, Fly, Read
          </h1>
          <p className='lead'>
            airSpace is the next commercial aviation blog hub. Read about what's
            happening on the air right from your phone without hesitation.
          </p>
          <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
            <button
              type='button'
              className='btn btn-primary btn-lg px-4 me-md-2'
            >
              articles
            </button>
            <button
              type='button'
              className='btn btn-outline-secondary btn-lg px-4'
            >
              airspace
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
