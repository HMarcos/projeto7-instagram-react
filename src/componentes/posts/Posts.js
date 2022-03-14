import Post from "./Post";

export default function Posts() {
    const posts = [
        {
            imagemAutor: "imagens/posts/01/meowed.png",
            autor: "meowed",
            imagemPost: "imagens/posts/01/imagem_do_post.png",
            imagemCurtida: "imagens/posts/01/respondeai.png",
            usuarioCurtida: "respondeai",
            numeroCurtidas: "101.523"
        },
        {
            imagemAutor: "imagens/posts/02/barked.png",
            autor: "barked",
            imagemPost: "imagens/posts/02/imagem_do_post.png",
            imagemCurtida: "imagens/posts/02/animals.png",
            usuarioCurtida: "adorable_animals",
            numeroCurtidas: "99.159"
        }
    ]

    return (
        <section className="posts">
            {
                posts.map(post => <Post imagemAutor={post.imagemAutor} autor={post.autor} imagemPost={post.imagemPost}
                    imagemCurtida={post.imagemCurtida} usuarioCurtida={post.usuarioCurtida}
                    numeroCurtidas={post.numeroCurtidas} />)
            }
        </section>
    );
}