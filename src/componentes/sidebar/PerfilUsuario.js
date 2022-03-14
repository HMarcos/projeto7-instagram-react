export default function PerfilUsuario(props) {
    const { imagem, nome, usuario } = props;

    return (
        <div className="perfil">
            <a href="#"><img src={imagem} alt={usuario} /></a>

            <div className="perfil-identificao">
                <a href="#"><p><strong>{usuario}</strong></p></a>
                <a href="#"><p><small>{nome}</small></p></a>
            </div>
        </div>
    );
}