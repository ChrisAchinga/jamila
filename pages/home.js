import PageLayout from '@/layouts/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

const home = () => {
  return (
    <PageLayout>
      <div className='px-4 pt-5 my-5 text-center border-bottom'>
        <h1 className='display-4 fw-bold'>airSpace NXT</h1>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4'>
            An Aviation Blog Zone
          </p>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center mb-5'>
            <button type='button' className='btn btn-primary btn-lg px-4 me-sm-3'>
              Posts
            </button>
            <button type='button' className='btn btn-outline-secondary btn-lg px-4'>
              Aircrafts
            </button>
          </div>
        </div>
        <div className='overflow-hidden' style={{maxHeight: "30vh";}}>
          <div className='container px-5'>
            <img
              src='/images/base.jpg'
              className='img-fluid border rounded-3 shadow-lg mb-4'
              alt='Example image'
              width='700'
              height='500'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default home
