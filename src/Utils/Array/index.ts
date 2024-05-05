class ArrayUtils {
  public static shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
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
