import BarraSuperior from "./componentes/barra-superior/BarraSuperior";
import Stories from "./componentes/stories/Stories";
import Posts from "./componentes/posts/Posts";
import Sidebar from "./componentes/sidebar/Sidebar";
import BarraInferior from "./componentes/barra-inferior/BarraInferior";

export default function App(){
    return(
        <div>
            <BarraSuperior />
            <div className="container">
                <main className="stories-e-posts">
                    <Stories />
                    <Posts />
                </main>
                <Sidebar />
            </div>
            <BarraInferior />
        </div>
    );
}