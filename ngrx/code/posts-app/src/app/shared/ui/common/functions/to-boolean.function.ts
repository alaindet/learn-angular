export const toBoolean = (value: boolean | string | undefined): boolean => {
  const type = typeof value;

  if (type === 'boolean') {
    return value as boolean;
  }

  if (type === 'string') {
    return !!value || value === '';
  }

  return false;
};
