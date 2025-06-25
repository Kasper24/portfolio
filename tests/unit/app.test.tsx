import { vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "@/app";

// Mock the Header component
vi.mock("@/components/header", () => ({
  default: () => <div data-testid="header">Header</div>,
}));

// Mock theme provider
vi.mock("@/providers/theme-provider", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  useTheme: () => ({
    theme: "dark",
    setTheme: vi.fn(),
    toggleTheme: vi.fn(),
  }),
}));

// Mock i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mock scrollIntoView
Object.defineProperty(Element.prototype, "scrollIntoView", {
  value: vi.fn(),
  writable: true,
});

// Mock fetch for GitHub API calls
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("App Component", () => {
  beforeEach(() => {
    mockFetch.mockClear();
    vi.clearAllMocks();
  });

  it("renders the main layout correctly", () => {
    render(<App />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument();
    expect(screen.getByText(/Ofek/)).toBeInTheDocument();
  });

  describe("HeroSection", () => {
    it("renders hero section with correct content", () => {
      render(<App />);

      expect(screen.getByText(/Available for work/)).toBeInTheDocument();
      expect(screen.getByText(/Full-stack developer/)).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: /view projects/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: /get in touch/i }),
      ).toBeInTheDocument();
    });
    it("has working navigation links", async () => {
      render(<App />);

      const projectsLink = screen.getByRole("link", { name: /view projects/i });
      const user = userEvent.setup();

      await user.click(projectsLink);

      // Verify scrollIntoView was called
      expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    });
  });

  describe("TechStack", () => {
    it("renders tech stack section", () => {
      render(<App />);

      expect(screen.getByText("Tech Stack")).toBeInTheDocument();

      // Test that tech items exist within the tech stack section specifically
      const techStackSection = screen.getByText("Tech Stack").closest("div");
      expect(techStackSection).toBeInTheDocument();

      // Use getAllByText for items that might appear in multiple places
      expect(screen.getAllByText("Flutter").length).toBeGreaterThan(0);
      expect(screen.getAllByText("Dart").length).toBeGreaterThan(0);
      expect(screen.getAllByText("JavaScript").length).toBeGreaterThan(0);
      expect(screen.getAllByText("React").length).toBeGreaterThan(0);
    });
  });

  describe("AboutCard", () => {
    it("renders about section with correct content", () => {
      render(<App />);

      expect(screen.getByText("About Me")).toBeInTheDocument();
      expect(
        screen.getByText(/passionate developer who started coding as a kid/),
      ).toBeInTheDocument();
      expect(screen.getByText(/Game Dev Background/)).toBeInTheDocument();
      expect(screen.getByText(/Web Applications/)).toBeInTheDocument();
      expect(screen.getByText(/Open Source/)).toBeInTheDocument();
    });
  });

  describe("ProjectCard", () => {
    beforeEach(() => {
      // Mock successful GitHub API response
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ stargazers_count: 42 }),
      });
    });

    it("renders project cards with correct information", () => {
      render(<App />);

      expect(screen.getByText("Echo")).toBeInTheDocument();
      expect(screen.getByText("KwesomeDE")).toBeInTheDocument();
      expect(screen.getByText("Typistack")).toBeInTheDocument();
      expect(screen.getByText("Walltone")).toBeInTheDocument();
      expect(screen.getByText("Lightify")).toBeInTheDocument();
    });

    it("displays project descriptions", () => {
      render(<App />);

      expect(
        screen.getByText(/Real-time messaging application/),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/customizable desktop environment/),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Express.js wrapper providing full-stack type safety/),
      ).toBeInTheDocument();
    });

    it("shows project tags", () => {
      render(<App />);

      // Use getAllByText for tags that might appear in multiple places
      expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
      expect(screen.getByText("Socket.IO")).toBeInTheDocument();
      expect(screen.getByText("Postgres")).toBeInTheDocument();
      expect(screen.getByText("AWS")).toBeInTheDocument();
      expect(screen.getByText("Docker")).toBeInTheDocument();
      expect(screen.getByText("Terraform")).toBeInTheDocument();
    });

    it("fetches and displays GitHub stars", async () => {
      render(<App />);

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining("https://api.github.com/repos/Kasper24/"),
        );
      });

      await waitFor(() => {
        // Since all projects fetch the same star count, we expect multiple instances
        expect(screen.getAllByText("42 stars")).toHaveLength(5);
      });
    });

    it("handles GitHub API errors gracefully", async () => {
      mockFetch.mockRejectedValue(new Error("API Error"));

      render(<App />);

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalled();
      });

      // Stars should not be displayed when API fails
      expect(screen.queryByText(/stars/)).not.toBeInTheDocument();
    });

    it("includes GitHub and demo links", () => {
      render(<App />);

      // Check for GitHub links (there should be multiple)
      const githubLinks = screen
        .getAllByRole("link", { name: "" })
        .filter((link) => link.getAttribute("href")?.includes("github.com"));
      expect(githubLinks.length).toBeGreaterThan(0);
    });
  });

  describe("ContactSection", () => {
    it("renders contact information", () => {
      render(<App />);

      expect(screen.getByText("Let's Connect")).toBeInTheDocument();
      expect(screen.getByText("@Kasper24")).toBeInTheDocument();
      expect(screen.getByText("ofek-its")).toBeInTheDocument();
      expect(screen.getByText("ofek4430@gmail.com")).toBeInTheDocument();
    });

    it("has working contact links", () => {
      render(<App />);

      const githubLink = screen.getByRole("link", { name: /github/i });
      const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
      const emailLink = screen.getByRole("link", { name: /email/i });

      expect(githubLink).toHaveAttribute("href", "https://github.com/Kasper24");
      expect(linkedinLink).toHaveAttribute(
        "href",
        "https://www.linkedin.com/in/ofek-its",
      );
      expect(emailLink).toHaveAttribute("href", "mailto:ofek4430@gmail.com");
    });
  });

  it("renders the correct number of projects", () => {
    render(<App />);

    expect(screen.getByText("5 projects")).toBeInTheDocument();
  });

  it("renders footer with copyright information", () => {
    render(<App />);

    expect(screen.getByText(/Copyright/)).toBeInTheDocument();
    expect(
      screen.getByText(/Built with React & Tailwind CSS/),
    ).toBeInTheDocument();
  });
});
