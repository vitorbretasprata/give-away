import * as React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

type ComponentProps = React.ComponentProps<typeof App>;

function renderUI(props : ComponentProps) {
  return render(<App />);
}

afterEach(() => {
  cleanup();
})

describe('Testing App component behavior', () => {

  it('Matches snapshot', async () => {
      const { baseElement } = await renderUI({});
      expect(baseElement).toMatchSnapshot();
  });

  it('Initializes `state` with an empty list', async () => {
      const { getByText } = await renderUI({});
      expect(getByText("Give away")).toBeInTheDocument();
  });

  it('Simulate a click of a button', async () => {
    const { container } = renderUI({});

    fireEvent.click(screen.getByRole('button', {
      name: "Save donation"
    }));

    expect(container.querySelector("[class='list-component']")).toBeInTheDocument();
  });
});

