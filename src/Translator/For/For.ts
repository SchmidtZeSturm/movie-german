import { Translator } from "~/Translator/types";
import { Placeholder } from "~/Placeholder";
import { CaseMatcher } from "~/CaseMatcher";

export class For implements Translator {
  public static readonly REGEX = /\bfor/ig;

  constructor(private readonly placeholder: Placeholder, private readonly caseMatcher: CaseMatcher) {}

  public translate(text: string): string {
    return text.replaceAll(
      For.REGEX,
      (text: string): string => {

        let replaced = this.replace(/for/ig, text, 'für');

        return this.placeholder.placehold(text, replaced);
      });
  }

  private replace(search: RegExp, text: string, replace: string): string {
    return text.replace(search, this.caseMatcher.match(text, replace));
  }

}
