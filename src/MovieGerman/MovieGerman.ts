import { Translator } from "~/Translator";
import { Placeholder } from "~/Placeholder/types";

export class MovieGerman
{
  private readonly translators: Set<Translator>;

  constructor(private readonly placeholder: Placeholder, ...translators: Translator[]) {
    this.translators = new Set<Translator>();

    translators.forEach((translator) => {
      this.translators.add(translator);
    });
  }

  public translateZis(text: string): string {
    this.translators.forEach((translator) => {
      text = translator.translate(text);
    });

    return this.placeholder.replace(text);
  }
}
