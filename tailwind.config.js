/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A56DB',
        secondary: '#0D9488',
        accent: '#F59E0B',
        background: '#F8FAFC',
        text: '#1E293B',
        muted: '#64748B',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans Myanmar',
          'Padauk',
          'Myanmar Text',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.06)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
