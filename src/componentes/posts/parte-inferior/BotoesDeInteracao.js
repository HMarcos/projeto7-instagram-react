import BotaoDeIteracao from "./BotaoDeIteracao";

export default function BotoesDeInteracao() {
    const botoesReacao = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    const botaoSalvar = "bookmark-outline";

    return (
        <div className="post-icones">
            <div className="post-icones-interacoes">
                {
                    botoesReacao.map(botao => <BotaoDeIteracao name={botao} />)
                }
            </div>

            <div className="post-icone-salvar">
                <BotaoDeIteracao name={botaoSalvar} />
            </div>
        </div>
    );
}