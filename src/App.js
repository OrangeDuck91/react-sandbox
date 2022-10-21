import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import './App.css';
import Article from './Article/Article';


const App = ({ dispatch }) => {

  useEffect(() => {
    dispatch({ type: 'articles/loadArticles' });
  }, [dispatch])

  const articles = useSelector((state) => state.articles);

  return (
    <section className="main-content">
      {articles.map(article =>
        <Article key={article.id}
          id={article.id}
          title={article.title}
          picture={article.picture}
          pictureDescription={article.pictureDescription}
          intro={article.intro} />
      )}
    </section>
  );
}

export default connect()(App)
