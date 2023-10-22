import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)'],
        archivo: ['var(--font-archivo)'],
        rubik: ['var(--font-rubik)'],
        outfit: ['var(--font-outfit)'],
        quicksand: ['var(--font-quicksand)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        purple: {
          1: '#6721FF',
          2: '#7363F3',
        },
      },
    },
  },
  plugins: [nextui()],
}
export default config
