import CategoryLabel from '../../components/global/CategoryLabel'

const ArticleHead = ({title, date, category}) => {
  return (
    <header className='mb-4'>
      {/* <!-- Post title--> */}
      <h1 className='fw-bolder mb-1'>{title}</h1>
      {/* <!-- Post meta content--> */}
      <div className='text-muted fst-italic mb-2'>{date}</div>
      {/* <!-- Post categories--> */}
      <CategoryLabel>
        {category}
      </CategoryLabel>
      {/* <a
        className='badge bg-secondary text-decoration-none link-light'
        href='#!'
      >
      </a> */}
    </header>
  )
}

export default ArticleHead
