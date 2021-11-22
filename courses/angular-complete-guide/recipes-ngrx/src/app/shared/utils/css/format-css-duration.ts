export const formatCssDuration = (durationInMilliseconds: number): string => {
  return (durationInMilliseconds / 1000).toFixed(2) + 's';
};
