import  { describe, expect, test } from '@jest/globals';

import { Good } from "./Good";
import { SimplePlaceholder } from '~/Placeholder';
import { CaseMatcher } from "~/CaseMatcher";

describe('Translate Good to Good', () => {
    const placeholder = new SimplePlaceholder();
    const caseMatcher = new CaseMatcher();
    test('it turns "good" to "gut"', () => {
      const text = 'It is not good';
      const translator = new Good(placeholder, caseMatcher);
      const translated = translator.translate(text);
      console.log(translated);
      expect(placeholder.replace(translated)).toBe('It is nicht gut');
    });
});
