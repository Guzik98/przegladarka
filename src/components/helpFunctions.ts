export const randomNumber = (): number => {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const sortArray = (a: number, b: number): number => {
    return a - b;
}
