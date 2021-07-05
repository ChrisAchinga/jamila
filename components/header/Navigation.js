import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
      <Link href='/'>
        <a className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
          <Image
            src='/images/logo.png'
            className='bi me-2'
            width={40}
            height={32}
          />
          <span className='fs-4 text-uppercase'>airspace</span>
        </a>
      </Link>

      <ul className='nav nav-pills'>
        <li className='nav-item'>
          <Link href='/read'>
            <a className='nav-link active' aria-current='page'>
              Read
            </a>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/aircraft'>
            <a className='nav-link'>Aircrafts</a>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/airlines'>
            <a className='nav-link'>Airlines</a>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/dream'>
            <a className='nav-link'>Dream</a>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/about'>
            <a className='nav-link'>About</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
