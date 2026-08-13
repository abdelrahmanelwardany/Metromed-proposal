/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#77B72A',
          'green-dark': '#5C9420',
          'green-light': '#A4D86A',
          blue: '#0082C2',
          'blue-dark': '#006593',
          'blue-light': '#4FB3E0',
        },
        ink: {
          950: '#070A0F',
          900: '#0B1118',
          850: '#0F1620',
          800: '#141D2A',
          700: '#1C2735',
          600: '#283443',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(0, 130, 194, 0.45)',
        'glow-green': '0 0 40px -10px rgba(119, 183, 42, 0.45)',
        card: '0 20px 60px -20px rgba(0,0,0,0.5)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        floaty2: {
          '0%,100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) translateX(-8px) rotate(-4deg)' },
        },
        meshshift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(3%, -3%) scale(1.08)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        floaty2: 'floaty2 9s ease-in-out infinite',
        meshshift: 'meshshift 14s ease-in-out infinite',
        'spin-slow': 'spinSlow 28s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
