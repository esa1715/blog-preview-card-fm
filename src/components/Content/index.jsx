const Content = ({ cat, date, tit, desc }) => {
    return (
        <div className="content">
            <span className="category">{cat}</span>
            <span className="date">{date}</span>
            <h1 className="title">{tit}</h1>
            <p className="description">{desc}</p>
        </div>
    )
};

export default Content;