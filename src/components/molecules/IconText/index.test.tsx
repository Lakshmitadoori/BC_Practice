import {render, screen } from "@testing-library/react";
import Input from ".";
import React from "react";
import '@testing-library/jest-dom';

describe("Text", () => {
  test("renders correctly", () => {
    render(<Input onChange={function (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
      throw new Error("Function not implemented.");
    } }/>);
    const  textComponent = screen.getByRole("icon")
    expect(textComponent).toBeInTheDocument();
    const  txt = screen.getByPlaceholderText("Search any Candidate")
    expect(txt).toBeInTheDocument();

  });
  test("checks id", () =>{
    const {getByTestId} = render(<Input onChange={function (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
      throw new Error("Function not implemented.");
    } } />);
    const isFormValid = getByTestId('icontext');
    expect(isFormValid).toBeInTheDocument();
  })
});
