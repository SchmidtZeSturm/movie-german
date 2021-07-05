import  { describe, expect, test } from '@jest/globals';

import { And } from "./And";
import { SimplePlaceholder } from '~/Placeholder';
import { CaseMatcher } from "~/CaseMatcher";

describe('Translate And to Unt', () => {
  const placeholder = new SimplePlaceholder();
  const caseMatcher = new CaseMatcher();
  test('it turns "and" to "unt"', () => {
    const text = 'And on and on at Andover';
    const translator = new And(placeholder, caseMatcher);
    const translated = translator.translate(text);
    expect(placeholder.replace(translated)).toBe('Unt on unt on at Andover');
  });
});
