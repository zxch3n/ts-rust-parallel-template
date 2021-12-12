import { defineConfig } from 'vite';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';
import react from '@vitejs/plugin-react';

import comlink from 'vite-plugin-comlink';
import worker, { pluginHelper } from 'vite-plugin-worker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crossOriginIsolation(),
    comlink({typeFile: 'comlink.d.ts'}),
    pluginHelper(),
    worker({}),
  ],
});
