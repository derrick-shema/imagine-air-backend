class ConstrainedType  {
  /**
   * Create a constrained string using the constructor provided
   * Throw Error if input is null, empty, or length > maxLen
   */
  static createString<T>(fieldName: string, ctr:((str: string) => T), maxLen: number, str: string) {
      if(this.checkStringNullOrEmpty(str)) {
          throw Error(`${fieldName} must not be null or empty`);
      }
      else if(str.length > maxLen) {
          throw Error(`${fieldName} must not be more than ${maxLen} chars`);
      }
      else {
          return ctr(str);
      }
  }

  /**
   * Create a constrained number using the constructor provided
   * Throw Error if input is less than minVal or more than maxVal
   */
  static createNumber<T>(fieldName: string, ctr:((nber: number) => T), minVal: number, maxVal: number, nber: number) {
      if(nber < minVal) {
          throw Error(`${fieldName} must not be less than ${minVal}`);
      }
      else if(nber > maxVal) {
          throw Error(`${fieldName} must not be greater than ${maxVal}`);
      }
      else {
          return ctr(nber);
      }
  }

  /**
  * Create a constrained string using the constructor provided
  * Return Error if input is null. empty, or does not match the regex pattern
  */
  static createLike<T>(fieldName: string, ctr:((str: string) => T), pattern: RegExp, str: string) {
      if(this.checkStringNullOrEmpty(str)) {
          throw Error(`${fieldName} must not be null or empty`);
      }
      else if(pattern.test(str)) {
          return ctr(str);
      }
      else {
          throw Error(`${fieldName}: ${str} must match the pattern ${pattern}`);
      }
  }

  private static checkStringNullOrEmpty(str: string) {
      if(typeof str !== 'string') {
          return true;
      }
      if(str.trim().length === 0) {
          return true;
      }
      return false;
  }
}

export default ConstrainedType