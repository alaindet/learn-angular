export function isPrintableCharacter(char: string): boolean {
  return char.length === 1 && !!char.match(/\S/);
}
