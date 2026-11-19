/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#07080a',
        surface: {
          DEFAULT: '#0d0d0d',
          elevated: '#101111',
          card: '#121212',
        },
        hairline: {
          DEFAULT: '#242728',
          soft: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.16)',
        },
        ink: '#f4f4f6',
        body: '#cdcdcd',
        mute: '#8a8f98',
        ash: '#6a6b6c',
        accent: {
          green: '#59d499',
          'green-soft': 'rgba(89, 212, 153, 0.12)',
          red: '#ff6161',
          'red-soft': 'rgba(255, 97, 97, 0.12)',
          blue: '#57c1ff',
          'blue-soft': 'rgba(87, 193, 255, 0.12)',
          yellow: '#ffc533',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace'],
      },
      transitionTimingFunction: {
        'emil-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
      }
    },
  },
  plugins: [],
}
