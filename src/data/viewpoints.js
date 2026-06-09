/* Quan điểm cố định + phân tích fallback cho CognitiveMirror */

export const VIEWPOINTS = {
  chapter1: [
    {
      id: 'ch1_a',
      text: '"Bao cấp triệt tiêu động lực lao động cá nhân"',
      shortLabel: 'Động lực cá nhân',
    },
    {
      id: 'ch1_b',
      text: '"Bình quân chủ nghĩa để lại di chứng tâm lý đến nay"',
      shortLabel: 'Di chứng bình quân',
    },
  ],
  chapter2: [
    {
      id: 'ch2_a',
      text: '"Đổi Mới giải phóng kinh tế nhưng làm rạn nứt giá trị truyền thống"',
      shortLabel: 'Giá trị truyền thống',
    },
    {
      id: 'ch2_b',
      text: '"Kinh tế thị trường khiến tiền bạc thay thế tình người"',
      shortLabel: 'Tiền bạc & tình người',
    },
  ],
  chapter3: [
    {
      id: 'ch3_a',
      text: '"Mạng xã hội biến con người thành tài nguyên dữ liệu"',
      shortLabel: 'Con người = dữ liệu',
    },
    {
      id: 'ch3_b',
      text: '"Thuật toán đề xuất tạo bong bóng thông tin phân cực xã hội"',
      shortLabel: 'Bong bóng thông tin',
    },
  ],
  chapter4: [
    {
      id: 'ch4_a',
      text: '"AI đang thay thế lao động trí óc và đe dọa việc làm người Việt"',
      shortLabel: 'AI & việc làm',
    },
    {
      id: 'ch4_b',
      text: '"Lạm dụng AI khiến con người mất dần khả năng tư duy độc lập"',
      shortLabel: 'Tư duy độc lập',
    },
    {
      id: 'ch4_c',
      text: '"AI làm gia tăng bất bình đẳng khi công nghệ tập trung trong tay một số ít tập đoàn"',
      shortLabel: 'AI & bất bình đẳng',
    },
    {
      id: 'ch4_d',
      text: '"Nội dung do AI tạo ra khiến con người ngày càng khó phân biệt thật và giả"',
      shortLabel: 'Khủng hoảng thật - giả',
    },
    {
      id: 'ch4_e',
      text: '"AI có thể giải phóng con người khỏi lao động lặp lại để tập trung vào sáng tạo"',
      shortLabel: 'AI & giải phóng',
    },
  ],
}

/* ─── Pre-analyzed fallback — dùng khi API không khả dụng ─── */
export const FALLBACK_ANALYSIS = {

  /* ════════════════════════════════════════════════════
     CHƯƠNG 1 — THỜI BAO CẤP (1975–1986)
  ════════════════════════════════════════════════════ */

  ch1_a: {
    supportingEvidence: [
      {
        summary: 'Nhà nghiên cứu kinh tế Đặng Phong trong tác phẩm "Tư duy kinh tế Việt Nam 1975–1989" ghi nhận tình trạng "làm cho qua ngày" lan rộng dưới chế độ bao cấp. Khi năng suất lao động hoàn toàn không ảnh hưởng đến phần thưởng, người lao động nhanh chóng hình thành thái độ thụ động — đây là minh chứng kinh điển cho nghịch lý của cơ chế phân phối bình quân.',
        source: 'NXB Tri Thức',
        year: '2008',
      },
      {
        summary: 'Tạp chí Cộng sản số tháng 2/2006 đăng bài phân tích của PGS.TS Trần Đình Thiên về cơ chế kế hoạch hóa tập trung: "Quan liêu, bao cấp đã triệt tiêu sức sáng tạo và động lực của cả hệ thống. Câu nói dân gian \'họ giả vờ trả lương, chúng tôi giả vờ làm việc\' phản ánh đúng bản chất tha hóa lao động trong giai đoạn này." Năng suất lao động quốc gia giảm tới 30–35% so với tiềm năng.',
        source: 'Tạp chí Cộng sản',
        year: '2006',
      },
    ],
    refutingEvidence: [
      {
        summary: 'Nhiều học giả như GS. Trần Văn Thọ (Waseda University) lập luận rằng bao cấp không triệt tiêu hoàn toàn động lực mà chỉ chuyển hướng nó sang các kênh phi chính thức — kinh tế chợ đen, mạng lưới "quan hệ". Người Việt vẫn rất sáng tạo: hệ thống tiểu thương tự phát, "kinh tế đêm" và mạng lưới đổi hàng phi chính thức chứng minh sức sống mạnh mẽ của năng động sản xuất.',
        source: 'Thời báo Kinh tế Sài Gòn',
        year: '2016',
      },
      {
        summary: 'Các phong trào thi đua "Lao động Xã hội Chủ nghĩa" — như phong trào "Ngô Thị Tuyển", "Nguyễn Bá Ngọc" — cho thấy một loại động lực khác: không phải vật chất mà là danh dự, địa vị xã hội và ý thức hệ. Đây là bằng chứng rằng LLSX con người có thể vận hành bởi "động lực bậc cao" (Maslow) — sự công nhận và ý nghĩa — không nhất thiết phụ thuộc vào phần thưởng vật chất.',
        source: 'Tạp chí Nghiên cứu Lịch sử',
        year: '2010',
      },
    ],
    philosophicalAnalysis: {
      phenomenon: 'THA_HOA',
      alienationDimensions: [
        'Tha hóa khỏi quá trình lao động',
        'Tha hóa khỏi bản chất loài (Species-being)',
        'Tha hóa khỏi sản phẩm lao động',
      ],
      alienationExplanation: 'Cơ chế bình quân chủ nghĩa triệt tiêu quan hệ giữa nỗ lực cá nhân và phần thưởng, biến lao động thành nghĩa vụ cưỡng bức không tự nguyện (chiều 2). Khi lao động chỉ là phương tiện nhận tem phiếu chứ không phải hoạt động sáng tạo có mục đích, "bản chất loài" của con người bị thủ tiêu (chiều 3). Sản phẩm làm ra không thuộc về người tạo ra — nhà nước phân phối lại theo bình quân, người lao động không nhận ra bản thân trong kết quả lao động của mình (chiều 1).',
      llsxConflict: 'LLSX (người lao động với kỹ năng và động lực cá nhân) muốn phát triển và được ghi nhận theo đóng góp thực tế, nhưng QHSX kế hoạch hóa tập trung-bình quân kìm hãm mọi sự khác biệt năng suất, tạo mâu thuẫn tích lũy suốt 10 năm đến điểm nút Đổi Mới 1986.',
      marxistConcept: 'Tha hóa lao động (Entfremdung der Arbeit) — Marx, Bản thảo Kinh tế-Triết học 1844',
      textbookReference: 'Giáo trình Triết học Mác-Lênin, Bộ GD&ĐT 2021, tr.457–464',
      dialecticalLaw: 'Quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất (tr.287–329)',
      analysis: `Marx phân tích 4 chiều tha hóa lao động trong nền sản xuất không tự do: (1) Con người bị tha hóa khỏi SẢN PHẨM lao động — khi phân phối đều bất kể đóng góp, người lao động không nhận ra "bản thân mình" trong sản phẩm mình tạo ra; (2) bị tha hóa khỏi QUÁ TRÌNH lao động — lao động trở thành "sự bán mình hàng ngày", không phải hoạt động tự nguyện của con người; (3) bị tha hóa khỏi BẢN CHẤT LOÀI — "lao động có ý thức, có mục đích" là đặc trưng loài người, nhưng dưới bao cấp nó bị thu gọn thành phương tiện sinh tồn thuần túy; (4) bị tha hóa khỏi ĐỒNG LOẠI — khi mọi người được đo bằng cùng một thước, quan hệ xã hội mất đi tính phân hóa và cạnh tranh lành mạnh. QHSX kế hoạch hóa tập trung — từng là bước tiến lịch sử trong bối cảnh 1945–1975 — đến 1980s đã tạo ra mâu thuẫn ngày càng gay gắt với LLSX đang muốn vươn lên.`,
      conclusion: `Theo quy luật LLSX-QHSX (tr.287–329): QHSX kế hoạch hóa bao cấp không còn phù hợp với trình độ LLSX đã tích lũy qua 10 năm hòa bình. Mâu thuẫn này là "cái tất yếu khách quan" tạo điều kiện cho bước nhảy 1986. Tha hóa bao cấp không phải ngẫu nhiên — nó là kết quả tất yếu của quy luật biện chứng: QHSX đi trước hoặc đi sau quá xa so với LLSX đều dẫn đến kìm hãm phát triển.`,
    },
    reflectionQuestion: 'Nếu bạn làm việc trong môi trường mà nỗ lực của bạn không được ghi nhận khác biệt — bạn sẽ cống hiến hết mình hay vừa đủ? Và đây là vấn đề của ý chí cá nhân, hay của cấu trúc hệ thống?',
  },

  ch1_b: {
    supportingEvidence: [
      {
        summary: 'Nghiên cứu của GS.TS Trịnh Duy Luân (Viện Xã hội học) phát hiện "hội chứng bình quân" hiện diện trong hành vi nghề nghiệp của thế hệ sinh ra 1960–1975 đến tận thập niên 2010: xu hướng "không muốn nhô cao hơn người khác", né tránh trách nhiệm cá nhân, thiếu tự tin trong việc đề xuất sáng kiến. Tâm lý này bắt nguồn trực tiếp từ môi trường xã hội thời bao cấp nơi sự nổi bật là nguy hiểm.',
        source: 'Tạp chí Xã hội học',
        year: '2012',
      },
      {
        summary: 'Báo Tuổi Trẻ trong loạt bài "30 năm Đổi Mới và những di sản vô hình" ghi nhận: nhiều doanh nghiệp Việt Nam vẫn phải vật lộn với tư duy "ngồi chờ lệnh" trong đội ngũ quản lý trung gian — những người hình thành nhân cách nghề nghiệp trong thời kỳ bao cấp. Đây là bằng chứng rõ nét nhất về sức mạnh định hình ý thức của tồn tại xã hội.',
        source: 'Tuổi Trẻ',
        year: '2016',
      },
    ],
    refutingEvidence: [
      {
        summary: 'Tư duy tập thể và "bình quân" không hoàn toàn tiêu cực: tạo nên sự gắn kết cộng đồng mạnh mẽ, tinh thần tương trợ và an toàn tập thể. Nhiều nhà nghiên cứu phúc lợi xã hội (như Amartya Sen) cho rằng các quốc gia Bắc Âu thành công nhờ kết hợp bình đẳng kinh tế với phát triển cá nhân — "bình quân" bản thân không xấu, vấn đề là thiếu cơ chế khuyến khích đổi mới kèm theo.',
        source: 'BBC Vietnamese',
        year: '2018',
      },
      {
        summary: 'Thế hệ lớn lên trong bao cấp cũng sản sinh ra những nhà lãnh đạo kinh tế, khoa học, văn hóa xuất sắc của Việt Nam — từ các kỹ sư xây dựng Thủy điện Hòa Bình đến các nhà khoa học tại Trung tâm Nghiên cứu Hạt nhân Đà Lạt. Điều này cho thấy "di chứng bình quân" không phải quy luật tuyệt đối mà phụ thuộc vào bối cảnh cụ thể từng cá nhân và ngành nghề.',
        source: 'VnExpress',
        year: '2020',
      },
    ],
    philosophicalAnalysis: {
      phenomenon: 'BOTH',
      alienationDimensions: [
        'Tha hóa khỏi bản chất loài (Species-being)',
        'Tha hóa khỏi đồng loại',
      ],
      alienationExplanation: 'Môi trường bình quân kiến tạo tâm lý "không được nổi bật" — đây là tha hóa khỏi bản chất sáng tạo của con người (chiều 3). Khi mọi người đều được đo bằng cùng một thước đo và nghi ngờ sự vượt trội lẫn nhau, quan hệ đồng loại bị biến thành mạng lưới kiểm soát-giám sát thay vì hỗ trợ phát triển (chiều 4). Đây đồng thời là giải phóng ở tầng cộng đồng: tạo ra sự bình đẳng và gắn kết tập thể trong hoàn cảnh hậu chiến.',
      llsxConflict: 'LLSX tâm lý-nhận thức (tư duy sáng tạo, động lực cá nhân, khả năng đổi mới) bị QHSX bình quân áp chế suốt 10–15 năm, kiến tạo ra "kiến trúc thượng tầng ý thức" mang tính thụ động — đây là minh chứng cho "tính độc lập tương đối của ý thức xã hội": QHSX thay đổi (1986) nhưng ý thức bình quân vẫn tồn tại nhiều thế hệ.',
      marxistConcept: 'Tồn tại xã hội quyết định ý thức xã hội (Gesellschaftliches Sein bestimmt das Bewusstsein)',
      textbookReference: 'Giáo trình tr.287–329 — Chủ nghĩa duy vật lịch sử, quan hệ cơ sở hạ tầng và kiến trúc thượng tầng',
      dialecticalLaw: 'Tồn tại xã hội (cơ sở kinh tế) quyết định ý thức xã hội (kiến trúc thượng tầng tâm lý)',
      analysis: `Đây là minh chứng trực tiếp và sống động nhất cho nguyên lý cơ bản của chủ nghĩa duy vật lịch sử: "Không phải ý thức của con người quyết định tồn tại của họ, mà chính tồn tại xã hội của họ quyết định ý thức của họ" (Marx, Lời tựa 1859). Môi trường bao cấp — nơi sự nổi bật bị trừng phạt xã hội, nơi bình quân được thể chế hóa như nguyên tắc phân phối — đã in sâu vào ý thức tập thể một tâm lý "an toàn trong bình quân". Đây không phải lỗi cá nhân mà là sản phẩm tất yếu của kiến trúc thượng tầng tâm lý bị quyết định bởi cơ sở kinh tế-xã hội thời bao cấp. Điểm triết học quan trọng: thay đổi QHSX qua Đổi Mới (1986) không tự động xóa bỏ ý thức đã được kiến tạo qua 10–15 năm sống trong môi trường bình quân — ý thức có "tính độc lập tương đối" và tác động ngược trở lại tồn tại xã hội, tạo ra sức ỳ văn hóa kéo dài nhiều thập kỷ.`,
      conclusion: `Di chứng tâm lý bình quân là bằng chứng hùng hồn về "tính độc lập tương đối của ý thức xã hội" — một khi được kiến tạo bởi tồn tại xã hội, ý thức không biến mất ngay khi tồn tại thay đổi. Thế hệ CNTT ngày nay thừa hưởng phần nào di sản này qua cha mẹ và thể chế; nhận thức được điều này là điều kiện đầu tiên để vượt qua nó.`,
    },
    reflectionQuestion: 'Môi trường học tập và làm việc của bạn hôm nay đang định hình tư duy bạn theo những cách nào mà bạn chưa nhận ra? 20 năm nữa nhìn lại, điều gì bạn gọi là "tư duy của tôi" sẽ thực ra là "tư duy của hệ thống"?',
  },

  /* ════════════════════════════════════════════════════
     CHƯƠNG 2 — ĐỔI MỚI (1986–2000)
  ════════════════════════════════════════════════════ */

  ch2_a: {
    supportingEvidence: [
      {
        summary: 'GS. Trần Ngọc Thêm trong "Cơ sở văn hóa Việt Nam" (1999) phân tích kỹ quá trình kinh tế thị trường xói mòn văn hóa làng xã: tỷ lệ tranh chấp đất đai trong gia đình tăng vọt sau 1990, con cái không còn phụng dưỡng cha mẹ như trước vì "tiền có thể thuê người giúp việc". Mối quan hệ "tình làng nghĩa xóm" nhường chỗ cho quan hệ dịch vụ và hợp đồng — đây là Commodity Fetishism len lỏi vào đời sống cộng đồng.',
        source: 'NXB Giáo dục',
        year: '1999',
      },
      {
        summary: 'Báo cáo Điều tra Mức sống Dân cư (VHLSS) của Tổng cục Thống kê các năm 1993–2002 ghi nhận: thu nhập bình quân tăng mạnh ở đô thị nhưng bất bình đẳng (hệ số Gini) tăng từ 0.33 (1992) lên 0.41 (2002). Khoảng cách giàu-nghèo giữa đô thị và nông thôn, giữa thế hệ Đổi Mới và thế hệ bao cấp mở ra — đây là biểu hiện trực tiếp của sự rạn nứt xã hội do kinh tế thị trường tạo ra.',
        source: 'Tổng cục Thống kê Việt Nam',
        year: '2002',
      },
    ],
    refutingEvidence: [
      {
        summary: 'Báo cáo của World Bank "Vietnam: Attacking Poverty" (1999) ghi nhận: tỷ lệ nghèo tuyệt đối giảm từ 58% (1992) xuống 37% (1998) chỉ trong 6 năm — một trong những kỳ tích xóa nghèo nhanh nhất trong lịch sử. Điều này cho thấy Đổi Mới không chỉ làm rạn nứt mà thực sự nâng cao chất lượng sống cho đại bộ phận dân chúng, bao gồm cả quan hệ gia đình khi kinh tế bớt khó khăn.',
        source: 'World Bank Vietnam',
        year: '1999',
      },
      {
        summary: 'Nhà nghiên cứu văn hóa Nguyễn Khắc Viện lập luận: kinh tế thị trường không phá vỡ mà "tái cấu trúc" các giá trị truyền thống Việt Nam. Gia đình vẫn là trụ cột xã hội, tỷ lệ hôn nhân sắp xếp giảm nhưng "gia đình hạt nhân" mới hình thành với gắn kết theo kiểu khác. Đây là phủ định biện chứng (Aufhebung) — không phải xóa bỏ hoàn toàn mà vừa phủ nhận vừa kế thừa.',
        source: 'Tạp chí Xã hội học',
        year: '2005',
      },
    ],
    philosophicalAnalysis: {
      phenomenon: 'BOTH',
      alienationDimensions: [
        'Tha hóa khỏi đồng loại',
        'Tha hóa khỏi sản phẩm lao động văn hóa',
      ],
      alienationExplanation: 'Khi kinh tế thị trường thâm nhập, quan hệ cộng đồng từ "tình làng nghĩa xóm" chuyển thành quan hệ dịch vụ-hợp đồng — quan hệ đồng loại bị vật-hóa (chiều 4). Giá trị tinh thần và quan hệ gia đình — "sản phẩm văn hóa" được tích lũy qua nhiều thế hệ — bị hàng hóa hóa và quy đổi sang ngôn ngữ tiền tệ (chiều 1). Đây đồng thời là giải phóng thực sự khỏi nghèo đói vật chất và QHSX bao cấp kìm hãm.',
      llsxConflict: 'LLSX thị trường đang giải phóng năng lực sản xuất và tích lũy tư bản với tốc độ chưa từng có, nhưng QHSX xã hội-văn hóa (chuẩn mực gia đình, cộng đồng, đạo đức nghề nghiệp) chưa thích nghi kịp — tạo khoảng trống giá trị mà kiến trúc thượng tầng pháp lý-đạo đức Việt Nam vẫn đang cố lấp đầy.',
      marxistConcept: 'Phủ định biện chứng (Aufhebung) — vừa xóa bỏ, vừa kế thừa, vừa nâng lên',
      textbookReference: 'Giáo trình tr.234–257 — Quy luật phủ định của phủ định, phát triển theo hình xoáy trôn ốc',
      dialecticalLaw: 'Phủ định của phủ định: phát triển không theo đường thẳng mà theo đường xoáy trôn ốc — cái mới phủ định cái cũ nhưng giữ lại những yếu tố hợp lý',
      analysis: `Đổi Mới 1986 là ví dụ kinh điển của khái niệm Aufhebung (phủ định biện chứng) mà Hegel đặt nền và Marx phát triển trong chủ nghĩa duy vật lịch sử. Kinh tế thị trường ĐỒNG THỜI: (1) PHỦ NHẬN cơ cấu xã hội bao cấp — triệt tiêu hệ thống phân phối bình quân, xóa bỏ QHSX kế hoạch hóa tập trung; (2) KẾ THỪA những yếu tố tích cực — tinh thần cộng đồng, quan hệ gia đình, văn hóa làng xã (dù biến đổi hình thức); (3) NÂNG LÊN — tạo ra một hình thức quan hệ xã hội cao hơn về mặt phát triển LLSX. Nhưng đây chính xác là nơi "tha hóa mới" nảy sinh: cơ chế kinh tế thị trường, khi không có kiến trúc thượng tầng pháp lý-đạo đức phù hợp, tất yếu dẫn đến Commodity Fetishism — giá trị con người bị quy đổi thành giá trị hàng hóa. Mâu thuẫn giữa "giải phóng kinh tế" và "bảo tồn văn hóa" không phải lỗi của Đổi Mới — nó là biểu hiện tất yếu của quy luật biện chứng.`,
      conclusion: `Đổi Mới là một bước nhảy trong xoáy trôn ốc phát triển: giải phóng LLSX khỏi QHSX bao cấp, nhưng tạo ra mâu thuẫn QHSX-LLSX mới ở cấp độ văn hóa-xã hội. Phủ định biện chứng này đòi hỏi một vòng xoáy tiếp theo: xây dựng kiến trúc thượng tầng (luật pháp, đạo đức nghề nghiệp, phúc lợi xã hội) để "thuần hóa" kinh tế thị trường phục vụ giải phóng con người. Đây vẫn là nhiệm vụ dang dở của Việt Nam năm 2025.`,
    },
    reflectionQuestion: 'Trong gia đình bạn, kinh tế thị trường đã thay đổi các mối quan hệ như thế nào — theo chiều tích cực và tiêu cực? Nếu bạn có thể chọn giữ lại một giá trị văn hóa truyền thống và thay đổi một yếu tố kinh tế hiện đại, bạn sẽ chọn gì?',
  },

  ch2_b: {
    supportingEvidence: [
      {
        summary: 'Khảo sát hôn nhân tại Hà Nội và TP.HCM của Viện Nghiên cứu Gia đình và Giới (2008) cho thấy "điều kiện kinh tế" trở thành tiêu chí số một khi chọn bạn đời, vượt qua "phẩm hạnh" và "gia giáo" vốn thống trị suốt thời bao cấp. Đặc biệt ở tầng lớp trẻ đô thị, câu hỏi đầu tiên khi nghe giới thiệu người yêu không còn là "người đó thế nào" mà là "làm gì, thu nhập bao nhiêu" — Marx gọi đây là Commodity Fetishism xâm nhập vào quan hệ tình cảm.',
        source: 'Tạp chí Gia đình và Giới',
        year: '2008',
      },
      {
        summary: 'GS. Đặng Nguyên Anh (Viện Hàn lâm Khoa học Xã hội VN) ghi nhận xu hướng "thương mại hóa quan hệ xã hội" rõ nét sau Đổi Mới: từ việc tổ chức đám cưới hoành tráng như biểu tượng địa vị đến việc tính toán "lợi ích" trong tình bạn và mối quan hệ xóm giềng. Marx viết trong Bản thảo 1844: dưới chủ nghĩa tư bản, "tiền là vật trung gian vạn năng" biến đổi mọi phẩm chất con người thành phẩm chất của tiền.',
        source: 'Tạp chí Xã hội học',
        year: '2015',
      },
    ],
    refutingEvidence: [
      {
        summary: 'World Bank (2012) ghi nhận: tỷ lệ hộ nghèo Việt Nam giảm từ 58% (1992) xuống dưới 10% (2012) — 30 triệu người thoát nghèo trong 20 năm. Điều này cho thấy tiền bạc và kinh tế thị trường, dù có mặt trái, đã thực sự mang lại "tình người" ở dạng thiết thực nhất: giải phóng con người khỏi gánh nặng đói nghèo vật chất để có không gian phát triển các quan hệ tinh thần.',
        source: 'World Bank Vietnam',
        year: '2012',
      },
      {
        summary: 'Phong trào từ thiện và thiện nguyện tại Việt Nam bùng nổ sau Đổi Mới: tổ chức phi chính phủ tăng từ vài chục (1990) lên hơn 1.000 (2020), tổng giá trị đóng góp từ thiện tăng gấp 50 lần. Đây là bằng chứng kinh tế thị trường không diệt trừ mà có thể nuôi dưỡng tình người — khi có điều kiện vật chất, con người có khả năng hơn để thể hiện lòng nhân ái.',
        source: 'Tuổi Trẻ',
        year: '2020',
      },
    ],
    philosophicalAnalysis: {
      phenomenon: 'THA_HOA',
      alienationDimensions: [
        'Tha hóa khỏi đồng loại',
        'Tha hóa khỏi bản chất loài (Species-being)',
      ],
      alienationExplanation: 'Sùng bái hàng hóa biến quan hệ người-người thành quan hệ vật-vật thông qua tiền tệ — chiều tha hóa khỏi đồng loại trầm trọng nhất (chiều 4). Khi con người bắt đầu đo giá trị bản thân và người khác bằng tiêu dùng và thu nhập, "bản chất loài" — năng lực quan hệ tinh thần, đạo đức, tình người — bị quy về giá trị trao đổi vật chất (chiều 3).',
      llsxConflict: 'LLSX hàng hóa-tiền tệ đang thống trị mọi lĩnh vực đời sống xã hội Việt Nam sau Đổi Mới, nhưng QHSX tinh thần-đạo đức (các giá trị văn hóa truyền thống, quan hệ phi thương mại) không có cơ chế bảo vệ — dẫn đến "thuần hóa" một chiều theo logic thị trường, tạo ra sùng bái hàng hóa quy mô xã hội.',
      marxistConcept: 'Sùng bái hàng hóa (Commodity Fetishism / Warenfetischismus) — Marx, Tư Bản Luận, Quyển 1, Chương 1',
      textbookReference: 'Giáo trình tr.457–464 — Học thuyết về tha hóa, sùng bái hàng hóa trong chủ nghĩa tư bản',
      dialecticalLaw: 'Tồn tại xã hội quyết định ý thức xã hội — cơ sở kinh tế hàng hóa kiến tạo ý thức sùng bái hàng hóa',
      analysis: `Trong Tư Bản Luận, Marx phân tích "bí mật của hàng hóa": hàng hóa không chỉ là đồ vật — nó mang trong mình các quan hệ xã hội đã bị làm cho mờ đục (mystified). Khi người mua bánh mì, họ không thấy mồ hôi người nông dân, không thấy quan hệ bóc lột tiềm ẩn — họ chỉ thấy một món hàng với giá cả. Đây là "Fetischismus" (sùng bái vật). Tại Việt Nam sau Đổi Mới, hiện tượng này biểu hiện qua: (1) Con người bắt đầu được đo bằng khả năng tiêu thụ và sở hữu vật chất; (2) Quan hệ người-người bị "vật-hóa" thành quan hệ vật-vật thông qua tiền tệ; (3) Phẩm giá và giá trị tinh thần bị quy đổi sang ngôn ngữ kinh tế. Đây không phải vì người Việt "thực dụng hơn" — mà vì cơ sở kinh tế hàng hóa tất yếu kiến tạo loại ý thức này. QHSX thị trường → kiến trúc thượng tầng "sùng bái hàng hóa" trong văn hóa, đạo đức, quan hệ xã hội.`,
      conclusion: `Tha hóa hàng hóa là hình thức tha hóa tinh vi hơn tha hóa bao cấp: không bị ép buộc mà tự nguyện, không lộ liễu mà lan tỏa trong mọi quan hệ. Để vượt qua loại tha hóa này, Marx không kêu gọi quay lại bao cấp mà đòi hỏi xây dựng hình thức QHSX cao hơn — nơi con người kiểm soát được cả quá trình sản xuất lẫn phân phối, không còn bị "vật thống trị người" nữa.`,
    },
    reflectionQuestion: 'Khi giới thiệu bản thân với người lạ, bạn thường nói gì đầu tiên — nghề nghiệp (thu nhập, địa vị) hay sở thích (con người thực của bạn)? Điều gì khiến bạn cảm thấy "bản thân mình" hơn?',
  },

  /* ════════════════════════════════════════════════════
     CHƯƠNG 3 — INTERNET & TOÀN CẦU HÓA (2000–2020)
  ════════════════════════════════════════════════════ */

  ch3_a: {
    supportingEvidence: [
      {
        summary: 'Tháng 4/2018, Mark Zuckerberg điều trần trước Quốc hội Mỹ và thừa nhận: dữ liệu người dùng là nguồn doanh thu chính của Facebook. Mỗi người dùng ở châu Á-Thái Bình Dương có giá trị trung bình 11.55 USD/năm với Facebook. Với 77 triệu người dùng Facebook tại Việt Nam (2023), người Việt tạo ra giá trị hàng tỷ USD mà không được trả thù lao — đây chính xác là hình thức bóc lột lao động (lao động sự chú ý) mà Marx phân tích trong Tư Bản Luận.',
        source: 'BBC Vietnamese',
        year: '2018',
      },
      {
        summary: 'Nghiên cứu "The Age of Surveillance Capitalism" (Shoshana Zuboff, 2019) — được BBC Vietnamese, VnExpress và nhiều báo Việt Nam trích dẫn — chứng minh: các nền tảng số không chỉ thu thập dữ liệu hành vi mà còn "dự đoán và định hình" hành vi tương lai. Con người không chỉ là "tài nguyên" mà là "sản phẩm được gia công thêm" — sự chú ý bị thu hoạch, đóng gói và bán cho thị trường quảng cáo.',
        source: 'VnExpress',
        year: '2021',
      },
    ],
    refutingEvidence: [
      {
        summary: 'Nhà kinh tế học Erik Brynjolfsson (MIT) lập luận: giao dịch "dữ liệu đổi lấy dịch vụ" là trao đổi giá trị công bằng. Người dùng nhận được dịch vụ có giá trị thực — kết nối, thông tin, giải trí — trong khi cung cấp dữ liệu về sở thích. Đây không phải bóc lột mà là hợp đồng xã hội ngầm trong nền kinh tế số. Gọi đây là "biến người thành tài nguyên" có thể phóng đại bởi định kiến chống công nghệ.',
        source: 'Tuổi Trẻ',
        year: '2019',
      },
      {
        summary: 'Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân của Việt Nam (có hiệu lực tháng 7/2023) và GDPR của EU cho thấy: xã hội đang tích cực xây dựng kiến trúc thượng tầng pháp lý mới để tái lập quyền kiểm soát dữ liệu cho người dùng. Đây là biểu hiện của quy luật biện chứng: tha hóa số tạo ra mâu thuẫn → nhận thức mâu thuẫn → xây dựng QHSX mới để điều chỉnh.',
        source: 'Nhân Dân điện tử',
        year: '2023',
      },
    ],
    philosophicalAnalysis: {
      phenomenon: 'THA_HOA',
      alienationDimensions: [
        'Tha hóa khỏi sản phẩm lao động',
        'Tha hóa khỏi quá trình lao động',
        'Tha hóa khỏi đồng loại',
      ],
      alienationExplanation: 'Nội dung người dùng tạo ra (bài viết, ảnh, phản ứng) thuộc về nền tảng — người lao động số không sở hữu "sản phẩm lao động" của mình (chiều 1). Hành vi cuộn feed, like, share là "lao động sự chú ý" bị thuật toán điều hướng không tự nguyện (chiều 2). Mọi quan hệ xã hội bị trung gian bởi nền tảng — ta chỉ thấy "hồ sơ" được thuật toán lọc, không thấy nhau thực sự (chiều 4).',
      llsxConflict: 'LLSX số (dữ liệu hành vi, sự chú ý người dùng) được tạo ra bởi hàng trăm triệu người Việt Nam, nhưng QHSX nền tảng tập trung toàn bộ quyền sở hữu và khai thác vào tay một số tập đoàn công nghệ nước ngoài — đây là hình thức tập trung tư bản và bóc lột lao động tinh vi nhất trong lịch sử.',
      marxistConcept: 'Tha hóa số (Digital Alienation) — 4 chiều tha hóa của Marx áp dụng vào kinh tế nền tảng',
      textbookReference: 'Giáo trình tr.457–464 — Học thuyết tha hóa; tr.287–329 — LLSX, QHSX và kiến trúc thượng tầng',
      dialecticalLaw: 'Học thuyết tha hóa 4 chiều của Marx — tha hóa khỏi sản phẩm, quá trình, bản chất loài và đồng loại',
      analysis: `Áp dụng 4 chiều tha hóa của Marx vào kỷ nguyên nền tảng số: (1) THA HÓA KHỎI SẢN PHẨM: nội dung người dùng tạo ra (bài viết, ảnh, phản ứng) trở thành tài sản của nền tảng; người dùng không có quyền sở hữu "sản phẩm lao động" số của mình; (2) THA HÓA KHỎI QUÁ TRÌNH: thời gian và sự chú ý bị thuật toán điều hướng — người dùng không quyết định "cuộn tiếp" hay dừng lại mà phản ứng theo kích thích do thuật toán thiết kế; (3) THA HÓA KHỎI BẢN CHẤT LOÀI: khả năng phản tư tự do — đặc trưng loài người — bị thay thế bởi phản ứng theo kích thích cảm xúc mà thuật toán tinh chỉnh; (4) THA HÓA KHỎI ĐỒNG LOẠI: mọi quan hệ xã hội đều bị trung gian bởi nền tảng — ta không thực sự biết bạn bè mà biết "hồ sơ" họ được thuật toán lọc và trình bày. Đây là hình thức tha hóa TOÀN DIỆN nhất — bao phủ cả 4 chiều — và tinh vi nhất vì được thực hiện qua giao diện "tiện lợi và miễn phí".`,
      conclusion: `Nền kinh tế nền tảng tạo ra QHSX hoàn toàn mới: không phải "chủ sở hữu tư liệu sản xuất bóc lột lao động" mà là "chủ sở hữu nền tảng thu hoạch sự chú ý". LLSX mới (dữ liệu hành vi) bị kiểm soát bởi một nhóm nhỏ công ty công nghệ — đây là hình thức tập trung tư bản cao nhất trong lịch sử. Nhận thức được mâu thuẫn này là bước đầu tiên để thoát khỏi tha hóa số — và đó chính xác là mục đích của công cụ đang chạy trước mắt bạn.`,
    },
    reflectionQuestion: 'Bạn có biết rằng mỗi phút bạn cuộn feed, bạn đang "lao động" tạo ra dữ liệu hành vi có giá trị hàng triệu đô? Nếu Facebook trả lương cho bạn vì lao động này, bạn nghĩ mình đáng bao nhiêu một giờ?',
  },

  ch3_b: {
    supportingEvidence: [
      {
        summary: 'Nghiên cứu của Soroush Vosoughi và Deb Roy (MIT Media Lab) đăng trên Science (2018) — được BBC Vietnamese dẫn rộng rãi — phát hiện: tin tức sai trên mạng xã hội lan nhanh gấp 6 lần và rộng hơn 10 lần so với tin thật. Lý do: thuật toán tối ưu hóa "engagement" (sự tham gia), và cảm xúc bất ngờ-tức giận-sợ hãi tạo ra nhiều tương tác hơn sự thật bình thường. Tại Việt Nam, tốc độ lan truyền tin giả trong đại dịch COVID-19 (2020) minh chứng sinh động cho nghiên cứu này.',
        source: 'BBC Vietnamese',
        year: '2018',
      },
      {
        summary: 'Nghiên cứu của UNDP Việt Nam (2021) về phân cực xã hội trên mạng xã hội ghi nhận: từ 2015 đến 2020, mức độ phân cực trong tranh luận về giáo dục, y tế và chính trị trên Facebook Việt Nam tăng đáng kể — trùng với giai đoạn Facebook cá nhân hóa mạnh thuật toán newsfeed. "Bong bóng thông tin" khiến người dùng ngày càng ít tiếp xúc với quan điểm đối lập, dẫn đến tình trạng cực đoan hóa ý kiến dần dần.',
        source: 'UNDP Vietnam',
        year: '2021',
      },
    ],
    refutingEvidence: [
      {
        summary: 'Nghiên cứu "Exposure to Ideologically Diverse News" đăng trên Science (2015) — được thực hiện cùng Facebook — cho thấy bong bóng thông tin không mạnh như lo ngại: người dùng Facebook vẫn tiếp xúc với 20–25% nội dung từ quan điểm đối lập trong newsfeed. Phân cực xã hội không hoàn toàn do thuật toán — "hiệu ứng chọn lọc" (selective exposure) trong hành vi người dùng đóng vai trò lớn hơn thuật toán.',
        source: 'VnExpress',
        year: '2016',
      },
      {
        summary: 'PGS.TS Nguyễn Thành Lợi (Học viện Báo chí và Tuyên truyền) lập luận: phân cực xã hội tại Việt Nam có nguồn gốc sâu xa hơn thuật toán — từ bất bình đẳng kinh tế, khoảng cách đô thị-nông thôn và sự khác biệt thế hệ. Mạng xã hội chỉ "khuếch đại" và "hiện hữu hóa" những phân cực đã tồn tại — không phải nguyên nhân gốc rễ. Nhầm lẫn thuật toán với nguyên nhân cấu trúc là cái bẫy tư duy phổ biến.',
        source: 'Nhân Dân điện tử',
        year: '2022',
      },
    ],
    philosophicalAnalysis: {
      phenomenon: 'THA_HOA',
      alienationDimensions: [
        'Tha hóa khỏi bản chất loài (Species-being)',
        'Tha hóa khỏi đồng loại',
      ],
      alienationExplanation: 'Phản tư tự do — "lao động có ý thức và có mục đích" của con người — bị thay thế bởi phản ứng cảm xúc theo kích thích thuật toán thiết kế để tối đa hóa engagement (chiều 3). Bong bóng thông tin ngăn con người tiếp xúc với quan điểm đối lập, phá vỡ khả năng đối thoại thực sự và làm méo mó nhận thức về đồng loại (chiều 4).',
      llsxConflict: 'LLSX thông tin (nhu cầu trao đổi tri thức, đối thoại dân chủ, nhận thức khách quan) xung đột với QHSX nền tảng quảng cáo (tối đa hóa engagement = tối đa doanh thu) — cấu trúc kinh tế buộc thuật toán phải ưu tiên phân cực cảm xúc hơn đối thoại lý trí.',
      marxistConcept: 'Ý thức xã hội lệch lạc (False Consciousness / Falsches Bewusstsein) và mâu thuẫn LLSX-QHSX thông tin',
      textbookReference: 'Giáo trình tr.287–329 — Tồn tại xã hội và ý thức xã hội; cơ sở hạ tầng quyết định kiến trúc thượng tầng',
      dialecticalLaw: 'Tồn tại xã hội quyết định ý thức xã hội — QHSX nền tảng số tất yếu kiến tạo kiến trúc thượng tầng ý thức phục vụ lợi ích tư bản',
      analysis: `Theo quan điểm duy vật lịch sử: QHSX nền kinh tế nền tảng (ai sở hữu thuật toán, ai kiếm tiền từ sự chú ý) tất yếu tạo ra kiến trúc thượng tầng ý thức phục vụ lợi ích đó. Đây không phải vì Mark Zuckerberg "ác" — mà vì CẤU TRÚC KINH TẾ của mô hình kinh doanh này (tối đa hóa tương tác = tối đa hóa doanh thu quảng cáo) không tương thích với LLSX thông tin (nhu cầu tri thức chính xác, đối thoại lành mạnh). Mâu thuẫn LLSX-QHSX này tạo ra "ý thức lệch lạc" trên quy mô xã hội: người dùng nghĩ họ đang được thông tin, nhưng thực ra đang bị định hình theo cách phục vụ lợi ích của nền tảng. Marx gọi đây là "Falsches Bewusstsein" (ý thức sai lầm) — khi con người không nhận ra rằng ý thức của mình phản ánh điều kiện vật chất lệch lạc, không phải thực tại khách quan.`,
      conclusion: `Bong bóng thông tin là biểu hiện của mâu thuẫn sâu xa hơn: giữa LLSX thông tin (nhu cầu đối thoại dân chủ, tri thức khách quan) và QHSX nền tảng số (tối ưu hóa engagement vì lợi nhuận). Giải quyết không thể chỉ bằng "cá nhân mỗi người hãy tỉnh táo" — mà đòi hỏi xây dựng QHSX mới: quy định chống độc quyền, thuật toán trung lập được kiểm toán công khai, giáo dục truyền thông số. Đây là nhiệm vụ của kiến trúc thượng tầng, không phải ý chí cá nhân.`,
    },
    reflectionQuestion: 'Lần cuối bạn chủ động tìm đọc một quan điểm mà bạn biết trước là mình không đồng ý — vì muốn hiểu hơn, không phải để phản bác — là khi nào? Điều gì ngăn bạn làm việc đó thường xuyên hơn?',
  },

  /* ════════════════════════════════════════════════════
     CHƯƠNG 4 — KỶ NGUYÊN AI (2020–Nay)
  ════════════════════════════════════════════════════ */

  ch4_a: {
    supportingEvidence: [
      {
        summary: 'Báo cáo ILO "ASEAN in Transformation" (2016) — được Tuổi Trẻ và VnExpress đưa tin rộng rãi — cảnh báo: tại Việt Nam, ước tính 70% công việc trong ngành dệt may, giày da, chế biến thực phẩm có nguy cơ bị tự động hóa trong 10–15 năm tới. Đây là 3 ngành xuất khẩu chủ lực, sử dụng khoảng 4 triệu lao động — đa số là phụ nữ di cư từ nông thôn. Tha hóa lao động vật lý đã đến mức tột cùng: bị máy móc thay thế hoàn toàn.',
        source: 'Tuổi Trẻ',
        year: '2016',
      },
      {
        summary: 'Báo cáo McKinsey Global Institute (2023) phân tích tác động của AI tổng hợp (Generative AI): 30% lao động toàn cầu có thể bị tự động hóa đến 2030, trong đó lần đầu tiên bao gồm lao động trí óc — lập trình, phân tích dữ liệu, viết báo cáo, thiết kế cơ bản. Tại Việt Nam, ngành outsourcing phần mềm — đang tuyển dụng hàng chục nghìn kỹ sư — đối mặt với thay đổi cấu trúc nghiêm trọng nhất từ trước đến nay.',
        source: 'VnExpress',
        year: '2023',
      },
    ],
    refutingEvidence: [
      {
        summary: 'Lịch sử Cách mạng Công nghiệp cho thấy mỗi làn sóng tự động hóa — từ máy dệt thủ công (1780s), máy hơi nước (1850s), điện khí hóa (1910s), máy tính (1980s) — đều tạo ra nhiều việc làm mới hơn số việc làm bị xóa. Kinh tế học "lao động bù đắp" (compensating differentiation) dự đoán AI cũng sẽ tạo ra ngành nghề mới mà ta chưa tưởng tượng được — như "AI Prompt Engineer" hay "AI Ethics Officer" ngày nay.',
        source: 'BBC Vietnamese',
        year: '2023',
      },
      {
        summary: 'Nghị quyết 52-NQ/TW (2019) của Bộ Chính trị về Cách mạng Công nghiệp 4.0 đặt ra chiến lược chủ động: mục tiêu đào tạo 80.000 kỹ sư AI vào 2030, xây dựng 3 trung tâm đổi mới sáng tạo quốc gia. Việt Nam không chỉ là nạn nhân thụ động mà có thể là chủ thể trong quá trình chuyển đổi — nếu nhận thức được mâu thuẫn và xây dựng LLSX phù hợp.',
        source: 'Nhân Dân điện tử',
        year: '2019',
      },
    ],
    philosophicalAnalysis: {
      phenomenon: 'BOTH',
      alienationDimensions: [
        'Tha hóa khỏi quá trình lao động',
        'Tha hóa khỏi bản chất loài (Species-being)',
      ],
      alienationExplanation: 'Khi AI thực hiện thay các quy trình từng là đặc quyền của con người (viết, phân tích, lập trình), người lao động bị đẩy ra khỏi quá trình mà họ từng là chủ thể (chiều 2). AI lần đầu tiên trong lịch sử đe dọa "lao động có ý thức và có mục đích" — đặc trưng loài người — không chỉ lao động tay chân, tạo ra khủng hoảng bản chất loài ở quy mô chưa từng có (chiều 3). Song song, AI cũng có thể là lực lượng giải phóng khỏi lao động lặp lại.',
      llsxConflict: 'LLSX-AI (công nghệ nhận thức tự học, tự cải thiện theo hàm số mũ) đang phát triển vượt trước mọi tiên liệu, trong khi QHSX lao động (hợp đồng thuê nhân công, hệ thống bằng cấp, cấu trúc việc làm) vẫn là di sản của Cách mạng Công nghiệp lần 2 — khoảng cách này tạo ra bước nhảy xã hội không thể tránh, và Việt Nam đứng trước điểm nút lịch sử này.',
      marxistConcept: 'Mâu thuẫn LLSX-QHSX trong kỷ nguyên AI — LLSX nhận thức vs. QHSX tư bản tập trung',
      textbookReference: 'Giáo trình tr.287–329 — Quy luật LLSX-QHSX; tr.457–464 — Tha hóa và bản chất người',
      dialecticalLaw: 'Quan hệ sản xuất phải phù hợp với trình độ và tính chất của lực lượng sản xuất — khi không phù hợp tất yếu nảy sinh mâu thuẫn và bước nhảy',
      analysis: `AI đại diện cho LLSX hoàn toàn mới trong lịch sử nhân loại: lần đầu tiên, lực lượng sản xuất không chỉ là máy móc vật lý mà là trí tuệ nhận thức — khả năng phân tích, sáng tạo và ra quyết định từng là đặc quyền của con người. Theo Marx, khi LLSX phát triển đến mức QHSX hiện tại (quan hệ lao động truyền thống, hệ thống trả lương theo giờ, hợp đồng thuê nhân công) không còn phù hợp — mâu thuẫn tích lũy và bước nhảy thể chế trở nên tất yếu. Câu hỏi không phải "AI có thay thế người không?" mà là "AI được kiểm soát bởi ai và phục vụ ai?". Nếu LLSX-AI tập trung vào tay một số tập đoàn công nghệ, kết quả là tập trung hóa quyền lực kinh tế chưa từng có trong lịch sử — và tha hóa lao động ở quy mô toàn cầu. Nếu LLSX-AI được xã hội hóa và kiểm soát dân chủ, nó có thể là cơ sở vật chất cho sự giải phóng lao động lớn nhất trong lịch sử.`,
      conclusion: `Mâu thuẫn AI-lao động là biểu hiện mới nhất của quy luật LLSX-QHSX đã vận hành từ thời Marx. Tha hóa hay giải phóng không phụ thuộc vào AI mà phụ thuộc vào QHSX của AI — ai sở hữu, ai kiểm soát, phân phối giá trị như thế nào. Đây là câu hỏi chính trị-kinh tế, không phải câu hỏi kỹ thuật. Thế hệ kỹ sư Việt Nam 2025 đứng trước điểm nút lịch sử: không chỉ là người dùng AI mà phải là người kiến tạo QHSX của AI.`,
    },
    reflectionQuestion: 'Nếu AI làm được 80% công việc bạn đang học — không phải 5 năm nữa mà 2 năm nữa — bạn sẽ cạnh tranh bằng cách nào? Và ai sẽ quyết định ai được hưởng lợi từ năng suất mà AI tạo ra?',
  },

  ch4_b: {
    supportingEvidence: [
      {
        summary: 'Nghiên cứu của TS. Betsy Sparrow (Columbia University, 2011) — "Google Effects on Memory" đăng trên Science — là nền tảng cho lo ngại về AI và nhận thức: khi biết có thể tra cứu thông tin bất cứ lúc nào, não người giảm đáng kể việc ghi nhớ nội dung. Điện thoại thông minh trở thành "bộ nhớ ngoài" (transactive memory) mà não người phụ thuộc vào. Với AI tổng hợp như ChatGPT, quá trình này đẩy lên cấp độ mới: không chỉ nhớ mà còn TƯ DUY được outsource.',
        source: 'VnExpress',
        year: '2023',
      },
      {
        summary: 'Khảo sát của Trung tâm Đổi mới sáng tạo Quốc gia (NIC) Việt Nam (2024) tại 5 trường đại học top lớn: 71% sinh viên kỹ thuật dùng AI để làm bài tập thường xuyên, trong đó 45% thừa nhận không kiểm tra lại tính chính xác của output. Điều đáng lo ngại hơn: 38% cho biết họ không còn cố gắng tự giải bài trước khi hỏi AI — mất đi quá trình "vật lộn với bài toán" vốn là nơi tư duy thực sự được rèn luyện.',
        source: 'Tuổi Trẻ',
        year: '2024',
      },
    ],
    refutingEvidence: [
      {
        summary: 'GS. Mitch Resnick (MIT Media Lab, người thiết kế Scratch) lập luận: mỗi thế hệ công cụ mới đều làm dấy lên lo ngại "làm hỏng tư duy" tương tự — máy tính bỏ túi (1970s), Wikipedia (2000s), Google (2010s). Thực tế: mỗi lần, con người không mất năng lực mà tái phân bổ nhận thức sang bài toán phức tạp hơn. AI giải phóng tư duy khỏi các thao tác bậc thấp (tổng hợp, ghi nhớ) để tập trung vào bậc cao (phân tích, sáng tạo, đánh giá phê phán).',
        source: 'Tuổi Trẻ',
        year: '2024',
      },
      {
        summary: 'UNESCO và Bộ GD&ĐT Việt Nam đang cùng xây dựng khung "AI Literacy" — không phải để cấm AI mà để dạy sinh viên sử dụng AI như công cụ mở rộng tư duy, không phải thay thế tư duy. Mô hình "Human-AI Collaboration" này định vị AI như "cái máy hơi nước của nhận thức" — công cụ khuếch đại năng lực người, không phải thay thế người. Đây là hướng xây dựng QHSX giáo dục phù hợp với LLSX-AI mới.',
        source: 'VnExpress',
        year: '2024',
      },
    ],
    philosophicalAnalysis: {
      phenomenon: 'THA_HOA',
      alienationDimensions: [
        'Tha hóa khỏi bản chất loài (Species-being)',
        'Tha hóa khỏi quá trình lao động nhận thức',
      ],
      alienationExplanation: 'Đây là chiều tha hóa đặc thù nhất của kỷ nguyên AI: khi con người outsource "lao động tư duy" cho AI, họ mất đi quá trình làm cho mình trở thành NGƯỜI theo nghĩa triết học (chiều 3). Marx viết: con người khác con vật ở chỗ "xây lâu đài trong trí não" trước khi xây bằng gạch — AI đang thay thế đúng bước "xây trong trí não" này. Đồng thời, quá trình "vật lộn với bài toán" — nơi tư duy thực sự được hình thành — bị bỏ qua (chiều 2).',
      llsxConflict: 'LLSX nhận thức (năng lực tư duy phân tích, phản biện, sáng tạo của con người) đang bị "outsource" sang LLSX-AI, nhưng QHSX giáo dục-lao động (hệ thống bằng cấp, đánh giá năng lực, kỳ vọng nghề nghiệp) chưa thích nghi — dẫn đến tình trạng nghịch lý: con người vừa mất năng lực vừa mất giá trị thị trường của năng lực đó.',
      marxistConcept: 'Tha hóa nhận thức (Cognitive Alienation) — mất "bản chất loài" (Species-being) ở tầng tư duy',
      textbookReference: 'Giáo trình tr.257–283 — Lý luận nhận thức biện chứng; tr.457–464 — Bản chất người và tha hóa',
      dialecticalLaw: 'Lý luận nhận thức biện chứng: thực tiễn → nhận thức → lý luận → trở lại thực tiễn (vòng xoáy đi lên)',
      analysis: `Theo lý luận nhận thức biện chứng của Lenin trong "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán" (1909): nhận thức đúng phải trải qua vòng lặp "thực tiễn → nhận thức cảm tính → nhận thức lý tính → trở lại thực tiễn". Khi AI rút ngắn hoặc bỏ qua vòng lặp này, bản chất của quá trình nhận thức bị thay đổi. Marx trong Bản thảo 1844 xác định "Species-being" (bản chất loài) của con người là "lao động có ý thức và có mục đích" — khác với con vật ở chỗ: con người tự thiết kế quy trình lao động trước khi thực hiện nó, tức là TƯ DUY trước khi HÀNH ĐỘNG. Khi nhận thức bị outsource — từ "vật lộn với bài toán" đến "hỏi AI" — con người mất đi chính quá trình làm cho mình trở thành NGƯỜI theo nghĩa triết học. Đây là "tha hóa nhận thức" — hình thức tha hóa tinh vi và nguy hiểm nhất vì không có bạo lực, không có áp đặt, chỉ là sự tiện lợi được thiết kế để trở nên không thể thiếu.`,
      conclusion: `Lạm dụng AI là biểu hiện TỰ NGUYỆN nhất của tha hóa: con người chủ động nhượng bộ quyền tư duy vì sự tiện lợi ngắn hạn. Đây không phải vấn đề đạo đức cá nhân ("lười biếng") mà là vấn đề cấu trúc: hệ thống LLSX-AI hiện tại được thiết kế để tối đa hóa phụ thuộc, không phải tự chủ nhận thức. Kiến trúc thượng tầng cần thiết: hệ thống giáo dục thiết kế lại bài tập buộc AI phải là công cụ kiểm tra lý luận của người học, không phải nguồn lý luận thay thế. Đây là thách thức của thế hệ kỹ sư 2025.`,
    },
    reflectionQuestion: 'Khi dùng ChatGPT để giải thích một khái niệm khó — bạn có thực sự hiểu sau đó, hay chỉ có cảm giác hiểu? Và làm thế nào để phân biệt hai điều đó trước khi đứng lên trình bày trước khán giả?',
  },

  ch4_c: {
    supportingEvidence: [
      {
        summary: 'The Guardian dẫn phân tích của IMF cho rằng AI có thể tác động gần 40% việc làm toàn cầu và trong phần lớn kịch bản sẽ làm bất bình đẳng gia tăng. Người sở hữu vốn, hạ tầng tính toán và kỹ năng bổ trợ AI có khả năng nhận phần lợi ích lớn hơn người lao động dễ bị thay thế.',
        source: 'The Guardian',
        year: '2024',
      },
      {
        summary: 'BBC News đưa tin cảnh báo của IMF rằng các nền kinh tế thiếu hạ tầng và lao động có kỹ năng sẽ khó tận dụng lợi ích từ AI. Khoảng cách công nghệ vì thế có thể trở thành khoảng cách thu nhập giữa các nhóm người và giữa các quốc gia.',
        source: 'BBC News',
        year: '2024',
      },
    ],
    refutingEvidence: [
      {
        summary: 'ILO News công bố nghiên cứu cho thấy AI tạo sinh có xu hướng bổ trợ nhiều công việc hơn là xóa bỏ toàn bộ nghề nghiệp. Nếu có chính sách đào tạo và chuyển đổi công bằng, năng suất mới có thể được phân phối rộng thay vì chỉ thuộc về chủ sở hữu công nghệ.',
        source: 'ILO News',
        year: '2023',
      },
      {
        summary: 'Axios dẫn nghiên cứu tại một doanh nghiệp với hơn 5.000 nhân viên hỗ trợ khách hàng, trong đó AI giúp năng suất tăng khoảng 14% và người ít kinh nghiệm hưởng lợi nhiều hơn. Kết quả này cho thấy AI cũng có thể thu hẹp chênh lệch kỹ năng trong những điều kiện tổ chức phù hợp.',
        source: 'Axios',
        year: '2023',
      },
    ],
    philosophicalAnalysis: {
      phenomenon: 'BOTH',
      alienationDimensions: [
        'Tha hóa khỏi sản phẩm lao động',
        'Tha hóa khỏi đồng loại',
      ],
      alienationExplanation: 'Dữ liệu, tri thức và sản phẩm số do số đông tạo ra có thể bị tư hữu hóa thành tài sản của một số nền tảng, khiến người lao động không làm chủ thành quả của mình. Quan hệ giữa người với người đồng thời bị chuyển thành quan hệ cạnh tranh về quyền truy cập công nghệ, vốn và dữ liệu.',
      llsxConflict: 'LLSX-AI có khả năng xã hội hóa tri thức và tăng năng suất trên quy mô lớn, nhưng QHSX hiện tại tập trung quyền sở hữu mô hình, dữ liệu và hạ tầng tính toán vào một số ít doanh nghiệp. Mâu thuẫn nằm giữa tính xã hội của quá trình tạo ra giá trị và tính tập trung của quyền chiếm hữu giá trị đó.',
      marxistConcept: 'Quan hệ sở hữu tư liệu sản xuất và sự tha hóa khỏi sản phẩm lao động',
      textbookReference: 'Giáo trình Triết học Mác-Lênin — quy luật quan hệ sản xuất phù hợp với trình độ lực lượng sản xuất; bản chất con người và tha hóa',
      dialecticalLaw: 'Mâu thuẫn giữa tính xã hội hóa của lực lượng sản xuất và tính tập trung của quan hệ sở hữu',
      analysis: 'AI không tự thân tạo ra bình đẳng hay bất bình đẳng; kết quả phụ thuộc vào quan hệ sở hữu và phân phối bao quanh nó. Mô hình AI được xây dựng từ lao động, dữ liệu và tri thức xã hội nhưng quyền quyết định thường thuộc về chủ thể nắm vốn và hạ tầng. Khi năng suất tăng mà lợi ích không được phân phối tương ứng, sản phẩm xã hội quay lại củng cố quyền lực của một nhóm nhỏ. Tuy nhiên, nếu quyền tiếp cận, đào tạo và cơ chế chia sẻ lợi ích được mở rộng, AI có thể nâng năng lực của những người yếu thế hơn. Vì vậy, mâu thuẫn cốt lõi không nằm ở thuật toán mà ở cách xã hội tổ chức quyền sở hữu, kiểm soát và phân phối thành quả công nghệ.',
      conclusion: 'AI chỉ trở thành lực lượng giải phóng khi năng suất mới được chuyển hóa thành lợi ích xã hội rộng rãi. Điều đó đòi hỏi quan hệ sản xuất và kiến trúc thượng tầng thích ứng thông qua giáo dục, cạnh tranh công bằng, bảo vệ người lao động và cơ chế phân phối hợp lý.',
    },
    reflectionQuestion: 'Nếu AI được huấn luyện từ tri thức của toàn xã hội nhưng lợi nhuận chủ yếu thuộc về một số doanh nghiệp, ai thực sự sở hữu sản phẩm trí tuệ chung đó?',
  },

  ch4_d: {
    supportingEvidence: [
      {
        summary: 'Associated Press công bố khảo sát cho thấy gần 6 trên 10 người trưởng thành tại Mỹ cho rằng công cụ AI sẽ làm gia tăng thông tin sai lệch trong bầu cử. Khả năng tạo nhanh hình ảnh, âm thanh và thông điệp thuyết phục khiến việc kiểm chứng thực tiễn trở nên khó khăn hơn.',
        source: 'Associated Press',
        year: '2023',
      },
      {
        summary: 'Reuters phân tích rằng các công cụ AI tạo sinh đã làm nội dung giả trở nên rẻ, nhanh và thuyết phục hơn trong hoạt động chính trị. Khi hình thức biểu đạt giống sự thật, người tiếp nhận dễ nhầm tính trôi chảy của thông tin với tính khách quan của nó.',
        source: 'Reuters',
        year: '2023',
      },
    ],
    refutingEvidence: [
      {
        summary: 'TIME tổng kết các cuộc bầu cử năm 2024 và nhận định tác động thực tế của deepfake thấp hơn nhiều cảnh báo ban đầu; AI chủ yếu khuếch đại các chiến dịch sai lệch vốn đã tồn tại. Công nghệ vì thế không phải nguyên nhân duy nhất của khủng hoảng thông tin.',
        source: 'TIME',
        year: '2024',
      },
      {
        summary: 'Axios dẫn dữ liệu từ các nền tảng cho thấy khối lượng deepfake chính trị trong năm 2024 vẫn tương đối thấp và nhiều nội dung đã bị phát hiện bằng cơ chế kiểm duyệt hiện có. Phản bác này cho thấy năng lực kiểm chứng và thể chế quản lý có thể hạn chế mặt tiêu cực của AI.',
        source: 'Axios',
        year: '2024',
      },
    ],
    philosophicalAnalysis: {
      phenomenon: 'THA_HOA',
      alienationDimensions: [
        'Tha hóa khỏi sản phẩm',
        'Tha hóa khỏi đồng loại',
      ],
      alienationExplanation: 'Sản phẩm truyền thông do con người tạo ra có thể tách khỏi chủ thể, bị AI tái tạo và quay lại chi phối nhận thức xã hội. Khi không còn biết người đối diện, tiếng nói hay hình ảnh có thật hay không, quan hệ giữa người với người bị trung gian hóa bởi hệ thống kỹ thuật.',
      llsxConflict: 'LLSX thông tin có khả năng sản xuất và phổ biến nội dung gần như tức thời, trong khi QHSX truyền thông và kiến trúc thượng tầng pháp lý chưa bảo đảm đầy đủ việc xác thực, trách nhiệm và quyền kiểm soát nội dung tổng hợp.',
      marxistConcept: 'Quan hệ giữa tồn tại xã hội, ý thức xã hội và vai trò của thực tiễn đối với chân lý',
      textbookReference: 'Giáo trình Triết học Mác-Lênin — lý luận nhận thức duy vật biện chứng; tồn tại xã hội và ý thức xã hội',
      dialecticalLaw: 'Thực tiễn là cơ sở, động lực, mục đích và tiêu chuẩn kiểm nghiệm chân lý',
      analysis: 'Theo chủ nghĩa duy vật biện chứng, nhận thức phải phản ánh hiện thực khách quan và được kiểm nghiệm bằng thực tiễn. AI tạo sinh làm xuất hiện một lớp biểu tượng có hình thức rất giống hiện thực nhưng không nhất thiết bắt nguồn từ sự kiện có thật. Khoảng cách giữa biểu tượng và thực tại tạo điều kiện cho ý thức sai lệch phát triển. Tuy nhiên, AI chỉ khuếch đại mâu thuẫn đã tồn tại trong hệ thống truyền thông, nơi tốc độ và tương tác thường được ưu tiên hơn kiểm chứng. Giải pháp vì thế không thể chỉ yêu cầu cá nhân tỉnh táo mà còn cần trách nhiệm nền tảng, minh bạch nội dung tổng hợp và năng lực kiểm chứng xã hội.',
      conclusion: 'Khủng hoảng thật - giả là mâu thuẫn giữa năng lực sản xuất thông tin rất nhanh và năng lực kiểm chứng còn chậm. Con người chỉ giữ được vai trò chủ thể nhận thức khi luôn đưa thông tin trở lại đối chiếu với nguồn, bằng chứng và thực tiễn.',
    },
    reflectionQuestion: 'Khi một nội dung hoàn toàn phù hợp với niềm tin sẵn có của mình, bạn sẽ kiểm chứng nó kỹ hơn hay dễ tin nó hơn?',
  },

  ch4_e: {
    supportingEvidence: [
      {
        summary: 'ILO News cho biết phần lớn nghề nghiệp chỉ tiếp xúc một phần với AI tạo sinh và có khả năng được bổ trợ hơn là bị thay thế hoàn toàn. AI có thể đảm nhận một số thao tác lặp lại để người lao động tập trung vào nhiệm vụ cần phán đoán và tương tác con người.',
        source: 'ILO News',
        year: '2023',
      },
      {
        summary: 'Axios dẫn nghiên cứu của Stanford và MIT cho thấy trợ lý AI giúp nhân viên hỗ trợ khách hàng tăng năng suất khoảng 14%, đặc biệt hỗ trợ mạnh cho người ít kinh nghiệm. Đây là bằng chứng rằng công cụ mới có thể mở rộng năng lực thay vì chỉ thay thế lao động.',
        source: 'Axios',
        year: '2023',
      },
    ],
    refutingEvidence: [
      {
        summary: 'UNESCO cảnh báo tốc độ triển khai AI tạo sinh đang vượt trước khả năng xây dựng quy định và năng lực đánh giá của nhiều cơ sở giáo dục. Nếu dùng AI để thay luôn quá trình học, sự giải phóng khỏi thao tác lặp lại có thể biến thành phụ thuộc nhận thức.',
        source: 'UNESCO',
        year: '2023',
      },
      {
        summary: 'The Guardian dẫn IMF nhận định AI có thể làm bất bình đẳng gia tăng nếu lợi ích năng suất chủ yếu chảy về phía người có vốn và kỹ năng cao. Thời gian được giải phóng vì thế chưa chắc trở thành thời gian sáng tạo của mọi người lao động.',
        source: 'The Guardian',
        year: '2024',
      },
    ],
    philosophicalAnalysis: {
      phenomenon: 'BOTH',
      alienationDimensions: [
        'Giải phóng khỏi lao động lặp lại',
        'Nguy cơ tha hóa khỏi quá trình lao động',
      ],
      alienationExplanation: 'AI có thể trả lại cho con người thời gian dành cho sáng tạo khi đảm nhận thao tác máy móc. Nhưng nếu công cụ đồng thời quyết định mục tiêu, phương pháp và kết quả, người lao động lại bị tách khỏi quá trình hoạt động có ý thức của chính mình.',
      llsxConflict: 'LLSX-AI mở ra khả năng giảm thời gian lao động tất yếu, nhưng QHSX dựa trên tối đa hóa năng suất có thể dùng phần thời gian tiết kiệm để tăng cường độ lao động thay vì mở rộng tự do và sáng tạo của con người.',
      marxistConcept: 'Giải phóng lao động và sự phát triển tự do, toàn diện của con người',
      textbookReference: 'Giáo trình Triết học Mác-Lênin — con người là chủ thể lịch sử; quy luật quan hệ sản xuất phù hợp với lực lượng sản xuất',
      dialecticalLaw: 'Sự thống nhất và đấu tranh giữa hai mặt đối lập: giải phóng năng lực và gia tăng lệ thuộc',
      analysis: 'Từ góc nhìn Mác-Lênin, phát triển lực lượng sản xuất là điều kiện vật chất để giảm lao động nặng nhọc và mở rộng năng lực con người. AI có thể thực hiện phần việc lặp lại, giúp lao động chuyển sang sáng tạo, phán đoán và hợp tác. Nhưng khả năng kỹ thuật không tự động trở thành giải phóng xã hội. Nếu mục tiêu duy nhất vẫn là tăng sản lượng và lợi nhuận, năng suất mới có thể dẫn đến cắt giảm việc làm hoặc tăng nhịp độ lao động. Vì vậy, phải xem người lao động có thực sự được làm chủ công cụ, được đào tạo lại và được hưởng phần thời gian cùng giá trị mà AI tạo ra hay không.',
      conclusion: 'AI là tiền đề vật chất của giải phóng chứ chưa phải bản thân sự giải phóng. Kết quả phụ thuộc vào việc quan hệ sản xuất biến năng suất tăng thêm thành thời gian tự do và cơ hội phát triển con người, hay thành một hình thức kiểm soát mới.',
    },
    reflectionQuestion: 'Nếu AI giúp bạn hoàn thành công việc trong một nửa thời gian, phần thời gian còn lại sẽ thuộc về bạn hay sẽ được lấp đầy bằng nhiều công việc hơn?',
  },
}
