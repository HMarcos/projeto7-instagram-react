import TituloSugestoes from "./TituloSugestoes";
import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const sugestoes = [
        {
            imagem: "imagens/sidebar/bad_vibes_memes.png",
            usuario: "bad.vibes.memes",
            status: "Segue você"
        },
        {
            imagem: "imagens/sidebar/chibirdart.png",
            usuario: "chibirdart",
            status: "Segue você"
        },
        {
            imagem: "imagens/sidebar/razoesparaacreditar.png",
            usuario: "razoesparaacreditar",
            status: "Novo no Instagram"
        },
        {
            imagem: "imagens/sidebar/adorable_animals.png",
            usuario: "adorable_animals",
            status: "Segue você"
        },
        {
            imagem: "imagens/sidebar/smallcutecats.png",
            usuario: "smallcutecats",
            status: "Segue você"
        }
    ]

    return (
        <div className="sugestoes">
            <TituloSugestoes />

            {
                sugestoes.map(sugestao => 
                <Sugestao imagem={sugestao.imagem} usuario={sugestao.usuario} status={sugestao.status} />)
            }
        </div>
    )
}