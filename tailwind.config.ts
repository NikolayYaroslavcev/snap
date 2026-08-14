import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#F5F5F6',
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#000000',
          secondary: 'rgba(0,0,0,0.6)',
          muted: '#5A5B62',
          faint: 'rgba(0,0,0,0.4)',
          inverse: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#141414',
          deep: '#0D0D0D',
        },
      },
      borderRadius: {
        btn: '12px',
        card: '20px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1280px',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(157deg, #FFFFFF 17.71%, #FFCDB3 43.16%, #FFA4B6 58.2%, #FFB2E9 73.32%, #D4D6FF 90.8%, #FFFFFF 103.16%)',
        'brand-gradient-vivid': 'linear-gradient(90deg, #FF6D3C 0%, #FF6BA7 46%, #BB6DFF 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
