import PostParteSuperior from "./parte-superior/PostParteSuperior";
import PostImagem from "./imagem/PostImagem";
import PostParteInferior from "./parte-inferior/PostParteInferior";

export default function Post(props){
    const {imagemAutor, autor, imagemPost, imagemCurtida, usuarioCurtida, numeroCurtidas} = props;

    return(
        <article className="post">
            <PostParteSuperior logo={imagemAutor} usuario={autor} />
            <PostImagem imagem={imagemPost} />
            <PostParteInferior imagem={imagemCurtida} usuario={usuarioCurtida} numeroCurtidas={numeroCurtidas} />
        </article>
    );
}