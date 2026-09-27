import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F7F4EC',
          dim: '#EFEAE0',
        },
        ink: {
          DEFAULT: '#16171B',
          soft: '#2C2C30',
        },
        navy: {
          DEFAULT: '#101C2E',
          deep: '#0B1420',
        },
        mist: {
          50: '#F5F6F7',
          100: '#E9EBED',
          200: '#D8DBDF',
          300: '#B9BEC5',
          400: '#8B92A0',
          500: '#6B7280',
          600: '#4E5560',
          700: '#383D45',
          800: '#25282D',
          900: '#18191C',
        },
        accent: {
          DEFAULT: '#2F5D8A',
          soft: '#E7EEF5',
          deep: '#1C3C5C',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '3px',
        md: '4px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
