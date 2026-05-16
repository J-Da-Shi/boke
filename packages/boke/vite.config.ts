import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    // 可选：显式告诉 Vite 这些扩展名要处理
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
  },
  // 关键：让 Vite 能正确解析 ui 包中的 JSX/TSX
  esbuild: {
    jsx: 'automatic', // 或由 @vitejs/plugin-react 处理，通常不需要额外配
  },
})
