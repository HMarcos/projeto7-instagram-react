import BotoesDeInteracao from "./BotoesDeInteracao";
import PostInformacoes from "./PostInformacoes";

export default function PostParteInferior(props){
    const {imagem, usuario, numeroCurtidas} = props;

    return (
        <div className="post-inferior">
            <BotoesDeInteracao />
            <PostInformacoes imagem={imagem} usuario={usuario} numeroCurtidas={numeroCurtidas}/>
        </div>
    );
}