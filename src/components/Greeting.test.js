import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders unchanged text if button was NOT clicked", () => {
    render(<Greeting />);
    const unchangedTextElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(unchangedTextElement).toBeInTheDocument();
  });

  test("renders changed text if button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const changedTextElement = screen.getByText("Changed", {
      exact: false,
    });
    expect(changedTextElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const changedTextElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(changedTextElement).toBeNull();
  });
});
