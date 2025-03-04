class ArrayUtils {
  public static shuffle<T>(array: T[]): T[] {
    const shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      if (shuffledArray[i] !== undefined && shuffledArray[j] !== undefined) {
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j] as T,
          shuffledArray[i] as T
        ];
      }
    }

    return shuffledArray;
  }

  public static reorder<T>(
    list: T[],
    startIndex: number,
    endIndex: number
  ): T[] {
    const result = Array.from([...JSON.parse(JSON.stringify(list))]);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result.map((item, index) => {
      return {
        ...item,
        order: index
      };
    });
  }
}

export default ArrayUtils;
