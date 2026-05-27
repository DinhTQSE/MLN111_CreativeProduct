/* Minh họa Chương 3 — Kỷ Nguyên Số (2000-2020)
   Phong cách: mực nước xanh lam nhạt, đường net / network
   Scene: Con người ngồi trước màn hình, luồng dữ liệu bao quanh */
export default function IllustrationChapter3({ accent = '#1e5c8a', className = '' }) {
  return (
    <svg
      viewBox="0 0 440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Minh họa Kỷ Nguyên Số: con người trở thành dữ liệu"
    >
      <defs>
        <filter id="roughen3">
          <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="3" result="noise" seed="8"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>

      <g filter="url(#roughen3)">

        {/* ── Vầng sáng màn hình ── */}
        <ellipse cx="220" cy="140" rx="130" ry="90" fill={accent} opacity="0.05"/>

        {/* ── MÀN HÌNH MÁY TÍNH ── */}
        <rect x="155" y="80" width="130" height="100" rx="3" fill="none" stroke={accent} strokeWidth="2.5"/>
        {/* Viền trong */}
        <rect x="162" y="87" width="116" height="86" fill={accent} opacity="0.06" stroke={accent} strokeWidth="0.8"/>
        {/* Nội dung màn hình — lưới dữ liệu */}
        {[0,12,24,36,48,60,72].map(y => (
          <line key={`h${y}`} x1="165" y1={90+y} x2="275" y2={90+y} stroke={accent} strokeWidth="0.5" opacity="0.3"/>
        ))}
        {[0,18,36,54,72,90,108].map(x => (
          <line key={`v${x}`} x1={165+x} y1="90" x2={165+x} y2="170" stroke={accent} strokeWidth="0.5" opacity="0.2"/>
        ))}
        {/* Cursor nhấp nháy */}
        <rect x="195" y="108" width="2" height="12" fill={accent} opacity="0.8"/>
        {/* Đồ thị nhỏ trên màn hình */}
        <polyline points="175,160 190,145 205,152 225,130 245,140 262,128 275,135"
                  stroke={accent} strokeWidth="1.5" fill="none" opacity="0.6"/>
        {/* Chân màn hình */}
        <rect x="205" y="180" width="30" height="8" fill={accent} opacity="0.3"/>
        <rect x="195" y="187" width="50" height="5" fill={accent} opacity="0.2"/>

        {/* ── NGƯỜI DÙNG — ngồi trước máy tính ── */}
        <g transform="translate(220, 210)">
          {/* Ghế */}
          <rect x="-20" y="20" width="40" height="6" rx="2" fill={accent} opacity="0.2" stroke={accent} strokeWidth="1"/>
          <path d="M-15 26 L-15 48 M15 26 L15 48" stroke={accent} strokeWidth="1.2"/>
          {/* Người — đang gõ phím */}
          <circle cx="0" cy="-18" r="11" fill="none" stroke={accent} strokeWidth="2"/>
          <path d="M0 -7 L0 16" stroke={accent} strokeWidth="2.5" strokeLinecap="round"/>
          {/* Tay gõ bàn phím — gập về phía trước */}
          <path d="M-12 2 L-22 12 M12 2 L22 12" stroke={accent} strokeWidth="2"/>
          <path d="M-22 12 L-18 16 M22 12 L18 16" stroke={accent} strokeWidth="1.5"/>
          {/* Chân */}
          <path d="M0 16 L-10 22 M0 16 L10 22" stroke={accent} strokeWidth="2"/>
        </g>

        {/* ── MẠNG LƯỚI DỮ LIỆU — tỏa ra từ màn hình ── */}
        {/* Nodes */}
        {[
          {x:60,  y:60,  r:6},
          {x:380, y:55,  r:5},
          {x:50,  y:200, r:7},
          {x:400, y:190, r:5},
          {x:100, y:130, r:5},
          {x:340, y:120, r:5},
          {x:130, y:240, r:4},
          {x:320, y:250, r:4},
        ].map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r}
                  fill={accent} opacity="0.2" stroke={accent} strokeWidth="1.2"/>
        ))}

        {/* Đường kết nối — mạng lưới */}
        {[
          [60,60, 100,130], [100,130, 155,140], [380,55, 340,120], [340,120, 285,130],
          [50,200, 100,130], [400,190, 340,120], [130,240, 100,130], [320,250, 340,120],
          [60,60, 50,200],  [380,55, 400,190],
        ].map(([x1,y1,x2,y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={accent} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3"/>
        ))}

        {/* Hạt dữ liệu chảy dọc theo dây */}
        {[[100,130,155,140],[50,200,100,130]].map(([x1,y1,x2,y2], i) => (
          <circle key={i} cx={(x1+x2)/2} cy={(y1+y2)/2} r="2.5"
                  fill={accent} opacity="0.5"/>
        ))}

        {/* ── SERVER box phía sau ── */}
        <g transform="translate(20, 55)">
          <rect x="0" y="0" width="32" height="46" rx="2" fill="none" stroke={accent} strokeWidth="1.5"/>
          {[8,16,24,32,40].map(y => (
            <rect key={y} x="3" y={y} width="26" height="5" rx="1" fill={accent} opacity="0.1" stroke={accent} strokeWidth="0.5"/>
          ))}
          <text x="16" y="-6" textAnchor="middle" fontSize="7" fontFamily="Caveat" fill={accent} opacity="0.5">SERVER</text>
        </g>
        <g transform="translate(390, 50)">
          <rect x="0" y="0" width="32" height="46" rx="2" fill="none" stroke={accent} strokeWidth="1.5"/>
          {[8,16,24,32,40].map(y => (
            <rect key={y} x="3" y={y} width="26" height="5" rx="1" fill={accent} opacity="0.1" stroke={accent} strokeWidth="0.5"/>
          ))}
        </g>

        {/* ── Annotation ── */}
        <text x="15" y="285" fontSize="10.5" fontFamily="Caveat, cursive" fill={accent} opacity="0.55" transform="rotate(-1.5, 15, 285)">
          "Nếu bạn không trả tiền, bạn là sản phẩm"
        </text>

        {/* ── Mặt đất ── */}
        <path d="M10 248 Q220 244 430 250" stroke={accent} strokeWidth="0.8" opacity="0.2" fill="none" strokeDasharray="3 5"/>

        {/* ── Stamp ── */}
        <rect x="330" y="258" width="88" height="26" rx="2" fill="none" stroke={accent} strokeWidth="1" opacity="0.3"/>
        <text x="374" y="268" textAnchor="middle" fontSize="7" fontFamily="Special Elite" fill={accent} opacity="0.5" letterSpacing="1">2000 — 2020</text>
        <text x="374" y="279" textAnchor="middle" fontSize="6" fontFamily="Special Elite" fill={accent} opacity="0.35" letterSpacing="1">KỶ NGUYÊN SỐ</text>

      </g>
    </svg>
  )
}
