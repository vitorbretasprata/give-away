import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from '../components/List';

afterAll(() => {
    cleanup();
});

describe('Testing List component behavior', () => {
  
    it('Initializes empty list', async () => {
        const { container } = render(<List ListContent={[]}/>);
        expect(container.querySelector("[class='empty-list']")).toContainHTML("<h2>There are no products to donate.</h2>");
    });

    it('Initializes list with element', async () => {
        const { container } = render(
            <List ListContent={[{
                giver : "Vitor", 
                receiver : "Pedro" 
            }]}
        />);
        expect(container.querySelector("[class='list-component']")).toBeInTheDocument();

    });
});