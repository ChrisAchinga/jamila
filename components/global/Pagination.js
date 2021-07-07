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
            <Link href={prevPage} passHref>
              <li className='page-item'>
                <span className='page-link'>Previous</span>
              </li>
            </Link>
          )}

          {/* page numbers */}
          {Array.from({ length: numPages }, (_, i) => (
            <Link href={`/read/page/${i + 1}`} passHref>
              <li className='page-item'>
                <span className='page-link'>{i + 1}</span>
              </li>
            </Link>
          ))}

          {/* next page */}
          {!isLast && (
            <Link href={nextPage} passHref>
              <li className='page-item'>
                <span className='page-link'>Next</span>
              </li>
            </Link>
          )}
          
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
