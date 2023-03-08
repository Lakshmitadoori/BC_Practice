import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Selection from "./index";
import  { SelectChangeEvent } from "@mui/material/Select";

describe("Input test", () => {
  const list = [{value:"10",label:"10 per page"},{value:"20",label:"20 per page"},{value:"5",label:"5 per page"},]
  test("renders select component correctly", () => {
    render(<Selection options={list} handleChange={(event:SelectChangeEvent)=>{}}/>);
    const selectElement = screen.getByRole("button");
    expect(selectElement).toBeInTheDocument();
  });
  test("renders select options correctly", () => {
    render(<Selection options={list} handleChange={(event:SelectChangeEvent)=>{}}/>);
    const selectElement = screen.getByRole("button");
    expect(selectElement).toHaveTextContent(list[0].label);
  });
});
