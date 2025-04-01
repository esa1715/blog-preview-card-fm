const Author = ({ img, name }) => {
    return (
    <div className="author">
        <img src={img} alt="Foto de perfil do autor" />
        <span className="name">{name}</span>
    </div>
    )
};

export default Author;