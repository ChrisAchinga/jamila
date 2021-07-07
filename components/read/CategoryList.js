import Link from 'next/link'

const CategoryList = ({ categories }) => {
  return (
    <div>
      {/* <h3 className='text-2xl bg-gray-800 text-white p-3 rounded'>
        Blog Categories
      </h3> */}
      <ul className='list-group'>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`} passHref>
            <li className='list-group-item'>{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default CategoryList
