import { Placeholder } from '~/Placeholder';
import { Translator } from "~/Translator";
import { CaseMatcher } from "~/CaseMatcher";

export class Under implements Translator {
  public static readonly REGEX = /\bunder/ig;

  constructor(private readonly placeholder: Placeholder, private readonly caseMatcher: CaseMatcher) {}

  translate(text: string): string {
    return text.replace(
      Under.REGEX,
      (text: string): string => {
        return this.placeholder.placehold(text, this.caseMatcher.match(text, 'unter'));
      });
  }
}
