import { Component } from 'react';

export class Article extends Component {
    render() {
        const {
            id,
            title,
            picture,
            pictureDescription,
            intro
        } = this.props;
        return (
            <article id={id}>
                <h2><a>{title}</a></h2>
                <div className="article-item-body" >
                    <img src={picture} alt={pictureDescription} />
                    <span>{intro}</span>
                </div>
            </article>
        )
    }
}