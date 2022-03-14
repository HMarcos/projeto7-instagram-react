import PerfilUsuario from "./PerfilUsuario";
import Sugestoes from "./Sugestoes";
import InformacoesExtras from "./InformacoesExtras";

export default function Sidebar() {
    const perfil =
    {
        imagem: "imagens/sidebar/perfil.png",
        nome: "Catana",
        usuario: "catanacomics"
    }

    return (
        <aside className="sidebar">
            <PerfilUsuario imagem={perfil.imagem} nome={perfil.nome} usuario={perfil.usuario} />
            <Sugestoes />
            <InformacoesExtras />
        </aside>
    );
}