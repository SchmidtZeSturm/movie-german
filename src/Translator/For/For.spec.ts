import  { describe, expect, test } from '@jest/globals';

import { For } from "./For";
import { SimplePlaceholder } from '~/Placeholder';
import { CaseMatcher } from "~/CaseMatcher";

describe('Translate For to Für', () => {
  const placeholder = new SimplePlaceholder();
  const caseMatcher = new CaseMatcher();
  test('it turns "for" to "für"', () => {
    const text = 'Forever means for ever.';
    const translator = new For(placeholder, caseMatcher);
    const translated = translator.translate(text);

    expect(placeholder.replace(translated)).toBe('Fürever means für ever.');
  });
});
