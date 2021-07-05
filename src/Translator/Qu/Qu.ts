import { Placeholder } from '~/Placeholder';
import { Translator } from "~/Translator";
import { CaseMatcher } from "~/CaseMatcher";

export class Qu implements Translator {
  public static readonly REGEX = /qu/ig;

  constructor(private readonly placeholder: Placeholder, private readonly caseMatcher: CaseMatcher) {}

  translate(text: string): string {
    return text.replace(
      Qu.REGEX,
      (text: string): string => {
        return this.placeholder.placehold(text, this.caseMatcher.match(text, 'qv'));
      });
  }
}
