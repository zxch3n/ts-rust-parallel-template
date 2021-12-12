
      declare module "comlink:./test" {
        const mod: () => import("comlink").Remote<typeof import("./src/test")>
        export default mod
      }