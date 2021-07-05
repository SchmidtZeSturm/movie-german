import { Placeholder } from '~/Placeholder';
import { Translator } from "~/Translator";
import { CaseMatcher } from "~/CaseMatcher";

export class Good implements Translator {
  public static readonly REGEX = /(?<nicht>not\s)?(?<so>so\s)?(?<gut>good)/ig;

  constructor(private readonly placeholder: Placeholder, private readonly caseMatcher: CaseMatcher) {}

  public translate(text: string): string {
    return text.replaceAll(
      Good.REGEX,
      (text: string): string => {

        let replaced = this.replace(/good/ig, text, 'gut');
        replaced = this.replace(/not/ig, replaced, 'nicht');

      return this.placeholder.placehold(text, replaced);
    });
  }

  private replace(search: RegExp, text: string, replace: string): string {
    return text.replace(search, this.caseMatcher.match(text, replace));
  }
}
