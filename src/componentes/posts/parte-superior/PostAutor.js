export default function PostAutor(props) {
    const { logo, usuario } = props;

    return (
        <div className="post-logo">
            <a href="#"><img src={logo} /> </a>
            <a href="#"><p>{usuario}</p></a>
        </div>
    );
}