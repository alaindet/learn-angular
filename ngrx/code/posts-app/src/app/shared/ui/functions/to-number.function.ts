export const toNumber = (value: number | string | undefined): number => {

  const type = typeof value;

  if (type === 'number') {
    return value as number;
  }

  if (type === 'string') {
    const parsed = parseInt('' + value, 10);
    if (!isNaN(parsed)) {
      return parsed;
    }
  }

  return 0;
};
