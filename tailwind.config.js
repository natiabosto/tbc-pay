module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-georgian': ['Noto Sans Georgian', 'sans-serif'], // Add Noto Sans Georgian font family
      },
      colors: {
        primary: '#4CAF50',
        primaryHover: '#45a049',
      },
      borderRadius: {
        btn: '4px',
      },
      padding: {
        btn: '10px 20px',
      },
      boxShadow: {
        btn: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn': {
          backgroundColor: '#3B82F6',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
          '&:hover': {
            backgroundColor: '#2563EB',
          },
          '&:disabled': {
            backgroundColor: '#ebf3ff',
            color: '#b7cfff',
            cursor: 'not-allowed',
          },
        },
      });
    },
  ],
};
