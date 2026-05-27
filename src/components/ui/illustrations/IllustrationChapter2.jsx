/* Minh họa Chương 2 — Đổi Mới (1986-2000)
   Phong cách: khắc gỗ ấn tượng, năng lượng giải phóng
   Scene: Chợ sầm uất — xe Honda, quầy hàng, người trao đổi tiền */
export default function IllustrationChapter2({ accent = '#c8861a', className = '' }) {
  const gold1 = '#FFD700'
  const gold2 = '#FF8C00'

  return (
    <svg
      viewBox="0 0 440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Minh họa thời kỳ Đổi Mới: chợ sầm uất, xe Honda, trao đổi tự do"
    >
      <defs>
        <filter id="roughen2">
          <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="3" result="noise" seed="5"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <radialGradient id="sunGlow" cx="50%" cy="30%" r="40%">
          <stop offset="0%" stopColor={gold1} stopOpacity="0.2"/>
          <stop offset="100%" stopColor={gold2} stopOpacity="0"/>
        </radialGradient>
      </defs>

      <g filter="url(#roughen2)">

        {/* ── Ánh sáng bừng sáng phía sau — "giải phóng" ── */}
        <ellipse cx="220" cy="80" rx="160" ry="100" fill="url(#sunGlow)"/>
        {/* Tia sáng */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
          <line
            key={i}
            x1="220" y1="75"
            x2={220 + Math.cos((deg * Math.PI)/180) * (50 + (i%3)*15)}
            y2={75 + Math.sin((deg * Math.PI)/180) * (50 + (i%3)*15)}
            stroke={gold1} strokeWidth="0.8" opacity="0.15"
          />
        ))}

        {/* ── MẶT TRỜI / Bình minh mới ── */}
        <circle cx="220" cy="75" r="28" fill={gold1} opacity="0.12" stroke={gold1} strokeWidth="1.5"/>
        <circle cx="220" cy="75" r="18" fill={gold1} opacity="0.18" stroke={gold1} strokeWidth="1"/>
        <text x="220" y="80" textAnchor="middle" fontSize="16" fill={gold1} opacity="0.5">☀</text>

        {/* ── QUẦY HÀNG CHỢ bên trái ── */}
        {/* Mái bạt */}
        <path d="M20 160 L20 130 L140 120 L140 150 Z" fill={accent} opacity="0.15" stroke={accent} strokeWidth="1.5"/>
        {/* Hàng hóa trên bàn */}
        <rect x="20" y="150" width="120" height="8" fill={accent} opacity="0.3" stroke={accent} strokeWidth="1"/>
        {/* Các mặt hàng */}
        {[30,50,70,90,110].map(x => (
          <ellipse key={x} cx={x} cy="148" rx="7" ry="5" fill={accent} opacity="0.25" stroke={accent} strokeWidth="1"/>
        ))}
        {/* Người bán — nón lá */}
        <g transform="translate(75, 105)">
          <circle cx="0" cy="-10" r="8" fill="none" stroke={accent} strokeWidth="1.8"/>
          <path d="M-12 -10 Q0 -24 12 -10" fill={accent} opacity="0.2" stroke={accent} strokeWidth="1.5"/>
          <path d="M0 -2 L0 20" stroke={accent} strokeWidth="2"/>
          <path d="M-10 10 L10 10" stroke={accent} strokeWidth="1.8"/>
          <path d="M0 20 L-8 38" stroke={accent} strokeWidth="1.8"/>
          <path d="M0 20 L8 38" stroke={accent} strokeWidth="1.8"/>
        </g>

        {/* ── XE HONDA / DREAM ── biểu tượng Đổi Mới ── */}
        <g transform="translate(190, 185)">
          {/* Khung xe */}
          <path d="M-45 0 C-40 -25 -10 -32 15 -28 C35 -24 48 -10 50 0 Z"
                fill={accent} opacity="0.08" stroke={accent} strokeWidth="2"/>
          {/* Bánh xe trước */}
          <circle cx="40" cy="8" r="18" fill="none" stroke={accent} strokeWidth="2.5"/>
          <circle cx="40" cy="8" r="8" fill="none" stroke={accent} strokeWidth="1"/>
          {/* Bánh xe sau */}
          <circle cx="-30" cy="8" r="18" fill="none" stroke={accent} strokeWidth="2.5"/>
          <circle cx="-30" cy="8" r="8" fill="none" stroke={accent} strokeWidth="1"/>
          {/* Yên xe */}
          <path d="M-15 -20 Q5 -28 22 -22" stroke={accent} strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* Tay lái */}
          <path d="M28 -22 L38 -28 M28 -22 L38 -18" stroke={accent} strokeWidth="2" strokeLinecap="round"/>
          {/* Người lái */}
          <circle cx="8" cy="-42" r="9" fill="none" stroke={accent} strokeWidth="2"/>
          <path d="M8 -33 L5 -18" stroke={accent} strokeWidth="2"/>
          <path d="M-8 -26 L18 -26" stroke={accent} strokeWidth="1.8"/>
          <path d="M5 -18 L-5 0 M5 -18 L15 0" stroke={accent} strokeWidth="1.8"/>
          {/* Đèn hậu */}
          <circle cx="-48" cy="0" r="4" fill={accent} opacity="0.3" stroke={accent} strokeWidth="1"/>
          {/* Khói xe nhỏ */}
          {[0,1,2].map(i => (
            <ellipse key={i} cx={-60-i*10} cy={-5+i*3} rx={3+i} ry={2+i}
                     fill={accent} opacity={0.15-i*0.04}/>
          ))}
        </g>

        {/* ── NGƯỜI MUA — trao tiền ── */}
        <g transform="translate(310, 160)">
          <circle cx="0" cy="-30" r="9" fill="none" stroke={accent} strokeWidth="2"/>
          <path d="M0 -21 L0 5" stroke={accent} strokeWidth="2.2"/>
          <path d="M-11 -8 L11 -8" stroke={accent} strokeWidth="2"/>
          <path d="M0 5 L-8 25" stroke={accent} strokeWidth="2"/>
          <path d="M0 5 L8 25" stroke={accent} strokeWidth="2"/>
          {/* Tay cầm tiền — cánh tay giơ ra */}
          <path d="M11 -8 L26 -18" stroke={accent} strokeWidth="2"/>
          {/* Tiền */}
          <rect x="24" y="-26" width="18" height="12" rx="1" fill={accent} opacity="0.25" stroke={accent} strokeWidth="1"/>
          <text x="33" y="-17" textAnchor="middle" fontSize="7" fontFamily="Special Elite" fill={accent} opacity="0.7">$</text>
        </g>

        {/* ── Các đồng tiền bay ── */}
        {[{x:350,y:80,r:-15},{x:380,y:110,r:10},{x:360,y:130,r:-5},{x:400,y:90,r:20}].map((c,i) => (
          <ellipse key={i} cx={c.x} cy={c.y} rx="9" ry="6"
                   transform={`rotate(${c.r}, ${c.x}, ${c.y})`}
                   fill={gold1} opacity="0.15" stroke={gold1} strokeWidth="1"/>
        ))}

        {/* ── Annotation chữ viết tay ── */}
        <text x="30" y="268" fontSize="11" fontFamily="Caveat, cursive" fill={accent} opacity="0.6" transform="rotate(-2, 30, 268)">
          "Đổi mới hay là chết"
        </text>
        <text x="30" y="283" fontSize="9.5" fontFamily="Caveat, cursive" fill={accent} opacity="0.4">
          — Tổng Bí thư Nguyễn Văn Linh, 1987
        </text>

        {/* ── Mặt đất ── */}
        <path d="M10 240 Q220 235 430 242" stroke={accent} strokeWidth="1" opacity="0.2" fill="none" strokeDasharray="3 4"/>

        {/* ── Stamp thời gian ── */}
        <rect x="328" y="248" width="88" height="26" rx="2" fill="none" stroke={accent} strokeWidth="1" opacity="0.3"/>
        <text x="372" y="258" textAnchor="middle" fontSize="7" fontFamily="Special Elite" fill={accent} opacity="0.5" letterSpacing="1">1986 — 2000</text>
        <text x="372" y="269" textAnchor="middle" fontSize="6" fontFamily="Special Elite" fill={accent} opacity="0.35" letterSpacing="1">ĐỔI MỚI</text>

      </g>
    </svg>
  )
}
