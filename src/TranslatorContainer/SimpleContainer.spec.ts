import  { describe, expect, test } from '@jest/globals';
import { SimplePlaceholder } from "~/Placeholder/SimplePlaceholder";
import { CaseMatcher } from "~/CaseMatcher";
import { SimpleContainer } from "./SimpleContainer";

describe('SimpleContainer tests', () => {
  const placeholder = new SimplePlaceholder();
  const caseMatcher = new CaseMatcher();

  test('It returns a lot of translators', () => {
    const container = new SimpleContainer(placeholder, caseMatcher);

    for (const trans of container.getTranslators()) {
      console.log(trans);
    }
  });
});
