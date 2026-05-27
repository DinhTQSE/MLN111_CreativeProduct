export const POLL_QUESTIONS = [
  {
    id: 'q1',
    text: 'Bạn cảm thấy thuật toán mạng xã hội "hiểu" mình ở mức độ nào?',
    subtext: '(Ví dụ: gợi ý nội dung chính xác đến mức đáng sợ)',
    type: 'scale',
    options: [
      { value: 1, label: 'Không hề' },
      { value: 2, label: 'Đôi chút' },
      { value: 3, label: 'Khá nhiều' },
      { value: 4, label: 'Rất nhiều' },
      { value: 5, label: 'Đáng sợ' },
    ],
  },
  {
    id: 'q2',
    text: 'Trung bình mỗi ngày bạn dành bao nhiêu thời gian trên mạng xã hội?',
    type: 'choice',
    options: [
      { value: 'a', label: '< 1 giờ' },
      { value: 'b', label: '1 – 3 giờ' },
      { value: 'c', label: '3 – 5 giờ' },
      { value: 'd', label: '> 5 giờ' },
    ],
  },
  {
    id: 'q3',
    text: 'Bạn đồng ý với nhận định: "Mạng xã hội đang tha hóa tôi khỏi chính mình"?',
    subtext: '(Khiến bạn không còn hành động vì bản thân, mà vì lượt thích/follow)',
    type: 'likert',
    options: [
      { value: 1, label: 'Hoàn toàn không đồng ý' },
      { value: 2, label: 'Không đồng ý' },
      { value: 3, label: 'Trung lập' },
      { value: 4, label: 'Đồng ý' },
      { value: 5, label: 'Hoàn toàn đồng ý' },
    ],
  },
]

/* Pre-seeded "results" simulating 200 previous respondents */
export const SEED_RESULTS = {
  q1: { 1: 8, 2: 22, 3: 58, 4: 72, 5: 40 },
  q2: { a: 15, b: 68, c: 82, d: 35 },
  q3: { 1: 6, 2: 18, 3: 44, 4: 88, 5: 44 },
}

export const SEED_TOTAL = 200
