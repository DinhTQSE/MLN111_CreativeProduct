/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"EB Garamond"', 'Georgia', 'serif'],
        hand:    ['Caveat', 'cursive'],
        type:    ['"Special Elite"', 'Courier', 'monospace'],
      },
      colors: {
        /* Light parchment palette */
        parch:      '#f5edda',   /* nền giấy vàng kem                  */
        'parch-2':  '#ede3ca',   /* giấy già hơn                        */
        'parch-3':  '#e4d9c0',   /* giấy đậm                            */
        ink:        '#1c0e06',   /* mực đen-nâu                         */
        'ink-mid':  '#3a2510',   /* mực trung                           */
        'ink-lite':  '#6b5040',  /* mực nhạt                            */

        /* Chapter accent — đậm để đọc được trên nền sáng */
        'ch1':      '#8b1a1a',   /* đỏ mực Soviet                       */
        'ch1-bg':   '#f5e8e2',   /* nền chương 1 — kem đỏ nhạt          */
        'ch2':      '#8b6000',   /* vàng/hổ phách đậm                   */
        'ch2-bg':   '#faf3e0',   /* nền chương 2 — giấy vàng            */
        'ch3':      '#0d3d5c',   /* xanh mực hải quân                   */
        'ch3-bg':   '#e8f0f5',   /* nền chương 3 — xanh nhạt            */
        'ch4':      '#3d1f6b',   /* tím mực                             */
        'ch4-bg':   '#ede8f5',   /* nền chương 4 — tím nhạt             */
        'concl':    '#6b1212',   /* đỏ con dấu                          */
        'concl-bg': '#f5ece8',   /* nền kết luận                        */

        /* Palette vàng-cam từ ảnh người dùng — dùng làm accent C2 */
        'gold-1':   '#FFD700',
        'gold-2':   '#FFC200',
        'gold-3':   '#FF8C00',
        'gold-4':   '#FF6000',
      },
      boxShadow: {
        'ink':    '2px 3px 0 rgba(28,14,6,0.18)',
        'ink-lg': '4px 6px 0 rgba(28,14,6,0.14)',
        'stamp':  'inset 0 0 0 2px currentColor',
        'parch':  '0 1px 4px rgba(28,14,6,0.08), 0 4px 12px rgba(28,14,6,0.06)',
      },
      backgroundImage: {
        'paper-grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
        'crosshatch-light': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Cpath d='M0 0 L12 12 M12 0 L0 12' stroke='rgba(28,14,6,0.04)' stroke-width='0.6'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'stamp-in':   'stampIn 0.5s cubic-bezier(.17,.67,.51,1.29) forwards',
        'unfurl':     'unfurl 0.9s ease-out forwards',
      },
      keyframes: {
        floatSlow: {
          '0%,100%': { transform: 'translateY(0) rotate(-0.5deg)' },
          '50%':     { transform: 'translateY(-6px) rotate(0.5deg)' },
        },
        stampIn: {
          '0%':   { transform: 'scale(1.4) rotate(-6deg)', opacity: '0' },
          '70%':  { transform: 'scale(0.96) rotate(0.5deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        unfurl: {
          '0%':   { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
      },
    },
  },
  plugins: [],
}
