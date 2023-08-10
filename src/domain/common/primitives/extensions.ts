class ArrayExt {
  public static CheckExists<T>(arr: Array<T>, predicate: (t: T) => boolean): boolean
  {
      return arr.findIndex(predicate) != -1;
  }
}

export {
  ArrayExt
}