import { test, expect } from "@playwright/test";
// import AxeBuilder from "@axe-core/playwright"; // 1

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Home | Ofek/);
});

// test.describe("accessibility tests", () => {
//   test("should not have any automatically detectable accessibility issues", async ({
//     page,
//   }) => {
//     await page.goto("/");
//     const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
//     expect(accessibilityScanResults.violations).toEqual([]);
//   });
//   test("should not have any automatically detectable WCAG A or AA violations", async ({
//     page,
//   }) => {
//     await page.goto("https://your-site.com/");
//     const accessibilityScanResults = await new AxeBuilder({ page })
//       .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
//       .analyze();
//     expect(accessibilityScanResults.violations).toEqual([]);
//   });
// });

test.describe("theme toggle tests", () => {
  test.use({
    colorScheme: "dark",
  });

  test("theme mode toggle", async ({ page }) => {
    await page.goto("/");

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
    await page.goto("/");

    const mobileMenuButton = await page.getByTestId("mobile-sheet-button");
    await mobileMenuButton.click();

    await expect(page.getByRole("dialog")).toBeVisible();
  });

  test("about me link works", async ({ page }) => {
    await page.goto("/");

    const mobileMenuButton = await page.getByTestId("mobile-sheet-button");
    await mobileMenuButton.click();
    const aboutMeLink = await page.getByRole("link", { name: "About Me" });
    await aboutMeLink.click();

    await expect(page).toHaveURL("/portfolio/#about");
  });

  test("projects link works", async ({ page }) => {
    await page.goto("/");

    const mobileMenuButton = await page.getByTestId("mobile-sheet-button");
    await mobileMenuButton.click();
    const projectsLink = await page.getByRole("link", { name: "Projects" });
    await projectsLink.click();

    await expect(page).toHaveURL("/portfolio/#projects");
  });
});

test.describe("desktop navigation menu tests", () => {
  test.use({
    viewport: { width: 1600, height: 1200 },
  });

  test("about me link works", async ({ page }) => {
    await page.goto("/");

    const aboutMeLink = await page
      .getByTestId("desktop-header")
      .getByRole("link", { name: "About Me" });
    await aboutMeLink.click();

    await expect(page).toHaveURL("/portfolio/#about");
  });

  test("projects link works", async ({ page }) => {
    await page.goto("/");

    const projectsLink = await page
      .getByTestId("desktop-header")
      .getByRole("link", { name: "Projects" });
    await projectsLink.click();

    await expect(page).toHaveURL("/portfolio/#projects");
  });
});
