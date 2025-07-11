import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 設定 base URL 用於 GitHub Pages 部署
  // 如果部署到自定義域名，可以設為 '/'
  base: process.env.NODE_ENV === 'production' ? '/BehaviorMonitor/' : '/',
  build: {
    // 優化建構設定
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        // 分割程式碼以優化載入速度
        manualChunks: {
          vendor: ['react', 'react-dom'],
          antd: ['antd'],
          charts: ['@ant-design/charts'],
          firebase: ['firebase/app', 'firebase/firestore', 'firebase/analytics']
        }
      }
    }
  },
  server: {
    // 開發服務器設定
    port: 5173,
    open: true
  }
})
