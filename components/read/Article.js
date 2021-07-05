import ArticleHead from './ArticleHead'
import PreviewImage from './PreviewImage'
import ArticleBody from './ArticleBody'

const Article = ({ content }) => {
  return (
    <div className='col-lg-9'>
      <ArticleHead />
      <PreviewImage />
      <ArticleBody content={content} />
    </div>
  )
}
export default Article

Article.defaultProps = {
    content: "article content goes here"
}