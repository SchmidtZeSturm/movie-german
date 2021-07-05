import { Translator } from "~/Translator/Translator";
import { Placeholder } from "~/Placeholder";
import { CaseMatcher } from "~/CaseMatcher";

export class And implements Translator {
  public static readonly REGEX = /\band\b/ig;

  constructor(private readonly placeholder: Placeholder, private readonly caseMatcher: CaseMatcher) {}

  public translate(text: string): string {
    return text.replaceAll(
      And.REGEX,
      (text: string): string => {

        return this.placeholder.placehold(text, this.caseMatcher.match(text, 'unt'));
      });
  }
}
