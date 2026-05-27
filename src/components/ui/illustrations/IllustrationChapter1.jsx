/* Minh họa Chương 1 — Bao Cấp (1975-1986)
   Phong cách: khắc gỗ / mộc bản, mực đen trên nền trong suốt
   Scene: Hàng người xếp hàng trước cửa hàng mậu dịch bị đóng cửa */
export default function IllustrationChapter1({ accent = '#7a1f1f', className = '' }) {
  return (
    <svg
      viewBox="0 0 440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Minh họa thời kỳ Bao Cấp: hàng người xếp hàng trước cửa hàng mậu dịch"
    >
      <defs>
        {/* Hand-drawn roughen filter */}
        <filter id="roughen1">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        {/* Paper texture */}
        <filter id="paper1">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blend"/>
          <feComposite in="blend" in2="SourceGraphic" operator="in"/>
        </filter>
      </defs>

      <g filter="url(#roughen1)">

        {/* ── Nền — vết mực nhạt ── */}
        <ellipse cx="220" cy="200" rx="200" ry="120" fill={accent} opacity="0.06"/>

        {/* ── Tòa nhà CỬA HÀNG MẬU DỊCH ── */}
        {/* Thân nhà */}
        <rect x="140" y="80" width="160" height="150" fill="none" stroke={accent} strokeWidth="2.5"/>
        {/* Mái nhà tam giác */}
        <path d="M130 80 L220 30 L310 80 Z" fill="none" stroke={accent} strokeWidth="2.5" strokeLinejoin="round"/>
        {/* Cửa chớp đóng — hatch pattern */}
        <rect x="155" y="110" width="56" height="80" fill="none" stroke={accent} strokeWidth="1.5"/>
        {[0,8,16,24,32,40,48,56,64,72,80].map(y => (
          <line key={y} x1="155" y1={110+y} x2="211" y2={110+y} stroke={accent} strokeWidth="0.8" opacity="0.5"/>
        ))}
        {/* Khóa cửa */}
        <rect x="178" y="148" width="10" height="8" rx="1" fill={accent} opacity="0.6"/>
        <path d="M181 148 Q181 143 184 143 Q187 143 187 148" stroke={accent} strokeWidth="1.5" fill="none"/>
        {/* Cửa sổ bên phải — cũng đóng */}
        <rect x="229" y="110" width="56" height="80" fill="none" stroke={accent} strokeWidth="1.5"/>
        {[0,8,16,24,32,40,48,56,64,72,80].map(y => (
          <line key={y} x1="229" y1={110+y} x2="285" y2={110+y} stroke={accent} strokeWidth="0.8" opacity="0.5"/>
        ))}
        {/* Biển hiệu */}
        <rect x="150" y="82" width="140" height="22" fill={accent} opacity="0.15" stroke={accent} strokeWidth="1"/>
        <text x="220" y="97" textAnchor="middle" fontSize="7.5" fontFamily="Special Elite, Courier" fill={accent} opacity="0.9" letterSpacing="2">
          CỬA HÀNG MẬU DỊCH
        </text>
        {/* Bậc thềm */}
        <rect x="145" y="228" width="150" height="8" fill={accent} opacity="0.3"/>
        <rect x="150" y="236" width="140" height="4" fill={accent} opacity="0.15"/>

        {/* ── Hàng người xếp hàng ── */}
        {/* Người 1 — gần nhất, đứng ngay cửa */}
        <g transform="translate(100, 150)">
          <circle cx="0" cy="-32" r="9" stroke={accent} strokeWidth="2" fill="none"/>
          <path d="M0 -23 L0 10" stroke={accent} strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M-10 -10 L10 -10" stroke={accent} strokeWidth="2"/>
          <path d="M0 10 L-8 30" stroke={accent} strokeWidth="2" strokeLinecap="round"/>
          <path d="M0 10 L8 30" stroke={accent} strokeWidth="2" strokeLinecap="round"/>
          {/* Quyển sổ tem phiếu */}
          <rect x="9" y="-18" width="12" height="16" rx="1" fill={accent} opacity="0.4" stroke={accent} strokeWidth="1"/>
        </g>
        {/* Người 2 */}
        <g transform="translate(68, 158)">
          <circle cx="0" cy="-28" r="8" stroke={accent} strokeWidth="1.8" fill="none"/>
          <path d="M0 -20 L0 8" stroke={accent} strokeWidth="2"/>
          <path d="M-8 -8 L8 -8" stroke={accent} strokeWidth="1.8"/>
          <path d="M0 8 L-7 26" stroke={accent} strokeWidth="1.8"/>
          <path d="M0 8 L7 26" stroke={accent} strokeWidth="1.8"/>
        </g>
        {/* Người 3 */}
        <g transform="translate(42, 162)">
          <circle cx="0" cy="-26" r="7.5" stroke={accent} strokeWidth="1.6" fill="none"/>
          {/* Nón lá */}
          <path d="M-10 -26 Q0 -38 10 -26" stroke={accent} strokeWidth="1.5" fill={accent} opacity="0.2"/>
          <path d="M0 -19 L0 7" stroke={accent} strokeWidth="2"/>
          <path d="M-8 -7 L8 -7" stroke={accent} strokeWidth="1.6"/>
          <path d="M0 7 L-6 24" stroke={accent} strokeWidth="1.6"/>
          <path d="M0 7 L6 24" stroke={accent} strokeWidth="1.6"/>
        </g>
        {/* Người 4 */}
        <g transform="translate(18, 166)">
          <circle cx="0" cy="-24" r="7" stroke={accent} strokeWidth="1.5" fill="none"/>
          <path d="M0 -17 L0 6" stroke={accent} strokeWidth="1.8"/>
          <path d="M-7 -6 L7 -6" stroke={accent} strokeWidth="1.5"/>
          <path d="M0 6 L-5 22" stroke={accent} strokeWidth="1.5"/>
          <path d="M0 6 L5 22" stroke={accent} strokeWidth="1.5"/>
        </g>
        {/* Người 5 — xa nhất */}
        <g transform="translate(0, 168)" opacity="0.6">
          <circle cx="0" cy="-22" r="6" stroke={accent} strokeWidth="1.3" fill="none"/>
          <path d="M0 -16 L0 5" stroke={accent} strokeWidth="1.5"/>
          <path d="M-6 -5 L6 -5" stroke={accent} strokeWidth="1.3"/>
          <path d="M0 5 L-4 19" stroke={accent} strokeWidth="1.3"/>
          <path d="M0 5 L4 19" stroke={accent} strokeWidth="1.3"/>
        </g>
        {/* Người 6 — mờ nhất */}
        <g transform="translate(-16, 170)" opacity="0.35">
          <circle cx="0" cy="-20" r="5" stroke={accent} strokeWidth="1.2" fill="none"/>
          <path d="M0 -15 L0 4" stroke={accent} strokeWidth="1.3"/>
          <path d="M-5 -4 L5 -4" stroke={accent} strokeWidth="1.2"/>
          <path d="M0 4 L-3 16" stroke={accent} strokeWidth="1.2"/>
          <path d="M0 4 L3 16" stroke={accent} strokeWidth="1.2"/>
        </g>

        {/* ── Dấu hỏi lớn phía trên ── */}
        <text x="365" y="90" fontSize="48" fontFamily="Playfair Display, serif"
              fill={accent} opacity="0.12" fontStyle="italic">?</text>

        {/* ── Số liệu annotation ── */}
        <text x="330" y="180" fontSize="10" fontFamily="Caveat, cursive" fill={accent} opacity="0.55" transform="rotate(-8, 330, 180)">
          lạm phát 700%
        </text>
        <text x="325" y="198" fontSize="10" fontFamily="Caveat, cursive" fill={accent} opacity="0.4" transform="rotate(-8, 325, 198)">
          Hà Nội, 1986
        </text>

        {/* ── Đường kẻ mặt đất ── */}
        <path d="M20 240 Q220 238 420 242" stroke={accent} strokeWidth="1" opacity="0.25" fill="none" strokeDasharray="4 3"/>

        {/* ── Ngôi sao góc trái ── */}
        <path d="M36 48 L40 58 L50 58 L42 64 L45 74 L36 68 L27 74 L30 64 L22 58 L32 58 Z"
              fill={accent} opacity="0.15" stroke={accent} strokeWidth="0.8"/>

        {/* ── Năm tháng stamp ── */}
        <rect x="328" y="240" width="80" height="26" rx="2" fill="none" stroke={accent} strokeWidth="1" opacity="0.3"/>
        <text x="368" y="250" textAnchor="middle" fontSize="7" fontFamily="Special Elite" fill={accent} opacity="0.5" letterSpacing="1">1975 — 1986</text>
        <text x="368" y="261" textAnchor="middle" fontSize="6" fontFamily="Special Elite" fill={accent} opacity="0.35" letterSpacing="1">BAO CẤP</text>

      </g>
    </svg>
  )
}
