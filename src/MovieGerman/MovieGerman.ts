import { Placeholder } from "~/Placeholder/types";
import { TranslatorContainer } from "~/TranslatorContainer/types";

export class MovieGerman {
  constructor(private readonly placeholder: Placeholder, private readonly translators: TranslatorContainer) {}

  public translateZis(text: string): string {
    for (const translator of this.translators.getTranslators()) {
      text = translator.translate(text);
    }

    return this.placeholder.replace(text);
  }
}
