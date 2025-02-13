import { vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "@/components/header";

const mocks = vi.hoisted(() => {
  return {
    default: vi.fn(),
  };
});

vi.mock("@/hooks/use-media-query", () => {
  return {
    default: mocks.default,
  };
});

const toggleThemeMock = vi.fn();
vi.mock("@/components/theme-provider", () => {
  return {
    useTheme: () => {
      return {
        toggleTheme: toggleThemeMock,
      };
    },
  };
});

describe("Header Component", () => {
  afterEach(() => {
    mocks.default.mockRestore();
  });

  it("renders MobileHeader when isMobile is true", () => {
    mocks.default.mockReturnValue({ isMobile: true });

    render(<Header />);

    expect(screen.getByTestId("mobile-header")).toBeInTheDocument();
  });

  it("renders DesktopHeader when isMobile is false", () => {
    mocks.default.mockReturnValue({ isMobile: false });

    render(<Header />);

    expect(screen.getByTestId("desktop-header")).toBeInTheDocument();
  });

  it("opens and closes the mobile menu", async () => {
    mocks.default.mockReturnValue({ isMobile: true });

    render(<Header />);

    const menuButton = screen.getByTestId("mobile-sheet-button");
    const user = userEvent.setup();
    user.click(menuButton);
    expect(await screen.findByText(/about me/i)).toBeInTheDocument();

    user.click(screen.getByText(/about me/i));
    await waitFor(() =>
      expect(screen.queryByText(/about me/i)).not.toBeInTheDocument(),
    );
  });

  it("toggles the theme when clicking the theme button", async () => {
    mocks.default.mockReturnValue({ isMobile: true });

    render(<Header />);

    const themeButton = screen.getByTestId("theme-button");
    const user = userEvent.setup();
    await user.click(themeButton);

    expect(toggleThemeMock).toHaveBeenCalled();
  });
});
