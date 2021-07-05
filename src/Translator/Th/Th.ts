import { Placeholder } from '~/Placeholder';
import { Translator } from "~/Translator";
import { CaseMatcher } from "~/CaseMatcher";

export class Th implements Translator {
  public static readonly REGEX = /\bth(?=[aeiou])/ig;

  constructor(private readonly placeholder: Placeholder, private readonly caseMatcher: CaseMatcher) {}

  translate(text: string): string {
    return text.replace(
      Th.REGEX,
      (text: string): string => {
        return this.placeholder.placehold(text, this.caseMatcher.match(text, 'z'));
      });
  }
}
