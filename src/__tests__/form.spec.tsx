import * as React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Form from '../components/Form';

function renderUI() {
  return render(<Form GiveGift={({ giver , receiver }) => {}}/>);
}

afterEach(() => {
  cleanup();
})

describe('Testing Form component behavior', () => {

  it('Initializes `form`', async () => {
      const { container } = await renderUI();
      expect(container.querySelector("[class='form-container']")).toBeInTheDocument();
  });

  it('Check inputs of form', async () => {
    const { container } = renderUI();

    fireEvent.click(screen.getByRole('button', {
      name: "Give it away"
    }));

    expect(container.querySelector("[class='list-component']")).toBeInTheDocument();
  });

  it('Test submit of form', async () => {
    
  });
});

