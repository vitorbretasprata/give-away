import * as React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Form from '../components/Form';

function renderUI() {
  const utils =  render(<Form GiveGift={({ giver , receiver }) => {}}/>);
  const inputGiver = utils.getByLabelText("giver-input");
  const inputReceiver = utils.getByLabelText("receiver-input");
  const inputButton = utils.getByDisplayValue("Save donation");

  return {
    ...utils,
    inputGiver,
    inputReceiver,
    inputButton
  }

}

afterEach(() => {
  cleanup();
})

describe('Testing Form component behavior', () => {

  it('Initializes `form`', async () => {
      const { container } = await renderUI();
      expect(container.querySelector("[class='form-container']")).toBeInTheDocument();
  });

  it('Check inputs of form and submit', async () => {
    const { inputGiver, inputReceiver, inputButton } = renderUI();

    fireEvent.change(inputGiver, { target: { value: "Vitor"} });
    fireEvent.change(inputReceiver, { target: { value: "Prata"} });

    expect(inputGiver).toHaveValue("Vitor");
    expect(inputReceiver).toHaveValue("Prata");

    fireEvent.click(inputButton);

    expect(inputGiver).toHaveValue("");
    expect(inputReceiver).toHaveValue("");
  });

});

