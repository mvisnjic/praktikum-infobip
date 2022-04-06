const dayOfYear = require("./dayOfYear");

describe.skip("dayOfYear", () => {
  test("ako je 1.1.2012 vrati 1", () => {
    // console.log(dayOfYear);
    expect(dayOfYear(1, 1, 2012)).toBe(1);
  });
  test("ako je 1.2.2012 vrati 32", () => {
    // console.log(dayOfYear);
    expect(dayOfYear(1, 2, 2012)).toBe(32);
  });
  test("ako je 1.3.2011 vrati 60", () => {
    // console.log(dayOfYear);
    expect(dayOfYear(1, 3, 2011)).toBe(60);
  });
  test("ako je 1.3.2012 vrati 61", () => {
    // console.log(dayOfYear);
    expect(dayOfYear(1, 3, 2012)).toBe(61);
  });
});
