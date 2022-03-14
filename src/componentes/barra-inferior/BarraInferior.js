import BotaoDeNavegacao from "./BotaoDeNavegacao";

export default function BarraInferior(){
    const botoes = ["home", "search-outline", "add-circle-outline" , "heart-outline", "person-outline"];

    return (
        <div className="barra-inferior">
            {
                botoes.map(botao => <BotaoDeNavegacao name={botao} />)
            }
        </div>
    );
}