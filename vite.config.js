import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/',  // ✅ Ensure this is correct
});
