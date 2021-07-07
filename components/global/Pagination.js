import Link from 'next/link'

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = `/read/page/${currentPage - 1}`
  const nextPage = `/read/page/${currentPage + 1}`

  if (numPages === 1) return <></>

  return (
    <div className='mt-6'>
      <nav aria-label='Page navigation example'>
        <ul className='pagination'>
          {/* previous page */}
          {!isFirst && (
            <Link href={prevPage}>
              <li className='page-item'>
                <a className='page-link'>Previous</a>
              </li>
            </Link>
          )}

          {/* page numbers */}
          {Array.from({ length: numPages }, (_, i) => (
            <Link href={`/read/page/${i + 1}`}>
              <li className='page-item'>
                <a className='page-link'>{i + 1}</a>
              </li>
            </Link>
          ))}

          {/* next page */}
          {!isLast && (
            <Link href={nextPage}>
              <li className='page-item'>
                <a className='page-link'>Next</a>
              </li>
            </Link>
          )}
          
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
