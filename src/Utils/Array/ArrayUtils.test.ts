import ArrayUtils from ".";

describe("shuffle", () => {
  it("should return an array", () => {
    const result = ArrayUtils.shuffle([]);
    expect(Array.isArray(result)).toBe(true);
  });

  it("should not change the length of the array", () => {
    const array = ["a", "b", "c", "d"];
    const result = ArrayUtils.shuffle([...array]);
    expect(result).toHaveLength(array.length);
  });

  it("should contain the same elements after shuffling", () => {
    const array = ["a", "b", "c", "d"];
    const result = ArrayUtils.shuffle([...array]);
    expect(result.sort()).toEqual(array.sort());
  });

  it("should shuffle the elements of the array", () => {
    const array = ["a", "b", "c", "d"];
    let isShuffled = false;
    for (let i = 0; i < 10; i++) {
      const result = ArrayUtils.shuffle([...array]);
      if (result.join("") !== array.join("")) {
        isShuffled = true;
        break;
      }
    }
    expect(isShuffled).toBe(true);
  });
});
