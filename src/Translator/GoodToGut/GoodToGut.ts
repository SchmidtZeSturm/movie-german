import { Placeholder } from '~/Placeholder';

export class GoodToGut {
  public static readonly REGEX = /(?<nicht>not\s)?(?<so>so\s)?(?<gut>good)/ig;

  constructor(private readonly placeholder: Placeholder) {}

  public translate(text: string): string {
    return text.replaceAll(
      GoodToGut.REGEX,
      (text, _, __, index, str, foo, matches): string => {

        const replaced = text.replace('good', 'gut')
          .replace('not', 'nicht');

      return this.placeholder.placehold(text, replaced);
    });
  }
}
