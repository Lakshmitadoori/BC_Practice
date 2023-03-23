import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OtpPage from "./";
import "@testing-library/jest-dom";
describe("OTP page",()=>{
      test("renders the text with the given props", () => {
        const text ="Please enter OTP";
        render(<OtpPage maintext={text}/>);
        const textElement = screen.getByText(text);
        expect(textElement).toBeInTheDocument();
      });
      test("renders the src with the given props", () => {
        const wrapper = render(<OtpPage />);
        expect(wrapper).toBeTruthy;
      });
      test("renders the muiinput", () => {
        jest.useFakeTimers();
        const wrapper = render(<OtpPage />);
        const inputs=screen.getAllByRole("textbox")
        inputs.map((input)=>{
            fireEvent.change(input,{target:{value:2}})
        })
        const inpu=screen.getByText("continue")
        fireEvent.click(inpu)
         jest.runAllTimers();
      });
      test("renders the resend button", () => {
        jest.useFakeTimers();
        const wrapper = render(<OtpPage />);
        const inputs=screen.getByText("Resend Otp")
        fireEvent.click(inputs)
        jest.runAllTimers();
      });
      test("renders the  validation", () => {
        jest.useFakeTimers();
        const wrapper = render(<OtpPage />);
        const inputs=screen.getAllByRole("textbox")
        inputs.map((input)=>{
            fireEvent.change(input,{target:{value:1}})
        })
        const validation=screen.getByText("continue")
        fireEvent.click(validation)
         jest.runAllTimers();
      });

    
     
})