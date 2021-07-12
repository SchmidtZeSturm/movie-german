import { TranslatorContainer } from "~/TranslatorContainer/types";
import { Translator } from "~/Translator";
import { Placeholder } from "~/Placeholder";
import { CaseMatcher } from "~/CaseMatcher";
import { Qu } from "~/Translator/Qu/Qu";
import { Th } from "~/Translator/Th/Th";
import { W } from "~/Translator/W/W";
import { Yes } from "~/Translator/Yes/Yes";
import { And } from "~/Translator/And/And";
import { For } from "~/Translator/For/For";
import { Good } from "~/Translator/Good/Good";
import { My } from "~/Translator/My/My";
import { No } from "~/Translator/No/No";
import { Under } from "~/Translator/Under/Under";

export class SimpleContainer implements TranslatorContainer {

  constructor(private readonly placeholder: Placeholder, private readonly caseMatcher: CaseMatcher) {}

  *getTranslators(): IterableIterator<Translator> {
    for (const trans of Array.from([And, For, Good, My, No, Qu, Th, Under, W, Yes])) {
      yield new trans(this.placeholder, this.caseMatcher);
    }
  }

}
