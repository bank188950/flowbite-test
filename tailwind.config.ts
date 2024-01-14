import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/lib/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'light-green': 'var(--light-green)',
        green: 'var(--green)',
        'dark-green': 'var(--dark-green)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
