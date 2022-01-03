import initWasm, {sum_of_squares, initThreadPool} from '../wasm_dist/wasm';
import instance from 'comlink:./worker2'

const {run} = instance();

export async function init() {
  await initWasm();
  await initThreadPool(2);
}

export async function calc() {
  return sum_of_squares(new Int32Array([2, 3])) + await run();
}
