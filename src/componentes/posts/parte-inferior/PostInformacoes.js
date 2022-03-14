export default function PostInformacoes(props){
    const {imagem, usuario, numeroCurtidas} = props;
    return (
        <div className="post-informacoes">
            <a href="#"><img src={imagem} /></a>
            <p> Curtido por <a href="#"><span>{usuario}</span></a> e <a href="#"><span>outras {numeroCurtidas} pessoas</span></a></p>
        </div>
    );
}