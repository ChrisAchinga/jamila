const ArticleHead = () => {
  return (
    <header className='mb-4'>
      {/* <!-- Post title--> */}
      <h1 className='fw-bolder mb-1'>Welcome to Blog Post!</h1>
      {/* <!-- Post meta content--> */}
      <div className='text-muted fst-italic mb-2'>January 1, 2021</div>
      {/* <!-- Post categories--> */}
      <a
        className='badge bg-secondary text-decoration-none link-light'
        href='#!'
      >
        Web Design
      </a>
    </header>
  )
}

export default ArticleHead
