export const range = (a: number, b: number): number[] => {
  const range = [];
  const [first, last] = (a < b) ? [a, b] : [b, a];
  for (let i = first; i <= last; i++) {
    range.push(i);
  }
  return range;
};
