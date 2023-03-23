import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pread from ".";
describe("preadverse",()=>{
    test("renders page",()=>{
        const wrapper=render(<Pread/>);
        expect(wrapper).toBeTruthy;
    })
    test("checkboxes",()=>{
        render(<Pread/>)
        const check=screen.getAllByRole("checkbox")
        fireEvent.click(check[0])
        fireEvent.click(check[1])
        fireEvent.click(check[2])
        const inpu=screen.getByText("Preview Notice")
        fireEvent.click(inpu)
        const buttn=screen.getByText("Submit Notice")
        fireEvent.click(buttn)
        const image=screen.getByAltText('back-up')
        fireEvent.click(image)
        fireEvent.click(check[0])
        fireEvent.click(check[1])
        fireEvent.click(check[2])
    })
})