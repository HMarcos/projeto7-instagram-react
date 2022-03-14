export default function Sugestao(props) {
    const { imagem, usuario, status } = props;

    return (
        <div class="sugestao">
            <div class="sugestao-perfil">
                <a href="#"><img src={imagem} alt={usuario} /></a>

                <div class="sugestao-perfil-identificao">
                    <a href="#"><p><strong class="sugestoes-strong">{usuario}</strong></p></a>
                    <a href="#"><p><small class="sugestoes-small">{status}</small></p></a>
                </div>
            </div>

            <a href="#"><p>Seguir</p></a>

        </div>
    );
}