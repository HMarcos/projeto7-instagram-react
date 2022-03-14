import PostAutor from "./PostAutor";
import BotaoMaisInformacoes from "./BotaoMaisInformacoes";

export default function PostParteSuperior(props) {
    const { logo, usuario } = props;

    return (
        <div className="post-superior">
            <PostAutor logo={logo} usuario={usuario} />
            <BotaoMaisInformacoes />
        </div>
    );
}