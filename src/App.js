import './App.css';
import { Article } from './Article/Article';

function App() {
  const dumbArray = [
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
      intro: 'Form the Black Plague to the HIV, human race as always been threatened by epidemics. Among theses viruses, some of them were close to destroy humanity.'
    }
  ]

  const articlesElements = dumbArray.map(article =>
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
