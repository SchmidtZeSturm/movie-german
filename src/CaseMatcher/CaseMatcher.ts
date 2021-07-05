enum OriginalCase {
  IS_UPPER,
  IS_LOWER,
  IS_MIXED
}

export class CaseMatcher {
  match(match: string, replace: string): string {
    const originalCase = CaseMatcher.detectCase(match);

    switch(originalCase) {
      case OriginalCase.IS_UPPER:
        return replace.toUpperCase();

      case OriginalCase.IS_LOWER:
        return replace.toLowerCase();

      default:
        return CaseMatcher.replaceMixed(match, replace);
    }

  };

  private static replaceMixed(original: string, replacement: string): string {
    // Simplest use case is upper case first letter
    if (CaseMatcher.ucFirst(original.toLowerCase()) === original) {
      return CaseMatcher.ucFirst(replacement);
    }

    // OK it's not going to be that easy...
    let ret = '';
    for (let [i, char] of Array.from(replacement).entries()) {
      char = char.toLowerCase();
      if (i < original.length) {
        char = (CaseMatcher.isUpper(original.charAt(i))) ? char.toUpperCase() : char;
      }
      ret = ret.concat(char);
    }

    return ret;
  }

  private static detectCase(original: string): OriginalCase {
    if (original.toUpperCase() === original)
      return OriginalCase.IS_UPPER;

    if (original.toLowerCase() === original)
      return OriginalCase.IS_LOWER;

    return OriginalCase.IS_MIXED;
  }

  private static isUpper(char: string): boolean{
    return (char !== '' && char.toUpperCase() === char);
  };

  private static ucFirst(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
