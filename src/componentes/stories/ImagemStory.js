export default function ImagemStory(props) {
    return (
        <div className="story-bg-img">
            <img className="story-background" src="imagens/stories_background.jpg" alt="story background" />
            <a href="#"><img className="story-image" src={props.imagemSrc} alt={props.imagemAlt} /></a>
        </div>
    );
}