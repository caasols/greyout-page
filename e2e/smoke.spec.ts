import { test, expect } from "@playwright/test";

test("home loads with hero and download link", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: "Greyout" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Download for macOS/ }),
  ).toBeVisible();
});

test("FAQ accordion opens an answer", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Is Greyout free?" }).click();
  await expect(
    page.getByText(/Greyout is free, with no account/),
  ).toBeVisible();
});

test("language selector switches locale", async ({ page }) => {
  await page.goto("/");
  const selector = page.getByRole("button", { name: "Change language" });
  await expect(selector).toHaveText(/EN/);
  await selector.click();
  await page.getByRole("menuitem", { name: /Español/ }).click();
  await expect(selector).toHaveText(/ES/);
});
