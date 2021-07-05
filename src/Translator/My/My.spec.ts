import  { describe, expect, test } from '@jest/globals';
import { My } from "./My";
import { SimplePlaceholder } from "~/Placeholder";
import { CaseMatcher } from "~/CaseMatcher";

describe('My to Mein', () => {
  const placeholder = new SimplePlaceholder();
  const caseMatcher = new CaseMatcher();
  test('it turns "my" to "mein"', () => {
    const text = 'Myself, I am sure. But for my friends, I know not';
    const translator = new My(placeholder, caseMatcher);
    const translated = translator.translate(text);
    console.log(translated);
    expect(placeholder.replace(translated)).toBe('Meinself, I am sure. But for mein friends, I know not');
  });
});
