import { render, screen } from "@testing-library/react";
import { FaGithub } from "react-icons/fa";
import SocialMedia from "@/components/social-media";

describe("SocialMedia", () => {
  it("renders a social media link", () => {
    render(
      <SocialMedia
        name="Github"
        link="https://github.com/kasper24"
        Icon={FaGithub}
      />,
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://github.com/kasper24");

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Github");
  });
});
