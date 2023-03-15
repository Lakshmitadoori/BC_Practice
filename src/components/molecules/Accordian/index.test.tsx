import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import SimpleAccordion from ".";

describe("accordian", () => {
  test("renders correctly", () => {
    render(<SimpleAccordion cards={[]} />);
    const accComponent = screen.getByRole("accordian")
    expect(accComponent).toBeInTheDocument();
    const accordComponent = screen.getByTestId("acc")
    expect(accordComponent).toBeInTheDocument();
  });
});
