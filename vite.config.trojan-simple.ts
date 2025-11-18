import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3001,
    host: true,
  },
  build: {
    outDir: 'dist-trojan',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index-trojan.html')
      },
      external: [
        './src/pages/CaseStudyDetail.tsx',
        './src/pages/AIOrchestration.tsx',
        './src/pages/AuditExplorer.tsx',
        './src/pages/CompliancePortal.tsx',
        './src/pages/DIDManager.tsx',
        './src/pages/Dashboard.tsx',
        './src/pages/EducatorsHub.tsx',
        './src/pages/EnhancedDashboard.tsx',
        './src/pages/Settings.tsx',
        './src/pages/TrustConsole.tsx'
      ]
    }
  },
  optimizeDeps: {
    include: ['@solana/web3.js', '@solana/spl-token']
  }
})