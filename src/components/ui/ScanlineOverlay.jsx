/* Paper grain — overlay tinh tế trên nền sáng */
export default function PaperGrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9996]"
      aria-hidden="true"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E")`,
        mixBlendMode: 'multiply',
        opacity: 0.5,
      }}
    />
  )
}
