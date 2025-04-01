import Author from '../Author'
import BlogImage from '../BlogImage'
import Content from '../Content'
import './BlogCard.scss'

const BlogCard = () => {
    const preview = {
        img: "/assets/BlogPreview/blogimage.png",
        imgmob: "/assets/BlogPreview/blogimagemob.png"
    }

    const content = {
        cat: "Learning",
        date: "Published 21 Dec 2023",
        tit: "HTML & CSS foundations",
        desc: "These languages are the backbone of every website, defining structure, content, and presentation."
    }

    const author = {
        img: "/assets/Author/userpic.png",
        name: "Greg Hooper"
    }

    return (
        <section className='card'>
            <BlogImage 
            img={preview.img}
            imgmob={preview.imgmob}
            />
            <Content 
            cat={content.cat}
            date={content.date}
            tit={content.tit}
            desc={content.desc}
            />
            <Author 
            img={author.img}
            name={author.name}
            />
        </section>
    )
}

export default BlogCard