import clsx from 'clsx'

/* InkText — thay thế GlitchText, dùng cho headings kiểu khắc gỗ
   intensity vẫn được nhận để tương thích, nhưng effect là ink-stamp */
export default function GlitchText({ children, intensity = 0, className = '', as: Tag = 'span' }) {
  return (
    <Tag className={clsx('font-display', className)}>
      {children}
    </Tag>
  )
}
