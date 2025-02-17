import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5174/portfolio/");

  await expect(page).toHaveTitle(/Home | Ofek/);
});

test.describe("theme toggle tests", () => {
  test.use({
    colorScheme: "dark",
  });

  test("theme mode toggle", async ({ page }) => {
    await page.goto("http://localhost:5174/portfolio/");

    const toggleThemeButton = await page.getByTestId("theme-button");
    await toggleThemeButton.click();
    await expect(page.locator("html")).toHaveAttribute("class", "light");

    await toggleThemeButton.click();
    await expect(page.locator("html")).toHaveAttribute("class", "dark");
  });
});

test.describe("mobile navigation menu tests", () => {
  test.use({
    viewport: { width: 375, height: 667 },
  });

  test("mobile menu opens", async ({ page }) => {
    await page.goto("http://localhost:5174/portfolio/");

    const mobileMenuButton = await page.getByTestId("mobile-sheet-button");
    await mobileMenuButton.click();

    await expect(page.getByRole("dialog")).toBeVisible();
  });

  test("about me link works", async ({ page }) => {
    await page.goto("http://localhost:5174/portfolio/");

    const mobileMenuButton = await page.getByTestId("mobile-sheet-button");
    await mobileMenuButton.click();
    const aboutMeLink = await page.getByRole("link", { name: "About Me" });
    await aboutMeLink.click();

    await expect(page).toHaveURL("http://localhost:5174/portfolio/#about");
  });

  test("projects link works", async ({ page }) => {
    await page.goto("http://localhost:5174/portfolio/");

    const mobileMenuButton = await page.getByTestId("mobile-sheet-button");
    await mobileMenuButton.click();
    const projectsink = await page.getByRole("link", { name: "Projects" });
    await projectsink.click();

    await expect(page).toHaveURL("http://localhost:5174/portfolio/#projects");
  });
});

test.describe("desktop navigation menu tests", () => {
  test.use({
    viewport: { width: 1600, height: 1200 },
  });

  test("about me link works", async ({ page }) => {
    await page.goto("http://localhost:5174/portfolio/");

    const aboutMeLink = await page.getByRole("link", { name: "About Me" });
    await aboutMeLink.click();

    await expect(page).toHaveURL("http://localhost:5174/portfolio/#about");
  });

  test("projects link works", async ({ page }) => {
    await page.goto("http://localhost:5174/portfolio/");

    const projectsink = await page.getByRole("link", { name: "Projects" });
    await projectsink.click();

    await expect(page).toHaveURL("http://localhost:5174/portfolio/#projects");
  });
});
