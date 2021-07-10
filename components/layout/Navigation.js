import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='container'>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <Link href='/'>
        <a
          className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
        >
          <span className='fs-4'>Simple header</span>
        </a>
        </Link>

        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link href='/blog'>
            <a className='nav-link active' aria-current='page'>
              Read
            </a>
            </Link>
          </li>
          
          <li className='nav-item'>
          <Link href='/about'>
            <a className='nav-link'>
              About
            </a>
          </Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Navigation
