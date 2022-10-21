import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Article from '../Article/Article';
import { render } from '../test-utils';

const testArticle = {
    id: 2,
    title: 'Grande manifestation contre le changement climatique',
    picture: '../assets/images/article6.jpg',
    pictureDescription: 'Un manifestant au milieu des fumigènes',
    intro: 'Une grande manifestation rassemblait mardi les défenseurs du la Terre, de la nature et du climat. Les chagements climatiques liés aux émissions humaines réclament des mesures politiques et économiques urgentes.'
}

test("Affiche l'article", async () => {
    // ARRANGE
    render(<Article {...testArticle} />)

    // ACT
    // await userEvent.click(screen.getByText('Load Greeting'))
    // await screen.findByRole('heading')

    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('Grande manifestation contre le changement climatique')
    expect(screen.getByRole('img')).toHaveAttribute("alt", "Un manifestant au milieu des fumigènes")
})