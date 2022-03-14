import BotaoDeNavegacao from "./BotaoDeNavegacao";

export default function BotoesDeNavegacao() {
    const botoes = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    return (
        <div className="botoes-de-navegacao">
            {
                botoes.map(icone => <BotaoDeNavegacao name={icone} />)
            }
        </div>
    );
}