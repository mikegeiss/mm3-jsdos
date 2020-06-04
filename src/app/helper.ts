export function asHex(input:number):string{
    const result = input.toString(16);
    return result.length === 2 ? result : `0${result}`;
}