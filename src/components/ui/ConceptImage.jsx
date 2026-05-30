import { useState } from 'react'

/**
 * Hiển thị ảnh AI-generated nếu tồn tại, fallback về SVG illustration.
 * Khi bạn thêm ảnh vào /images/, component tự động dùng ảnh thật.
 */
export default function ConceptImage({ src, fallback, imgClass = '', alt = '' }) {
  const [broken, setBroken] = useState(false)

  if (broken) return fallback

  return (
    <img
      src={src}
      alt={alt}
      className={imgClass}
      onError={() => setBroken(true)}
    />
  )
}
