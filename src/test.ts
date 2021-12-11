import init, {initThreadPool, sum_of_squares} from '../wasm/pkg/wasm.js'

await init();
await initThreadPool(2);
console.log(sum_of_squares(new Int32Array([2, 3])));