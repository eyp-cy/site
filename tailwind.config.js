import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '495px',
      sm: '640px',
      md: '768px',
      'md-lg': '900px',
      lg: '1024px',
      'lg-xl': '1150px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1700px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1536px' },
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary: {
          600: '#3654FF',
          700: '#2B43CC',
          800: '#253AB0',
          900: '#1F3091',
        },
        secondary: {
          700: '#66D4FF',
          800: '#33C5FF',
          900: '#00B7FF',
        },
        action: '#3E8AFF',
        accent: {
          700: '#FFE876',
          800: '#FFDE4D',
          900: '#FFD200',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'base-white': '#f9f9f9',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      fontFamily: { sans: ['var(--font-source-sans-3)'] },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
        masonry: 'masonry',
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
      },
      gridRowStart: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-secondary': 'linear-gradient(transparent calc(100% - 10px), #33C5FF 5px);',
        'gradient-orange': 'linear-gradient(transparent calc(100% - 10px), orange 5px);',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.--orange-500': {
          outline: '2px solid',
          outlineColor: '#f97316',
        },
        '.--orange-600': {
          outline: '2px solid',
          outlineColor: '#ea580c',
        },
        '.--amber-500': {
          outline: '2px solid',
          outlineColor: '#f59e0b',
        },
        '.--amber-600': {
          outline: '2px solid',
          outlineColor: '#d97706',
        },
        '.--lime-500': {
          outline: '2px solid',
          outlineColor: '#84cc16',
        },
        '.--lime-600': {
          outline: '2px solid',
          outlineColor: '#65a30d',
        },
        '.--emerald-500': {
          outline: '2px solid',
          outlineColor: '#10b981',
        },
        '.--emerald-600': {
          outline: '2px solid',
          outlineColor: '#059669',
        },
        '.--sky-500': {
          outline: '2px solid',
          outlineColor: '#0ea5e9',
        },
        '.--sky-600': {
          outline: '2px solid',
          outlineColor: '#0284c7',
        },
        '.--blue-500': {
          outline: '2px solid',
          outlineColor: '#3b82f6',
        },
        '.--blue-600': {
          outline: '2px solid',
          outlineColor: '#2563eb',
        },
        '.--purple-500': {
          outline: '2px solid',
          outlineColor: '#a855f7',
        },
        '.--purple-600': {
          outline: '2px solid',
          outlineColor: '#9333ea',
        },
        '.--pink-500': {
          outline: '2px solid',
          outlineColor: '#ec4899',
        },
        '.--pink-600': {
          outline: '2px solid',
          outlineColor: '#db2777',
        },
      })
    }),
  ],
}
