/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#121212',
        'bg-tertiary': '#1A1A1A',
        'accent-purple': '#8B5CF6',
        'accent-gold': '#D4AF37',
        'accent-purple-dark': '#7C3AED',
        'accent-gold-dark': '#B8941F',
        'text-primary': '#F5F5F5',
        'text-secondary': '#A3A3A3',
        'text-muted': '#737373',
        'border-subtle': '#262626',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 24px rgba(139, 92, 246, 0.3)',
        'glow-gold': '0 0 24px rgba(212, 175, 55, 0.3)',
        'glow-purple-lg': '0 0 48px rgba(139, 92, 246, 0.4)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
