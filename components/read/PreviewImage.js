import Image from 'next/image'

const PreviewImage = ({image}) => {
  return (
    <figure className='mb-4'>
      <Image
        className='img-fluid rounded'
        src={image}
        width={900}
        height={400}
        alt='...'
      />
    </figure>
  )
}

export default PreviewImage
