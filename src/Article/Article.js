import { connect } from 'react-redux';

const Article = ({
    id,
    title,
    picture,
    pictureDescription,
    intro,
    dispatch
}) => {

    const titleClicked = (event) => {
        console.log('titleClicked', title);
        dispatch({ type: 'articles/articleTitleClicked', playload: { id } })
    }

    return (
        <article id={id}>
            <h2 onClick={titleClicked}><a>{title}</a></h2>
            <div className="article-item-body" >
                <img src={picture} alt={pictureDescription} />
                <span>{intro}</span>
            </div>
        </article>
    )
}

export default connect()(Article)