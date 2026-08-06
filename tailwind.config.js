/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a1a1a',
        paper: '#f2efe6',
        newsprint: '#e6e0d2',
        rule: '#1a1a1a',
        stamp: '#8b1e1e',
        faded: '#5a554a',
        navy: '#0B1F3A',
        teal: '#0D9488',
        signal: '#F59E0B',
        cloud: '#f2efe6',
        slate: '#5a554a',
        line: '#1a1a1a',
        primary: '#1a1a1a',
        secondary: '#5a554a',
        accent: '#8b1e1e',
        background: '#f2efe6',
        text: '#1a1a1a',
        muted: '#5a554a',
      },
      fontFamily: {
        sans: [
          'Noto Sans Myanmar',
          'Padauk',
          'Myanmar Text',
          'Source Serif 4',
          'Georgia',
          'serif',
        ],
        display: [
          'Noto Serif Myanmar',
          'Source Serif 4',
          'Padauk',
          'Georgia',
          'serif',
        ],
      },
    },
  },
  plugins: [],
}
