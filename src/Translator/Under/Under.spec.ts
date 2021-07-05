import  { describe, expect, test } from '@jest/globals';
import { Under } from "./Under";
import { SimplePlaceholder } from "~/Placeholder";
import { CaseMatcher } from "~/CaseMatcher";

describe('Under to Unter', () => {
  const placeholder = new SimplePlaceholder();
  const caseMatcher = new CaseMatcher();
  test('it turns "under" to "unter"', () => {
    const text = 'When I go under the water, it is like I am going undercover';
    const translator = new Under(placeholder, caseMatcher);
    const translated = translator.translate(text);
    expect(placeholder.replace(translated)).toBe(
      'When I go unter the water, it is like I am going untercover'
    );
  });
});
