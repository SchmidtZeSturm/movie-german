import  { describe, expect, test } from '@jest/globals';
import { CaseMatcher } from "./CaseMatcher";

describe('CaseMatcher tests', () => {
  const caseMatcher = new CaseMatcher();
  test('If the original is entirely lower case, it replaces it entirely with lower case', () => {
    const original = 'no';
    const replacement = 'NEIN';

    expect(caseMatcher.match(original, replacement)).toBe(replacement.toLowerCase());
  });

  test('If ze original is entirely upper case, it replaces it entirely vith upper case', () => {
    const original = 'NO';
    const replacement = 'nein';

    expect(caseMatcher.match(original, replacement)).toBe(replacement.toUpperCase());
  });

  test('If ze original starts vith a capital letter, it returns ze first letter capitalized', () => {
    const original = 'Good';
    const replacement = 'gut';

    expect(caseMatcher.match(original, replacement)).toBe('Gut');
  });

  test('It matches case if ze middle of ze vord is capitalized', () => {
    const original = 'NoOo';
    const replacement = 'nein';

    expect(caseMatcher.match(original, replacement)).toBe('NeIn');
  });
});
