import dateWord from "./index.js";

test("returns date in other language", () => {
  expect(
    dateWord(`18 décembre 2021`, {
      is: "fr",
      to: "en",
    })
  ).toBe("18 december 2021");
});
