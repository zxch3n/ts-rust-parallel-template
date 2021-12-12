import initWasm, { initThreadPool, sum_of_squares } from '../wasm_dist/wasm';

export async function init() {
  await initWasm();
  await initThreadPool(2);
}

export function calc() {
  return sum_of_squares(new Int32Array([2, 3]));
}
