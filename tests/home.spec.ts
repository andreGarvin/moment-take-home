import { test, expect } from "@playwright/test";

test("should render home page", async ({ page }) => {
  await page.goto("/");

  const homeLink = await page.locator('button:has-text("Home")');
  await expect(homeLink).toHaveCount(1);
  await expect(homeLink).toHaveCSS("font-weight", "500");
});

test("Check for Research link and verify Page Not Found message", async ({
  page,
}) => {
  await page.goto("/");

  const researchLink = await page.locator('button:has-text("Research")');
  await expect(researchLink).toHaveCount(1);

  await researchLink.click();

  const pageNotFoundMessage = await page.locator(
    'p:has-text("Page not found")'
  );
  await expect(pageNotFoundMessage).toHaveCount(1);
});

test("Check if the number of instruments displayed is 6", async ({
  page,
}) => {
  await page.goto("/");

  const instrumentList = await page.locator("[data-test-id=instruments] > *");
  await expect(instrumentList).toHaveCount(12);
});
