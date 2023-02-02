export function randomInteger(a: number, b: number): number {
  return a + Math.floor(Math.random() * (b - a + 1));
}
