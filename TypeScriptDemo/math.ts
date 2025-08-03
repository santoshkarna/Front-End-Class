export const PI = 3.14;

export function sum(a: number, b: number): number {
    return a + b;
}

export class Calculator {
    multiply(a: number, b: number): number {
        return a * b;
    }
}

export default function log(message: string){
    console.log("LOG: ", message);
}