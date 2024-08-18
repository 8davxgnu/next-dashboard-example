import type { Config } from 'tailwindcss';

const config: Config = {
  content: [ // content is an array that contains all files that TailwindCSS should scan for class names
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // ** means any directory or subdirectory; *.{js,ts, . . .} means any files that match with the specified extensions
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
