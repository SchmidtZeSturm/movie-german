import  { describe, expect, test } from '@jest/globals';
import { Th } from "./Th";
import { SimplePlaceholder } from "~/Placeholder";
import { CaseMatcher } from "~/CaseMatcher";

describe('Under to Z', () => {
  const placeholder = new SimplePlaceholder();
  const caseMatcher = new CaseMatcher();
  test('it turns "th" to "z"', () => {
    const text = 'This should not be a problem, no matter what the weather throws at us, we have that';
    const translator = new Th(placeholder, caseMatcher);
    const translated = translator.translate(text);
    console.log(translated);
    expect(placeholder.replace(translated)).toBe(
      'Zis should not be a problem, no matter what ze weather throws at us, we have zat'
    );
  });
});
