import { Placeholder } from './types';
import { sprintf } from 'sprintf';
import { v5 } from 'uuid';

type Uuid = string;

export const MG_PLACEHOLDER_PATTERN = /\[{2}mg=([0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})\]{2}/gm;
export const OID_MOVIE_GERMAN_TEXT = '29cbb0bb-2faa-5567-be1a-95b314c39574';

export class SimplePlaceholder implements Placeholder {
    static readonly OID = OID_MOVIE_GERMAN_TEXT;

    private readonly replaceableText: Map<Uuid, string>;

    constructor() {
        this.replaceableText = new Map<Uuid, string>();
    }

    placehold(text: string, replacer: string): string {
        const hash = v5(text, OID_MOVIE_GERMAN_TEXT);
        this.replaceableText.set(
            hash,
            replacer
        );

        return sprintf('[[mg=%s]]', hash);
    }

    replace(text: string): string {
        return text.replaceAll(MG_PLACEHOLDER_PATTERN, (placeholder: string, uuid: Uuid): string => {
            return this.replaceableText.get(uuid) as string;
        });
    }
}
