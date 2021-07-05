import { Placeholder } from '~/Placeholder';
import { Translator } from "~/Translator";
import { CaseMatcher } from "~/CaseMatcher";

export class Yes implements Translator {
  public static readonly REGEX = /\b(yes\b)/ig;

  constructor(private readonly placeholder: Placeholder, private readonly caseMatcher: CaseMatcher) {}

  translate(text: string): string {
    return text.replace(
      Yes.REGEX,
      (text: string): string => {
        const replaced = this.replace(/yes/ig, text, 'ja');

        return this.placeholder.placehold(text, replaced);
      });
  }

  private replace(search: RegExp, text: string, replace: string): string {
    return text.replace(search, this.caseMatcher.match(text, replace));
  }
}
