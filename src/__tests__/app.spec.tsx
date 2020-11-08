import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import App from '../App';

let documentBody: RenderResult;

describe('<App />', () => {

  beforeEach(() => {
    documentBody = render(<App />);
  });

  it('Matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});