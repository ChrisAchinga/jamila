import Link from 'next/link'

const CategoryLabel = ({ children }) => {
  const colorKey = {
    Airline: 'primary',
    Aircraft: 'success',
    Airbus: 'warning',
    Boeing: 'secondary',
    General: 'danger',
  }

  return (
    <div
      className={`badge bg-${colorKey[children]} bg-gradient rounded-pill mb-2 text-uppercase`}
    >
      <Link href={`/read/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}

export default CategoryLabel
