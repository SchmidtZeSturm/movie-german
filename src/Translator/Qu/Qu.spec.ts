import  { describe, expect, test } from '@jest/globals';
import { Qu } from "./Qu";
import { SimplePlaceholder } from "~/Placeholder";
import { CaseMatcher } from "~/CaseMatcher";

describe('W to Qv', () => {
  const placeholder = new SimplePlaceholder();
  const caseMatcher = new CaseMatcher();
  test('it turns "qu" to "qv"', () => {
    const text = 'Queen, do you require a quorum or some equivalent?';
    const translator = new Qu(placeholder, caseMatcher);
    const translated = translator.translate(text);
    console.log(translated);
    expect(placeholder.replace(translated)).toBe('Qveen, do you reqvire a qvorum or some eqvivalent?');
  });
});
