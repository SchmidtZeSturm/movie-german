import  { describe, expect, test } from '@jest/globals';
import { MovieGerman } from "./MovieGerman";
import { SimplePlaceholder } from '~/Placeholder';
import { CaseMatcher } from "~/CaseMatcher";
import { And } from "~/Translator/And";
import { Good } from "~/Translator/Good";
import { For } from "~/Translator/For";
import { My } from '~/Translator/My';
import { No } from '~/Translator/No';
import { Qu } from "~/Translator/Qu/Qu";
import { Th } from "~/Translator/Th/Th";
import { Under } from '~/Translator/Under';
import { W } from "~/Translator/W/W";
import { Yes } from "~/Translator/Yes/Yes";

describe('Zis is ze main translator ja?', () => {
  const placeholder = new SimplePlaceholder();
  const caseMatcher = new CaseMatcher();
  test('It translates the text', () => {
    const movieGerman = new MovieGerman(
      placeholder,
      new And(placeholder, caseMatcher),
      new For(placeholder, caseMatcher),
      new Good(placeholder, caseMatcher),
      new My(placeholder, caseMatcher),
      new No(placeholder, caseMatcher),
      new Qu(placeholder, caseMatcher),
      new Th(placeholder, caseMatcher),
      new Under(placeholder, caseMatcher),
      new W(placeholder, caseMatcher),
      new Yes(placeholder, caseMatcher)
    );

    const original = 'No hand wringing on this, we must be good. When we write words who shall hear them and how shall they understand, yes?';

    expect(movieGerman.translateZis(original)).toBe(
      'Nein hand wringing on zis, ve must be gut. Vhen ve write vords who shall hear zem unt how shall zey unterstand, ja?'
    );
  });
});
