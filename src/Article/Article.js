import { Component } from 'react';
import { connect } from 'react-redux';

class Article extends Component {

    titleClicked(event) {
        const { id, title, dispatch } = this.props;
        console.log('titleClicked', title);
        dispatch({ type: 'articles/articleTitleClicked', playload: { id } })
    }

    render() {
        const {
            id,
            title,
            picture,
            pictureDescription,
            intro
        } = this.props;

        const titleClicked = this.titleClicked.bind(this);

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
}

export default connect()(Article)