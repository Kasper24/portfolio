import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Skill from "@/components/skill";
import { DartLogo } from "@/components/logos";

// Mock Icon component
vi.mock("@/components/ui/icon", () => ({
  default: () => <svg data-testid="icon"></svg>,
}));

describe("Button with Link", () => {
  it("renders the button with a link", () => {
    render(<Skill color="#ff0000" Logo={DartLogo}></Skill>);

    // Check if the icon is present
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
