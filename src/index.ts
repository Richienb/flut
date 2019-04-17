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

export class Flut {
    int(min?: number, max?: number, bias: boolean = false) {
        if (max === void 0) { max = min; }
        if (min === void 0) { min = 0; }
        if (bias) return Math.floor(Math.abs(Math.random() - Math.random()) * (1 + max - min) + min)
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    dec(min?: number, max?: number, places: number = 15, bias: boolean = false) {
        if (max === void 0) { max = min; }
        if (min === void 0) { min = 0; }
        if (bias) return Math.abs(Math.random() - Math.random()) * (1 + max - min) + min
        return ((Math.random() * (max - min)) + min).toFixed(places);
    }

    item(arr: Array<any> = []) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    bool() {
        return Math.random() >= 0.5;
    }

    key(obj: Object = {}) {
        const keys = Object.keys(obj);
        return keys[Math.floor(Math.random() * keys.length)];
    }

    prop(obj: Object = {}) {
        const keys = Object.keys(obj);
        return obj[keys[Math.floor(Math.random() * keys.length)]];
    }
}
