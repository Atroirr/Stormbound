import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img-bg-wallpaper' : "url('../assets/stormboundWallpaper.png')"
    },
    extend: {
      'text-font-white' : '#EBEFEE',
      'neutral-grey' : '#848C92',

      'sf-bg-green' : '#344034',
      'sf-primary-green' : '#5B9E94',
      'sf-secondary-green' : '#1F4942',

      'wp-bg-blue' : '#273243',
      'wp-primary-blue' : '#4C5F83',
      'wp-secondary-blue' : '#4279EA',

      'se-bg-browm' : '#4A3C23',
      'se-primary-browm' : '#6A5037',
      'se-secondary-browm' : '#9F7D5D',
      
      'ic-bg-red' : '#523531',
      'ic-primary-red' : '#8C4A4A',
      'ic-secondary-red' : '#BD413A',

      'opacity-grey' : 'rgb(100, 80, 57, 0.1)'
      
    },
  },
  plugins: [],
};
