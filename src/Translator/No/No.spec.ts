import  { describe, expect, test } from '@jest/globals';
import { No } from "./No";
import { SimplePlaceholder } from "~/Placeholder";
import { CaseMatcher } from "~/CaseMatcher";

describe('No to Ja', () => {
  const placeholder = new SimplePlaceholder();
  const caseMatcher = new CaseMatcher();
  test('it turns "no" to "nein"', () => {
    const text = 'No, I am sure';
    const translator = new No(placeholder, caseMatcher);
    const translated = translator.translate(text);
    console.log(translated);
    expect(placeholder.replace(translated)).toBe('Nein, I am sure');
  });
});
