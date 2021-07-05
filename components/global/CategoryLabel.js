const CategoryLabel = () => {
  const colorKey = {
    Airline: 'primary',
    Aircraft: 'success',
    Airbus: 'warning',
    Boeing: 'secondary',
    General: 'danger',
  }

  return (
    <div className={`badge bg-${colorKey[children]}`}>
      <Link href={`/read/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}

export default CategoryLabel
