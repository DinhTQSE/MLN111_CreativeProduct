import { FALLBACK_ANALYSIS } from '../data/viewpoints'

const SYSTEM_PROMPT = `Bạn là một nhà phân tích triết học Mác-Lênin kết hợp nhà báo dữ liệu tại Việt Nam.
Nhiệm vụ: Phân tích quan điểm được đưa ra theo 3 chiều, trả về JSON chặt chẽ.

Trả về JSON với cấu trúc CHÍNH XÁC như sau:
{
  "supportingEvidence": [
    {
      "summary": "Tóm tắt 2-3 câu bằng tiếng Việt về bằng chứng, trích dẫn cụ thể số liệu hoặc tên tác giả nếu có",
      "source": "Tên nguồn chính xác (VnExpress / Tuổi Trẻ / Nhân Dân / BBC Vietnamese / Tạp chí Cộng sản / ILO / World Bank)",
      "year": "Năm xuất bản",
      "url": "URL đầy đủ dẫn trực tiếp đến bài báo hoặc báo cáo — ví dụ https://vnexpress.net/... hoặc https://tuoitre.vn/... Nếu không chắc URL chính xác, dùng URL trang chủ của nguồn đó"
    }
  ],
  "refutingEvidence": [
    {
      "summary": "Tóm tắt 2-3 câu bằng tiếng Việt về bằng chứng phản bác, trích dẫn cụ thể",
      "source": "Tên nguồn",
      "year": "Năm",
      "url": "URL đầy đủ hoặc URL trang chủ nguồn"
    }
  ],
  "philosophicalAnalysis": {
    "phenomenon": "THA_HOA hoặc GIAI_PHONG hoặc BOTH",
    "marxistConcept": "Tên đầy đủ khái niệm Mác-xít bằng tiếng Việt (kèm tên tiếng Đức/Anh trong ngoặc)",
    "textbookReference": "Giáo trình Triết học Mác-Lênin, Bộ GD&ĐT 2021, tr.XXX–XXX",
    "dialecticalLaw": "Tên quy luật biện chứng đầy đủ",
    "analysis": "Phân tích SÂU 4-6 câu theo lăng kính Mác-Lênin: giải thích cơ chế triết học, kết nối LLSX-QHSX-ý thức xã hội, đặt trong bối cảnh lịch sử Việt Nam",
    "conclusion": "Kết luận biện chứng 2-3 câu: chỉ rõ mâu thuẫn và hướng giải quyết"
  },
  "reflectionQuestion": "Một câu hỏi mở sắc bén buộc người đọc phải đối mặt với tư duy của chính mình — không có câu trả lời đơn giản"
}

Quan trọng:
- Viết hoàn toàn bằng tiếng Việt, sắc bén và học thuật
- Không áp đặt kết luận đúng/sai — trình bày đa chiều để người đọc tự nhận thức
- Phân tích phải liên hệ cụ thể với LLSX-QHSX, tồn tại xã hội-ý thức xã hội
- Trích dẫn và diễn giải khái niệm từ giáo trình Triết học Mác-Lênin (Bộ GD&ĐT 2021)
- Mỗi mảng evidence có ít nhất 2 mục với số liệu hoặc tên tác giả cụ thể
- URL: ưu tiên URL bài cụ thể; nếu không chắc thì dùng URL trang chủ (https://vnexpress.net, https://tuoitre.vn, https://nhandan.vn, https://www.bbc.com/vietnamese, v.v.)`

export async function analyzeViewpoint(viewpointText, chapterContext, viewpointId) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY

  if (!apiKey) {
    return getFallbackAnalysis(viewpointId)
  }

  const userPrompt = `Phân tích quan điểm sau theo 3 chiều (ủng hộ / phản bác / triết học Mác-Lênin):

Quan điểm: ${viewpointText}
Bối cảnh chương: ${chapterContext}

Tìm bằng chứng từ báo chí Việt Nam và quốc tế. Phân tích theo lăng kính triết học Mác-Lênin.`

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        max_tokens: 2500,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt },
        ],
        response_format: { type: 'json_object' },
      }),
    })

    if (!res.ok) throw new Error(`API error ${res.status}`)

    const data = await res.json()
    const parsed = JSON.parse(data.choices[0].message.content)

    // Validate minimum structure
    if (!parsed.supportingEvidence || !parsed.refutingEvidence || !parsed.philosophicalAnalysis) {
      throw new Error('Invalid response structure')
    }

    return { ok: true, data: parsed }
  } catch (err) {
    console.warn('OpenAI API failed, using fallback:', err.message)
    return getFallbackAnalysis(viewpointId)
  }
}

function getFallbackAnalysis(viewpointId) {
  const data = FALLBACK_ANALYSIS[viewpointId]
  if (data) {
    return { ok: true, data, isFallback: true }
  }
  return {
    ok: false,
    error: 'Quan điểm này chưa có đủ dẫn chứng báo chí — đây là khoảng trống nhận thức cần nghiên cứu thêm. Đây cũng là một phát hiện triết học.',
  }
}
