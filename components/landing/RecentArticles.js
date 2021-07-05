import PostCard from '../global/PostCard'

const RecentArticles = () => {
    return (
        <section className='py-5'>
            <h2 className="fw-bolder fs-5 mb-4 text-capitalize">recent articles</h2>
            <div className='row gx-5'>
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </section>
    )
}

export default RecentArticles
