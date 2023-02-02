import { randomInteger } from "../numbers";

const ALPHABET = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
const ALPHABET_COUNT = ALPHABET.length;

export function randomHash(len: number): string {
  let hash: string[] = [];

  for (let i = 0; i < len; i++) {
    const j = randomInteger(0, ALPHABET_COUNT - 1);
    hash.push(ALPHABET[j]);
  }

  return hash.join('');
}
