import LogoInstagram from "./LogoInstagram";
import BarraDePesquisa from "./BarraDePesquisa";
import BotoesDeNavegacao from "./BotoesDeNavegacao";

export default function BarraSuperior() {
    return (
        <header className="barra-superior">
            <nav className="barra-superior__nav">
                <LogoInstagram />
                <BarraDePesquisa />
                <BotoesDeNavegacao />
            </nav>
        </header>
    );
}