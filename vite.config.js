import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    server: {
        cors: {
            origin: ['http://localhost:8080', 'https://www.estopdrivingschool.com'],
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            credentials: true
        }
    }
});
