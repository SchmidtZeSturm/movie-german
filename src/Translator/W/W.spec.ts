import  { describe, expect, test } from '@jest/globals';
import { W } from "./W";
import { SimplePlaceholder } from "~/Placeholder";
import { CaseMatcher } from "~/CaseMatcher";

describe('W to V', () => {
  const placeholder = new SimplePlaceholder();
  const caseMatcher = new CaseMatcher();
  test('it turns "w" to "v"', () => {
    const text = 'What we are trying to do is not wring our hands, whoever asks us to, and whatever the weather';
    const translator = new W(placeholder, caseMatcher);
    const translated = translator.translate(text);
    expect(placeholder.replace(translated)).toBe(
      'Vhat ve are trying to do is not wring our hands, whoever asks us to, and vhatever the veather'
    );
  });
});
