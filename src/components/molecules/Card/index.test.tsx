import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import InfoCard from ".";

describe("card", () => {
  test("renders correctly", () => {
    render(<InfoCard/>);
    const cardComponent= screen.getByRole("card")
    expect(cardComponent).toBeInTheDocument();
    const cardsComponent = screen.getByTestId("cards")
    expect(cardsComponent).toBeInTheDocument();
  });
});
