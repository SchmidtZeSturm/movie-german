import  { describe, expect, test } from '@jest/globals';
import { Yes } from "./Yes";
import { SimplePlaceholder } from "~/Placeholder";
import { CaseMatcher } from "~/CaseMatcher";

describe('No to Ja', () => {
  const placeholder = new SimplePlaceholder();
  const caseMatcher = new CaseMatcher();
  test('it turns "yes" to "ja"', () => {
    const text = 'Yes, I am sure';
    const translator = new Yes(placeholder, caseMatcher);
    const translated = translator.translate(text);
    console.log(translated);
    expect(placeholder.replace(translated)).toBe('Ja, I am sure');
  });
});
