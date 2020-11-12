import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from '../components/List';

afterAll(() => {
    cleanup();
});

describe('<List />', () => {
  
    it('Initializes empty list', async () => {
        const { container } = render(<List ListContent={[]}/>);
        expect(container.querySelector("[class='empty-list']")).toContainHTML("<h2>List is empty</h2>");
    });

    it('Initializes list with element', async () => {
        const { container } = render(<List ListContent={[{ Item: "Dissolution 2" }]}/>);
        expect(container.querySelector("[class='list-component']")).toContainHTML("<p>Dissolution 2</p>");

    });
});