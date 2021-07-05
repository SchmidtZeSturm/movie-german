import { Placeholder } from '~/Placeholder';
import { Translator } from "~/Translator";
import { CaseMatcher } from "~/CaseMatcher";

export class No implements Translator {
  public static readonly REGEX = /\bno\b/ig;

  constructor(private readonly placeholder: Placeholder, private readonly caseMatcher: CaseMatcher) {}

  translate(text: string): string {
    return text.replace(
      No.REGEX,
      (text: string): string => {
        const replaced = this.replace(/no/ig, text, 'nein');

        return this.placeholder.placehold(text, replaced);
      });
  }

  private replace(search: RegExp, text: string, replace: string): string {
    return text.replace(search, this.caseMatcher.match(text, replace));
  }
}
