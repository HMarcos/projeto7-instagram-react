import ImagemStory from "./ImagemStory";
import UsuarioStory from "./UsuarioStory";

export default function Story(props){
    const {imagem, usuario} = props;
    
    return(
        <div className="story">
            <ImagemStory imagemSrc={imagem} imagemAlt={usuario}/>
            <UsuarioStory usuario={usuario}/>
        </div>
    )
    
}