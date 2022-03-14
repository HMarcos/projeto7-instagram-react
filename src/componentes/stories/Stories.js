import Story from "./Story";

export default function Stories() {

    const stories = [
        {
            imagem: "imagens/stories/9gag.png",
            usuario: "9gag"
        },
        {
            imagem: "imagens/stories/meowed.png",
            usuario: "meowed"
        },
        {
            imagem: "imagens/stories/barked.png",
            usuario: "barked"
        },
        {
            imagem: "imagens/stories/nathanwpyle.png",
            usuario: "nathanwpyle..."
        },
        {
            imagem: "imagens/stories/wawawiwac.png",
            usuario: "wawawiwac..."
        },
        {
            imagem: "imagens/stories/respondeai.png",
            usuario: "respondeai"
        },
        {
            imagem: "imagens/stories/filomoderna.png",
            usuario: "filomoderna"
        },
        {
            imagem: "imagens/stories/memeriago.png",
            usuario: "memeriago"
        }
    ]

    return (
        <section className="stories">
            {
                stories.map(
                    (story) => {
                        return <Story imagem={story.imagem} usuario={story.usuario} />
                    }
                )
            }

            <ion-icon name="chevron-forward-circle"></ion-icon>
        </section>
    );
}