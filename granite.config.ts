import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'iljin-calendar',
  brand: {
    displayName: '할머니집에 있는 그 달력',
    primaryColor: '#1a1a1a',
    // TODO: Vercel 첫 배포 후 실제 URL로 교체
    icon: 'https://raw.githubusercontent.com/yijun-wade/iljin-calendar/main/public/icon.png',
  },
  web: {
    host: 'localhost',
    port: 5174,
    commands: {
      dev: 'vite --host',
      build: 'vite build',
    },
  },
  permissions: [],
  outdir: 'dist',
});
