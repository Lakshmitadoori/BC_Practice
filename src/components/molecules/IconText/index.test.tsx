import {render, screen } from "@testing-library/react";
import Input from ".";
import React from "react";
import '@testing-library/jest-dom';

describe("Text", () => {
  test("renders correctly", () => {
    render(<Input/>);
    const  textComponent = screen.getByRole("icon")
    expect(textComponent).toBeInTheDocument();
    const  txt = screen.getByPlaceholderText("Search any Candidate")
    expect(txt).toBeInTheDocument();

  });
  test("checks id", () =>{
    const {getByTestId} = render(<Input />);
    const isFormValid = getByTestId('icontext');
    expect(isFormValid).toBeInTheDocument();
  })
});
