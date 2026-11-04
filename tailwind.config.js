/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#FAF8F5',
          DEFAULT: '#FAF8F5',
          dark: '#12111A',
        },
        ink: {
          light: '#475569',
          DEFAULT: '#161424',
          dark: '#F1F5F9',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1C1A29',
        },
        brand: {
          yellow: '#FEF08A',
          indigo: '#17365D',
          rose: '#FF3D6E',
          emerald: '#10B981',
          sky: '#0284C7',
          violet: '#8B5CF6',
          lime: '#D2FF2E',
        },
      },
      boxShadow: {
        'scribely-sm': '2.5px 2.5px 0px #17365D',
        'scribely': '4px 4px 0px #17365D',
        'scribely-lg': '6px 6px 0px #17365D',
        'brutal-sm': '2.5px 2.5px 0px #161424',
        'brutal': '4px 4px 0px #161424',
        'brutal-lg': '6px 6px 0px #161424',
        'brutal-xl': '8px 8px 0px #161424',
        'brutal-hover': '2px 2px 0px #161424',
        'brutal-dark': '4px 4px 0px #F1F5F9',
        'brutal-dark-sm': '2.5px 2.5px 0px #F1F5F9',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        'brutal': '16px',
        'brutal-lg': '24px',
      },
      animation: {
        'float': 'float 3.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2.5s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 1.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
    },
  },
  plugins: [],
};
