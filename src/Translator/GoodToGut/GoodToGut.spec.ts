import  { describe, expect, test } from '@jest/globals';

import { GoodToGut } from "./GoodToGut";
import { SimplePlaceholder } from '~/Placeholder';

describe('Translate Good to Gut', () => {
    const placeholder = new SimplePlaceholder();
    test('it turns "good" to "gut"', () => {
      const text = 'It is not good';
      const translator = new GoodToGut(placeholder);
      const translated = translator.translate(text);
      console.log(translated);
      expect(placeholder.replace(translated)).toBe('It is nicht gut');
    });
});
