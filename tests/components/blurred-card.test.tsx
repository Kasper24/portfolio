import { render, screen } from "@testing-library/react";
import BlurredCard from "@/components/blurred-card";

describe("BlurredCard component", () => {
  const child = <p data-testid="child">Hello World</p>;

  it("renders children correctly", () => {
    render(<BlurredCard color="red">{child}</BlurredCard>);
    expect(screen.getByTestId("child")).toHaveTextContent("Hello World");
  });

  it("applies custom class names", () => {
    const { container } = render(
      <BlurredCard color="red" className="custom-class">
        {child}
      </BlurredCard>,
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  // it("renders GradientEffect with correct color", () => {
  //   const { container } = render(<BlurredCard color="blue" />);
  //   const gradientDiv = container.querySelector("div > div");
  //   expect(gradientDiv).toHaveStyle("background-color: blue");
  // });
});
