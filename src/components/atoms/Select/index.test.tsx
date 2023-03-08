import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Selection from "./index";
import { height } from "@mui/system";

describe("Input test", () => {
  const list = ["10 per page", "20 per page"];
  test("renders select component correctly", () => {
    render(<Selection options={list} />);
    const selectElement = screen.getByRole("button");
    expect(selectElement).toBeInTheDocument();
  });
  test("renders select options correctly", () => {
    render(<Selection options={list} />);
    const selectElement = screen.getByRole("button");
    expect(selectElement).toHaveTextContent(list[0]);
  });
});
