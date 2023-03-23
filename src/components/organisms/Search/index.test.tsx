import { fireEvent,render,screen} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import Search from ".";

describe("Search", () => {
it('should call onClick handler when clicked', () => {
    render(<Search />);
    const inputs = screen.getByPlaceholderText("Search any Candidate");
    fireEvent.click(inputs);
})
test("checks id", () =>{
    render(<Search />);
    const field: HTMLInputElement | null = screen.getByTestId('icontext').querySelector('input');
    expect(field).toBeInTheDocument();
    
    fireEvent.change(field as Element, { target: { value: 'Some' } });
    expect(field?.value).toBe('Some');
  })
test('string is converted to lowercase in text field', () => {
  render(<Search />);
  const textField:HTMLInputElement | null = screen.getByTestId('icontext').querySelector('input');
  fireEvent.change(textField as Element, { target: { value: 'john' } });
  expect(textField?.value).toBe('john');
})
});