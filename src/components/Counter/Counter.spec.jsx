import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

describe("Basic rendering of counter", () => {
  it("Should render Counter value", () => {
    //AAA:- arrange act and assert
    const component = render(<Counter />);
    
    expect(component.getByTestId("Counter")).toBeDefined();
  });

  it("Should equal to 0", () => {
    const component = render(<Counter />);

    expect(component.getByTestId("Counter")).toHaveTextContent(0);
  });

  it("Should be able to increment", () => {
    const { getByTestId } = render(<Counter />); //here destructuring happened
    expect(getByTestId("up-button")).not.toHaveAttribute("disabled");
  });

  it("Should be able to decrement", () => {
    const { getByTestId } = render(<Counter />);

    expect(getByTestId("down-button")).not.toHaveAttribute("disabled");
  });
}); //describe what the test is about


describe('Testing counter functionality', () => {
    it("Should increment the counter when Increment button is pressed", () => {
        const {getByTestId} = render(<Counter />)

        fireEvent.click(getByTestId("up-button"));

        expect(getByTestId("Counter")).toHaveTextContent("1");
    });

    it("Should decrement the counter when Decrement button is pressed", () => {
        const {getByTestId} = render(<Counter />)

        fireEvent.click(getByTestId("down-button"));

        expect(getByTestId("Counter")).toHaveTextContent("-1");
    });
});
