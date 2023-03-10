import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Selection from "./index";
import { SelectChangeEvent } from "@mui/material/Select";

describe("Input test", () => {
  const list = [
    { value: "10", label: "10 per page" },
    { value: "20", label: "20 per page" },
    { value: "5", label: "5 per page" },
  ];
  test("renders select component correctly", () => {
    render(
      <Selection
        options={list}
        handleChange={(event: SelectChangeEvent) => {}}
      />
    );
    const selectElement = screen.getByRole("button");
    expect(selectElement).toBeInTheDocument();
  });
  test("first option is selected by default", () => {
    render(
      <Selection
        options={list}
        handleChange={(event: SelectChangeEvent) => {}}
      />
    );
    const selectElement = screen.getByRole("button");
    expect(selectElement).toHaveTextContent(list[0].label);
  });
  test("all options are rendered within select overlay", async () => {
    const { getByRole } = render(
      <Selection
        options={list}
        handleChange={(event: SelectChangeEvent) => {}}
      />
    );
    fireEvent.mouseDown(getByRole("button"));
    const listbox = within(getByRole("listbox"));
    expect(listbox.getByTestId(1)).toHaveTextContent(list[1].label);
    expect(listbox.getByTestId(2)).toHaveTextContent(list[2].label);
  });
  test("option is selected correctly when it is clicked", async () => {
    const { getByRole } = render(
      <Selection
        options={list}
        handleChange={(event: SelectChangeEvent) => {}}
      />
    );
    fireEvent.mouseDown(getByRole("button"));
    const listbox = within(getByRole("listbox"));
    fireEvent.click(listbox.getByText(/20 per page/i));
    expect(await screen.findByText(/20 per page/i)).toBeInTheDocument();
  });
});

