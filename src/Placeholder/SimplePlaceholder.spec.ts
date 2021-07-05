import  { describe, expect, test } from '@jest/globals';
import { SimplePlaceholder } from './SimplePlaceholder';
import { sprintf } from 'sprintf';
import { v5 } from 'uuid';

describe('SimplePlaceholder tests', () => {
  test('It returns a placeholder for the text', () => {
    const placeholder = new SimplePlaceholder();

    const textToReplace = 'some text';
    const uuidv5 = v5(textToReplace, SimplePlaceholder.OID);

    expect(placeholder.placehold(textToReplace, 'x')).toBe(sprintf('[[mg=%s]]', uuidv5));
  });
  test('It placeholds multiple text', () => {
    const placeholder = new SimplePlaceholder();

    const firstText = 'some text';
    const secondText = 'some other text';

    expect(placeholder.placehold(firstText, 'x'))
      .toBe(sprintf('[[mg=%s]]', v5(firstText, SimplePlaceholder.OID)));

    expect(placeholder.placehold(secondText, 'y'))
      .toBe(sprintf('[[mg=%s]]', v5(secondText, SimplePlaceholder.OID)));
  });

  test('It replaces all placeholders with the supplied function', () => {
    const placeholder = new SimplePlaceholder();
    const originalText = 'This is a test string. As you can see, it is quite long';

    const placeheldText = originalText.replaceAll(/this/ig, (text: string): string => {
      return placeholder.placehold(text, 'Zis');
    }).replaceAll(/is/ig, (text: string): string => {
      return placeholder.placehold(text, 'foo');
    }).replaceAll(/qu/ig, (text: string): string => {
      return placeholder.placehold(text, 'qv');
    });
    expect(placeholder.replace(placeheldText)).toBe(
      'Zis foo a test string. As you can see, it foo qvite long'
    );
  });

});
