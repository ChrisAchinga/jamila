const LatestArticle = () => {
  return (
    <section className='py-5'>
      <div className='container px-5'>
        <h1 className='fw-bolder fs-5 mb-4 text-capitalize'>latest article</h1>
        <div className='card border-0 shadow rounded-3 overflow-hidden'>
          <div className='card-body p-0'>
            <div className='row gx-0'>
              <div className='col-lg-6 col-xl-5 py-lg-5'>
                <div className='p-4 p-md-5'>
                  <div className='badge bg-primary bg-gradient rounded-pill mb-2 text-uppercase'>
                    category
                  </div>
                  <div className='h2 fw-bolder test-capitalize'>title is here</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique delectus ab doloremque, qui doloribus ea
                    officiis...
                  </p>
                  <a className='stretched-link text-decoration-none' href='#!'>
                    Read more
                    <i className='bi bi-arrow-right'></i>
                  </a>
                </div>
              </div>
              <div className='col-lg-6 col-xl-7'>
                <div className='bg-featured-blog'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestArticle
