import ArticleHead from './ArticleHead'
import PreviewImage from './PreviewImage'
import ArticleBody from './ArticleBody'

const Article = ({ title, date, image, content, category }) => {
  return (
    <div className='col-lg-9'>
      <ArticleHead title={title} date={date} category={category} />
      <PreviewImage image={image} />
      <ArticleBody content={content} />
    </div>
  )
}
export default Article

Article.defaultProps = {
    content: "article content goes here"
}