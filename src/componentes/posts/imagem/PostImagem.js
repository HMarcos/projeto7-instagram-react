export default function PostImagem(props) {
    return (
        <div className="post-imagem">
            <img src={props.imagem} alt="post" />
        </div>
    );
}