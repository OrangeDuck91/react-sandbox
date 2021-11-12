import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Article from './Article/Article';

const selectedArticles = (state) => state.articles;

function App() {

  const dispatch = useDispatch();
  dispatch({ type: 'articles/loadArticles' });

  const articles = useSelector(selectedArticles);

  const articlesElements = articles.map(article =>
    <Article key={article.id}
      id={article.id}
      title={article.title}
      picture={article.picture}
      pictureDescription={article.pictureDescription}
      intro={article.intro} />
  );

  return (
    <section className="main-content">
      {articlesElements}
    </section>
  );
}

export default App;
