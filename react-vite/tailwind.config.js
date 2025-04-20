/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7F9FBD',
        accent: '#F5C1C1',
        secondary: '#DCE6F2',
        'bg-base': '#F9FAFB',
        success: '#A1D6B0',
        warning: '#FDD9A0',
        error: '#F6B2B2',
        'text-primary': '#1F2937',
        'text-secondary': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        romantic: ['"Great Vibes"', 'cursive'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
