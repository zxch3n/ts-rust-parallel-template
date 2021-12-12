
      declare module "comlink:./test" {
        const mod: () => import("comlink").Remote<typeof import("./src/test")>
        export default mod
      }

      declare module "comlink:./wasm" {
        const mod: () => import("comlink").Remote<typeof import("./src/wasm")>
        export default mod
      }

      declare module "comlink:../wasm_dist/wasm" {
        const mod: () => import("comlink").Remote<typeof import("./wasm_dist/wasm.js")>
        export default mod
      }

      declare module "comlink:./wasmEntry" {
        const mod: () => import("comlink").Remote<typeof import("./src/wasmEntry")>
        export default mod
      }