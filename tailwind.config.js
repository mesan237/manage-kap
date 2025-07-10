/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        primaryDark: '#2980b9',
        secondary: '#2ecc71',
        accent: '#e74c3c',
        background: '#f9f9f9',
        card: '#ffffff',
        text: '#333333',
        textLight: '#666666',
        border: '#dddddd',
        error: '#e74c3c',
        success: '#2ecc71',
      },
      boxShadow: {
        'custom-1': '0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)',
        'custom-2': '0 4px 6px -1px rgba(0, 0, 255, 0.1), 0 2px 4px -1px rgba(0, 0, 255, 0.06)',
      },
      fontFamily: {
        inter: ['Inter-Regular'],
        'inter-medium': ['Inter-Medium'],
        'inter-semibold': ['Inter-SemiBold'],
        'inter-bold': ['Inter-Bold'],
      },
      spacing: {
        xs: '4rem',
        sm: '8rem',
        md: '16rem',
        lg: '24rem',
        xl: '32rem',
        xxl: '48rem',
      },
    },
  },
  plugins: [],
};
