module modA {
    export class clsA {

        n: number;

        constructor(n: number)
        {
            this.n = n;
        }

        times(x: number): number
        {
            return this.n * x;
        }
    }
}