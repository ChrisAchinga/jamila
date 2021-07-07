import Link from 'next/link'

const CategoryLabel = ({ children }) => {
  return (
    <div className='badge bg-success text-light rounded-pill mb-2 text-uppercase'>
      <Link href={`/read/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}

export default CategoryLabel
