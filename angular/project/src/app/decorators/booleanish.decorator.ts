export function Booleanish<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    booleanish(...flags: string[]) {
      for (const flag of flags) {

        // All missing keys are false
        if (!this.hasOwnProperty(flag)) {
          this[flag] = false;
        }

        // All strings, including '', are true. Boolean already work on their own
        if (typeof this[flag] === 'string') {
          this[flag] = this[flag] || this[flag] === '';
        }
      }
    }
  }
};
