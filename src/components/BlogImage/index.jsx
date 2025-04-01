const BlogImage = ({ img, imgmob }) => {
    return (
    <div className="preview">    
        <img src={img} alt="Preview do blog" className="imgdesk"/>
        <img src={imgmob} alt="Preview do blog" className="imgmob"/>
    </div>
    )
};

export default BlogImage;