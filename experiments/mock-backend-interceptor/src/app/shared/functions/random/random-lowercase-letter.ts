import { getRandomInt } from './random-int';

export function getRandomLowerCaseLetters(len = 3): string {

  if (len < 1 || len > 100) {
    return '';
  }
  
  const letters: string[] = [];

  for (let i = 0; i < len; i++) {
    letters.push(getRandomLowerCaseLetter());
  }

  return letters.join('');
}

export function getRandomLowerCaseLetter(): string {
  const [a, z] = [97, 122];
  return String.fromCharCode(getRandomInt(a, z));
}
