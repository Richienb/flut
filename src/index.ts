/**
 * @license
 *
 * MIT License
 *
 * Copyright (c) 2019 Richie Bendall
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * A random number generator.
 * @class
 */
export class Flut {
    /**
     * Generate a random integer.
     * @method
     * @param {number} [min=0] - The minimum number.
     * @param {number} [max=min] - The maximum number.
     * @param {boolean} [bias=false] - An optional, slot-machine style bias towards the minimum number.
     * @return {number} A number between min and max.
    */
    public int(min: number = 0, max: number = min, bias: boolean = false): number {
        if (bias) return Math.floor(Math.abs(Math.random() - Math.random()) * (1 + max - min) + min);
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    /**
     * Generate a random decimal.
     * @method
     * @param {number} [min=0] - The minimum number.
     * @param {number} [max=min] - The maximum number.
     * @param {boolean} [bias=false] - An optional, slot-machine style bias towards the minimum number.
     * @return {number} A number between min and max.
    */
    public dec(min: number = 0, max: number = min, bias: boolean = false): number {
        if (bias) return Math.abs(Math.random() - Math.random()) * (1 + max - min) + min;
        return (Math.random() * (max - min)) + min;
    }

    /**
     * Get a random item in an array.
     * @method
     * @param {Array<any>} arr - The array to use.
     * @return {any} A random item in arr.
    */
    public item(arr: Array<any>): any {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    /**
     * Get a random boolean.
     * @method
     * @return {boolean} Either False or True.
      */
    public bool(): boolean {
        return Math.random() >= 0.5;
    }
}
