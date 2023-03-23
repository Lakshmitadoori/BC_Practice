import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonWithTypography from "./";
import "@testing-library/jest-dom";
describe("ButtonWithTypography", () => {
  it("renders button label and typography text", () => {
    const { getByText } = render(
      <ButtonWithTypography
        direction="row"
        variant="contained"
        onClick={() => {}}
        buttonLabel="Resend OTP"
        typographyText="Didn't recieve OTP?"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        typovariant="body1"
      />
    );
    expect(getByText("Resend OTP")).toBeInTheDocument();
    expect(getByText("Didn't recieve OTP?")).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <ButtonWithTypography
        direction="row"
        variant="contained"
        onClick={handleClick}
        buttonLabel="Resend OTP"
        typographyText="Didn't recieve OTP?"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        typovariant="body1"
      />
    );
    fireEvent.click(getByText("Resend OTP"));
    expect(handleClick).toHaveBeenCalled();
  });
  it("having variant h1", () => {
    const handleClick = jest.fn();
    render(
      <ButtonWithTypography
        direction="row"
        variant="contained"
        onClick={handleClick}
        buttonLabel="Resend OTP"
        typographyText="Didn't get OTP?"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        typovariant="h1"
      />
    );
    const textElement = screen.getByText("Didn't get OTP?");
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toEqual("H1");
  });
  it("should apply justifyContent prop", () => {
    const { container } = render(
      <ButtonWithTypography
        direction="row"
        variant="contained"
        onClick={() => {}}
        buttonLabel="Resend OTP"
        typographyText="Didn't get OTP?"
        justifyContent="center"
      />
    );
    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.justifyContent).toBe("center");
  });

  it("should apply alignItems prop", () => {
    const { container } = render(
      <ButtonWithTypography
        direction="row"
        variant="contained"
        onClick={() => {}}
        buttonLabel="Resend OTP"
        typographyText="Didn't get OTP?"
        alignItems="flex-start"
      />
    );
    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.alignItems).toBe("flex-start");
  });
  it("should apply direction prop", () => {
    const { container } = render(<ButtonWithTypography direction="row" />);
    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.flexDirection).toBe("row");
  });
});
