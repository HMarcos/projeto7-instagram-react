import BarraSuperior from "./componentes/barra-superior/BarraSuperior";
import Stories from "./componentes/stories/Stories";
export default function App(){
    return(
        <div>
            <BarraSuperior />
            <div className="container">
                <main className="stories-e-posts">
                    <Stories />
                </main>

            </div>
        </div>
    );
}