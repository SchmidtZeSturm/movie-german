
export interface Placeholder {
    placehold(original: string, replacement: string): string;

    replace(text: string): string;
}
