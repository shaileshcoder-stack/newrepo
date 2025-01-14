export function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }

 export function greet(greeting: string, ...names: string[]): string {
    return `${greeting} ${names.join(', ')}`;
  }
  export function filterNumbers(...args: (string | number)[]): number[] {
    return args.filter((arg): arg is number => typeof arg === 'number');
  }