const isDevelopment = import.meta.env.DEV;

export const API_URL = isDevelopment 
  ? 'http://localhost:3000'
  : 'https://react-mailer-vikoshiya.vercel.app';

export const config = {
  apiUrl: API_URL,
}; 