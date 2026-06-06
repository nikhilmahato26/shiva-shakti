/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cosmic: {
          DEFAULT: '#FDE68A',
          50: '#5C2D0A',
          100: '#7C4010',
          200: '#A06020',
          300: '#C08030',
          400: '#D0A040',
          500: '#DDBA50',
          600: '#ECD070',
          700: '#FAC12E',
          800: '#FCD56C',
          900: '#FDE68A',
          950: '#3D1A00',
        },
        gold: {
          DEFAULT: '#7A5500',
          50: '#fbf8ed',
          100: '#f6efcf',
          200: '#eeda9b',
          300: '#e6c862',
          400: '#dfb748',
          500: '#D4AF37',
          600: '#b08e29',
          700: '#8a6c23',
          800: '#735823',
          900: '#624a22',
          950: '#392910',
        },
        ivory: {
          DEFAULT: '#2D1500',
          dark: '#1A0800',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
        sanskrit: ['"Marcellus"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #A67C13 0%, #7A5500 45%, #4A3000 100%)',
        'gold-shine': 'linear-gradient(110deg, #3D2000 0%, #7A5500 25%, #A67C13 50%, #7A5500 75%, #3D2000 100%)',
        'cosmic-radial': 'radial-gradient(ellipse at top, #FCD56C 0%, #FDE68A 55%, #FEF3C7 100%)',
        'cosmic-veil': 'linear-gradient(180deg, rgba(253,230,138,0) 0%, rgba(253,230,138,0.88) 70%, #FDE68A 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(212,175,55,0.45)',
        'glow-lg': '0 0 80px -10px rgba(212,175,55,0.4)',
        'glass': '0 8px 32px 0 rgba(61,26,0,0.12)',
        'gold-inset': 'inset 0 1px 0 0 rgba(244,217,139,0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(8deg)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'spin-slow': 'spin-slow 60s linear infinite',
        'spin-slower': 'spin-slow 120s linear infinite',
        'pulse-glow': 'pulse-glow 5s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
