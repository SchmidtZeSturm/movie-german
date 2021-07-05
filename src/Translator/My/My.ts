import { Placeholder } from '~/Placeholder';
import { Translator } from "~/Translator";
import { CaseMatcher } from "~/CaseMatcher";

export class My implements Translator {

  public static readonly REGEX = /\bmy/ig;

  constructor(private readonly placeholder: Placeholder, private readonly caseMatcher: CaseMatcher) {}

  translate(text: string): string {
    return text.replaceAll(
      My.REGEX,
      (text: string): string => {
        const replaced = this.replace(/my/ig, text, 'mein');

        return this.placeholder.placehold(text, replaced);
      });
  }

  private replace(search: RegExp, text: string, replace: string): string {
    return text.replace(search, this.caseMatcher.match(text, replace));
  }
}
