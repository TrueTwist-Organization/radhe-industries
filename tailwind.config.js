/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#061B2B',
        'pump-blue': '#0B5FFF',
        aqua: '#12D6C5',
        graphite: '#111827',
        mist: '#F3F7FA',
        steel: '#6B7280',
        orange: '#FF8A00',
        'gray-150': '#e8ecf0',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #061B2B 0%, #0a2a40 100%)',
        'blue-gradient': 'linear-gradient(135deg, #0B5FFF 0%, #1a6fff 100%)',
        'aqua-gradient': 'linear-gradient(135deg, #12D6C5 0%, #0fbcab 100%)',
      },
      boxShadow: {
        'aqua-glow': '0 0 30px rgba(18, 214, 197, 0.25)',
        'blue-glow': '0 0 30px rgba(11, 95, 255, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 16px 48px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'wave': 'wave 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glowPulse: {
          '0%': { opacity: '0.5', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.08)' },
        },
        wave: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
