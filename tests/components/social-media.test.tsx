import { render, screen } from "@testing-library/react";
import { FaGithub } from "react-icons/fa";
import SocialMedia from "@/components/social-media";

describe("SocialMedia component", () => {
  it("should render the social media link", () => {
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
  });

  it("should render the social media icon", () => {
    render(
      <SocialMedia
        name="Github"
        link="https://github.com/kasper24"
        Icon={FaGithub}
      />,
    );
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });

  it("should render the social media title", () => {
    render(
      <SocialMedia
        name="Github"
        link="https://github.com/kasper24"
        Icon={FaGithub}
      />,
    );
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Github");
  });
});
