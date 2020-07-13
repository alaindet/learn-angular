export const booleanish = (context: any, flags: string[]) => {
  for (const flag of flags) {

    // All missing keys are false
    if (!(flag in context)) {
      context[flag] = false;
    }

    // All strings, including '', are true. Boolean already work on their own
    if (typeof context[flag] === 'string') {
      context[flag] = context[flag] || context[flag] === '';
    }
  }
}
