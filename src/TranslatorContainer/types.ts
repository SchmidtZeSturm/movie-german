import Translator from "~/Translator";

export interface TranslatorContainer {
  getTranslators(): IterableIterator<Translator>;
}
