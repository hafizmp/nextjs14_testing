import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("should have a Docs text", () => {
    render(<Home />); //ARRANGE

    const myElement = screen.getByText("Docs"); //ACT

    expect(myElement).toBeInTheDocument(); //ASSERT
  });

  it('should contain the text "Information"', () => {
    render(<Home />); //ARRANGE

    const myElement = screen.getByText(/information/i); //ACT

    expect(myElement).toBeInTheDocument(); //ASSERT
  });

  it("should have a heading", () => {
    render(<Home />); //ARRANGE

    const myElement = screen.getByRole("heading", {
      name: "Learn",
    }); //ACT

    expect(myElement).toBeInTheDocument(); //ASSERT
  });
});
