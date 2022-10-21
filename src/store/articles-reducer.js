import { useDispatch } from "react-redux";

const initialState = [
    {
        id: 1,
        title: 'Soviet N1 Rocket that failed to go to the moon',
        picture: '../assets/images/article1.jpg',
        pictureDescription: 'N1 Rocket on launch stand',
        intro: 'In the 60\s, cold war is at it\s peek and the race to the moon concentrate the best scientific efforts of the two blocks. The N1 rocket is built as a response to the massive Saturn V launcher.'
    },
    {
        id: 2,
        title: 'Top 10 of the viruses that nearly destroyed humanity.',
        picture: '../assets/images/article2.jpg',
        pictureDescription: 'A big virus',
        intro: 'Form the Black Plague to the HIV, human race as always been threatened by epidemics. Among theses viruses, some of them were close to destroy humanity.'
    }
];

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case 'articles/articlesLoaded':
            console.log('articles/articlesLoaded called')
            return action.playload;
        case 'articles/articleTitleClicked':
            console.log('articles/articleTitleClicked called')
            return state.filter(article => article.id === action.playload?.id);
        case 'articles/loadArticles':
            console.log('articles/loadArticles called');
            return state
        default:
            return state;
    }
}