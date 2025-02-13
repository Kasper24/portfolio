import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import Project from "@/components/project";

// Mock the external components
vi.mock("@/components/ui/badge", () => ({
  Badge: ({ children }: { children: React.ReactNode }) => (
    <span>{children}</span>
  ),
}));
vi.mock("@/components/blurred-card", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("Project component", () => {
  const defaultProps = {
    owner: "octocat",
    repo: "hello-world",
    desc: "A sample project on GitHub",
    imgs: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
    color: "blue",
    showStars: true,
    features: ["Feature 1", "Feature 2"],
  };

  const fetchSpy = vi.spyOn(global, "fetch");

  beforeAll(() => {
    const mockResolveValue = {
      ok: true,
      json: () =>
        new Promise((resolve) =>
          resolve({
            stargazers_count: 100,
          }),
        ),
    };
    fetchSpy.mockReturnValue(mockResolveValue as any);
  });

  it("should render the project name and description", () => {
    render(<Project {...defaultProps} />);

    expect(screen.getByText("hello-world")).toBeInTheDocument();
    expect(screen.getByText("A sample project on GitHub")).toBeInTheDocument();
  });

  it("should render the GitHub stars component and display the correct star count", async () => {
    render(<Project {...defaultProps} />);

    // Wait for the fetch to resolve and stars to be displayed
    await waitFor(() => expect(screen.getByText("100")).toBeInTheDocument());
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByLabelText("star")).toBeInTheDocument();
  });

  it("should display features with correct badges", () => {
    render(<Project {...defaultProps} />);

    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
  });

  it("should render images", () => {
    render(<Project {...defaultProps} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute("src", "https://example.com/image1.jpg");
    expect(images[1]).toHaveAttribute("src", "https://example.com/image2.jpg");
  });

  it("should not display stars if showStars is false", () => {
    const props = { ...defaultProps, showStars: false };
    render(<Project {...props} />);

    expect(screen.queryByText("100")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("img", { name: /star/i }),
    ).not.toBeInTheDocument();
  });

  it("should show no stars if the API call fails", async () => {
    const mockResolveValue = {
      ok: false,
      status: 404,
      statusText: "Not Found",
      json: () => new Promise((resolve) => resolve({})),
    };
    fetchSpy.mockReturnValue(mockResolveValue as any);

    render(<Project {...defaultProps} />);

    await waitFor(() =>
      expect(screen.queryByLabelText("star")).not.toBeInTheDocument(),
    );
  });
});
