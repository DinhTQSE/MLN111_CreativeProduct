/* Minh họa Chương 4 — Kỷ Nguyên AI (2020-Nay)
   Phong cách: mực tím mờ, hình người hòa tan thành mạch điện
   Scene: Nửa người — nửa mạch AI, câu hỏi "bản chất người" */
export default function IllustrationChapter4({ accent = '#5a3d7a', className = '' }) {
  return (
    <svg
      viewBox="0 0 440 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Minh họa Kỷ Nguyên AI: con người và máy móc hòa lẫn"
    >
      <defs>
        <filter id="roughen4">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="4" result="noise" seed="12"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <linearGradient id="humanToAI" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.7"/>
          <stop offset="50%" stopColor={accent} stopOpacity="0.4"/>
          <stop offset="100%" stopColor={accent} stopOpacity="0.1"/>
        </linearGradient>
        <linearGradient id="dissolve" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.9"/>
          <stop offset="60%" stopColor={accent} stopOpacity="0.5"/>
          <stop offset="100%" stopColor={accent} stopOpacity="0"/>
        </linearGradient>
      </defs>

      <g filter="url(#roughen4)">

        {/* ── Aura mờ ── */}
        <ellipse cx="180" cy="160" rx="120" ry="140" fill={accent} opacity="0.04"/>

        {/* ── HÌNH NGƯỜI bên trái (nét vẽ chắc) ── */}
        <g transform="translate(130, 60)">
          {/* Đầu */}
          <circle cx="0" cy="0" r="28" fill="none" stroke={accent} strokeWidth="2.5"/>
          {/* Mắt */}
          <circle cx="-9" cy="-4" r="3.5" fill="none" stroke={accent} strokeWidth="1.5"/>
          <circle cx="9" cy="-4" r="3.5" fill="none" stroke={accent} strokeWidth="1.5"/>
          {/* Miệng — suy tư */}
          <path d="M-8 10 Q0 13 8 10" stroke={accent} strokeWidth="1.5" fill="none"/>
          {/* Cổ */}
          <path d="M-6 27 L-6 45 M6 27 L6 45" stroke={accent} strokeWidth="2"/>
          {/* Vai */}
          <path d="M-40 55 Q-30 45 -6 45" stroke={accent} strokeWidth="2.5" fill="none"/>
          <path d="M40 55 Q30 45 6 45" stroke={accent} strokeWidth="2.5" fill="none"/>
          {/* Thân */}
          <path d="M-6 45 L-10 110 M6 45 L10 110" stroke={accent} strokeWidth="2.5"/>
          <path d="M-10 110 L-18 165 M10 110 L18 165" stroke={accent} strokeWidth="2.2"/>
          {/* Tay trái — còn nguyên */}
          <path d="M-40 55 L-55 100 L-50 110" stroke={accent} strokeWidth="2.2" strokeLinecap="round"/>
          {/* Tay phải — đang hòa tan */}
          <path d="M40 55 L55 90" stroke="url(#dissolve)" strokeWidth="2.2" strokeLinecap="round"/>
        </g>

        {/* ── PHẦN AI bên phải — mạch điện thay thế ── */}
        {/* Neural network nodes thay thế cơ thể bên phải */}
        {[
          {x:240, y:80},  {x:270, y:110}, {x:300, y:90},
          {x:250, y:140}, {x:285, y:155}, {x:315, y:130},
          {x:260, y:185}, {x:295, y:200}, {x:330, y:175},
          {x:250, y:225}, {x:290, y:240}, {x:325, y:218},
        ].map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={4 - (i%3)*0.5}
                  fill={accent} opacity={0.5 - i*0.025}
                  stroke={accent} strokeWidth="1"/>
        ))}

        {/* Kết nối neural */}
        {[
          [240,80, 270,110],[240,80, 300,90],[270,110, 285,155],[300,90, 315,130],
          [270,110, 250,140],[250,140, 285,155],[285,155, 315,130],[315,130, 295,200],
          [250,140, 260,185],[260,185, 295,200],[295,200, 330,175],[285,155, 290,240],
          [260,185, 250,225],[290,240, 325,218],[330,175, 325,218],
        ].map(([x1,y1,x2,y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={accent} strokeWidth="0.8"
                opacity={0.35 - i*0.01} strokeDasharray={i%3===0 ? "none" : "3 2"}/>
        ))}

        {/* ── Đường ranh giới người/AI — mờ dần ── */}
        <path d="M188 60 Q195 160 190 265" stroke={accent} strokeWidth="1"
              strokeDasharray="4 6" opacity="0.3"/>

        {/* ── Dấu hỏi lớn — "Bản chất người là gì?" ── */}
        <text x="360" y="200" fontSize="72" fontFamily="Playfair Display, serif"
              fontStyle="italic" fill={accent} opacity="0.08">?</text>

        {/* ── Brain với circuit ── */}
        <g transform="translate(340, 75)">
          {/* Outline não */}
          <path d="M0 25 C-15 25 -30 15 -30 0 C-30 -18 -15 -28 0 -25 C15 -28 30 -18 30 0 C30 15 15 25 0 25 Z"
                fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5"/>
          {/* Rãnh não */}
          <path d="M-5 -20 Q5 -10 -5 0 Q5 10 -5 20" stroke={accent} strokeWidth="0.8" opacity="0.35" fill="none"/>
          {/* Circuit overlay */}
          {[[-20,0,20,0],[-15,-15,0,-5],[-15,15,0,5]].map(([x1,y1,x2,y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke={accent} strokeWidth="0.8" opacity="0.4" strokeDasharray="3 2"/>
          ))}
          <text x="0" y="6" textAnchor="middle" fontSize="9" fontFamily="Special Elite"
                fill={accent} opacity="0.5">AI</text>
        </g>

        {/* ── Từ khóa bay — tha hóa nhận thức ── */}
        {[
          {text: 'CREATIVITY?', x: 300, y: 55, r: 8},
          {text: 'AGENCY?',     x: 340, y: 145, r: -5},
          {text: 'IDENTITY?',   x: 295, y: 280, r: 4},
        ].map((w, i) => (
          <text key={i} x={w.x} y={w.y} fontSize="8.5" fontFamily="Special Elite"
                fill={accent} opacity="0.25" letterSpacing="2"
                transform={`rotate(${w.r}, ${w.x}, ${w.y})`}>
            {w.text}
          </text>
        ))}

        {/* ── Annotation ── */}
        <text x="20" y="295" fontSize="11" fontFamily="Caveat, cursive" fill={accent} opacity="0.5" transform="rotate(-1, 20, 295)">
          "Con người là tổng hòa các quan hệ xã hội"
        </text>
        <text x="20" y="311" fontSize="9.5" fontFamily="Caveat, cursive" fill={accent} opacity="0.35">
          — Marx, Luận đề về Feuerbach
        </text>

        {/* ── Stamp ── */}
        <rect x="328" y="265" width="90" height="26" rx="2" fill="none" stroke={accent} strokeWidth="1" opacity="0.3"/>
        <text x="373" y="275" textAnchor="middle" fontSize="7" fontFamily="Special Elite" fill={accent} opacity="0.45" letterSpacing="1">2020 — NAY</text>
        <text x="373" y="286" textAnchor="middle" fontSize="6" fontFamily="Special Elite" fill={accent} opacity="0.3" letterSpacing="1">KỶ NGUYÊN AI</text>

      </g>
    </svg>
  )
}
