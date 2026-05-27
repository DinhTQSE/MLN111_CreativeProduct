/* Hero Illustration — vòng tròn biện chứng lịch sử
   Phong cách: con dấu / ấn chương lịch sử, mực vàng ochre */
export default function HeroIllustration({ accent = '#c8861a', className = '' }) {
  const r = 110
  const cx = 220
  const cy = 160

  const chapterLabels = [
    { angle: -80,  label: 'BAO CẤP',    sub: '1975-86' },
    { angle: -10,  label: 'ĐỔI MỚI',    sub: '1986-2000' },
    { angle: 60,   label: 'KỶ SỐ',      sub: '2000-20' },
    { angle: 130,  label: 'KỶ AI',       sub: '2020-Nay' },
  ]

  const toRad = (deg) => (deg * Math.PI) / 180
  const nodePos = (angle, radius) => ({
    x: cx + Math.cos(toRad(angle)) * radius,
    y: cy + Math.sin(toRad(angle)) * radius,
  })

  return (
    <svg
      viewBox="0 0 440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id="roughenHero">
          <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="3" result="noise" seed="3"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>

      <g filter="url(#roughenHero)">

        {/* ── Vòng tròn biện chứng bên ngoài ── */}
        <circle cx={cx} cy={cy} r={r + 20} stroke={accent} strokeWidth="0.6" opacity="0.15" strokeDasharray="6 4"/>
        <circle cx={cx} cy={cy} r={r} stroke={accent} strokeWidth="1.5" opacity="0.35"/>
        <circle cx={cx} cy={cy} r={r - 20} stroke={accent} strokeWidth="0.8" opacity="0.15" strokeDasharray="3 5"/>

        {/* ── Mũi tên vòng biện chứng ── */}
        <path
          d={`M ${cx + (r-5)} ${cy}
              A ${r-5} ${r-5} 0 0 1 ${cx + Math.cos(toRad(80))*(r-5)} ${cy + Math.sin(toRad(80))*(r-5)}`}
          stroke={accent} strokeWidth="2" opacity="0.4" markerEnd="url(#arrowHead)"/>

        {/* ── Trục ĐỐI KHÁNG — Giải phóng vs Tha hóa ── */}
        <path d={`M ${cx-r+10} ${cy} L ${cx+r-10} ${cy}`}
              stroke={accent} strokeWidth="0.8" strokeDasharray="5 4" opacity="0.25"/>
        <path d={`M ${cx} ${cy-r+10} L ${cx} ${cy+r-10}`}
              stroke={accent} strokeWidth="0.8" strokeDasharray="5 4" opacity="0.25"/>

        {/* ── Nhãn trục ── */}
        <text x={cx - r - 8} y={cy + 4} textAnchor="end" fontSize="7.5"
              fontFamily="Special Elite" fill={accent} opacity="0.4" letterSpacing="1">
          THA HÓA
        </text>
        <text x={cx + r + 8} y={cy + 4} fontSize="7.5"
              fontFamily="Special Elite" fill={accent} opacity="0.4" letterSpacing="1">
          GIẢI PHÓNG
        </text>

        {/* ── 4 nút chương trên vòng tròn ── */}
        {chapterLabels.map((ch, i) => {
          const pos = nodePos(ch.angle, r)
          const labelPos = nodePos(ch.angle, r + 32)
          return (
            <g key={i}>
              {/* Đường nối tâm */}
              <line x1={cx} y1={cy} x2={pos.x} y2={pos.y}
                    stroke={accent} strokeWidth="0.8" opacity="0.2" strokeDasharray="3 4"/>
              {/* Node */}
              <circle cx={pos.x} cy={pos.y} r="8" fill={accent} opacity="0.18" stroke={accent} strokeWidth="1.5"/>
              <text x={pos.x} y={pos.y + 4} textAnchor="middle" fontSize="8"
                    fontFamily="Special Elite" fill={accent} opacity="0.7">
                {String(i+1).padStart(2,'0')}
              </text>
              {/* Label */}
              <text x={labelPos.x} y={labelPos.y} textAnchor="middle" fontSize="7"
                    fontFamily="Special Elite" fill={accent} opacity="0.5" letterSpacing="1">
                {ch.label}
              </text>
              <text x={labelPos.x} y={labelPos.y + 10} textAnchor="middle" fontSize="6"
                    fontFamily="Caveat" fill={accent} opacity="0.35">
                {ch.sub}
              </text>
            </g>
          )
        })}

        {/* ── Trung tâm — biểu tượng biện chứng ── */}
        <circle cx={cx} cy={cy} r="28" fill={accent} opacity="0.07" stroke={accent} strokeWidth="1"/>
        {/* Yin-yang đơn giản hóa */}
        <path d={`M ${cx} ${cy-20} A 20 20 0 0 1 ${cx} ${cy+20}`}
              stroke={accent} strokeWidth="1.2" opacity="0.4" fill={accent} fillOpacity="0.05"/>
        <text x={cx} y={cy-6} textAnchor="middle" fontSize="8" fontFamily="Caveat"
              fill={accent} opacity="0.5">Giải phóng</text>
        <path d="M 200 160 L 240 160" stroke={accent} strokeWidth="0.8" opacity="0.3"/>
        <text x={cx} y={cy+14} textAnchor="middle" fontSize="8" fontFamily="Caveat"
              fill={accent} opacity="0.5">Tha hóa</text>

        {/* ── Góc trang trí ── */}
        {[[20,20],[420,20],[20,300],[420,300]].map(([x,y], i) => (
          <g key={i} transform={`translate(${x},${y}) rotate(${i*90})`}>
            <path d="M0 0 L12 0 M0 0 L0 12" stroke={accent} strokeWidth="1.5" opacity="0.3"/>
          </g>
        ))}

        {/* ── Tiêu đề nhỏ ── */}
        <text x={cx} y="296" textAnchor="middle" fontSize="7.5" fontFamily="Special Elite"
              fill={accent} opacity="0.35" letterSpacing="2">
          BIỆN CHỨNG MÁC-XÍT // VIỆT NAM
        </text>

      </g>
    </svg>
  )
}
