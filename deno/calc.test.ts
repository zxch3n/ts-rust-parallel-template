import { expect } from './utils.ts';
import { sum_of_squares, default as init, initThreadPool } from '../wasm_dist/wasm.js';

await init();
await initThreadPool(1);
Deno.test({
  name: 'add',
  fn: () => {
    expect(1 + 1).toBe(2);
  },
});

Deno.test({
  name: 'calc',
  fn: async () => {
    expect(sum_of_squares(new Int32Array([1, 2, 3]))).toBe(14);
    expect(sum_of_squares(new Int32Array([3]))).toBe(9);
  },
});
