import marked from 'marked'

const ArticleBody = ({ content }) => {
  return (
    <section className='mb-5'>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      {/* <p className='fs-5 mb-4'>{content}</p> */}
    </section>
  )
}

export default ArticleBody
