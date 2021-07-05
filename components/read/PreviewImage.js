import Image from 'next/image'

const PreviewImage = () => {
  return (
    <figure className='mb-4'>
      <Image
        className='img-fluid rounded'
        src='/images/a380.jpg'
        width={900}
        height={400}
        alt='...'
      />
    </figure>
  )
}

export default PreviewImage
