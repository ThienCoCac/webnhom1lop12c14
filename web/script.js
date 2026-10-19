// @ts-nocheck
/** Cổng thông tin Trường THPT Bến Cát — JavaScript thuần, chạy dạng module. */

function docTable(rows) {
  let html = '<div class="table-wrap"><table class="data"><thead><tr><th>Số ký hiệu</th><th>Ngày</th><th>Trích yếu</th></tr></thead><tbody>';
  rows.forEach((row) => {
    html += `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`;
  });
  html += "</tbody></table></div>";
  return html;
}

function linkList(items) {
  return `<ul class="link-list">${items.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul>`;
}

const NEWS = {
  "tin-phu-huynh": {
    title: "Họp phụ huynh giữa học kỳ I năm học 2026–2027",
    kicker: "Tin tức · 15/10/2026",
    html: `<p class="lead">Nhà trường mời quý phụ huynh dự họp giữa học kỳ I để cùng nắm tình hình học tập, nền nếp và kế hoạch kiểm tra.</p>
      <p>Họp được tổ chức theo từng khối, tại phòng học của lớp, sau tiết chào cờ thứ Hai. Giáo viên chủ nhiệm báo cáo sĩ số, kết quả thường xuyên, các việc nền nếp và việc phối hợp nhắc con em đi học đúng giờ, mặc đồng phục, không sử dụng điện thoại trong giờ học.</p>
      <h2>Khung thời gian</h2>
      ${docTable([
        ["KH-PH/10", "19/10/2026", "Khối 10 — 14:00, tại phòng học của lớp"],
        ["KH-PH/11", "20/10/2026", "Khối 11 — 14:00, tại phòng học của lớp"],
        ["KH-PH/12", "21/10/2026", "Khối 12 — 14:00, tại phòng học của lớp"],
      ])}
      <p>Phụ huynh vắng mặt có thể liên hệ giáo viên chủ nhiệm trong giờ hành chính hoặc gửi ý kiến qua mục <a href="#lien-he">Liên hệ</a>.</p>`,
  },
  "tin-giua-ky": {
    title: "Kế hoạch kiểm tra giữa học kỳ I",
    kicker: "Tin tức · 10/10/2026",
    html: `<p class="lead">Kiểm tra giữa kỳ I diễn ra từ ngày 26/10 đến 30/10/2026, theo đề chung của tổ chuyên môn.</p>
      <p>Học sinh ôn theo đúng mạch kiến thức đã học từ đầu năm đến tuần 8. Không tổ chức kiểm tra dồn vào một buổi. Lịch chi tiết từng tiết được niêm yết tại bảng tin lớp và mục Thông báo.</p>
      ${linkList([
        ["#kt-cuoi-ky", "Xem kênh Kiểm tra cuối kỳ"],
        ["#tb-thi", "Thông báo — danh sách — lịch thi"],
        ["#hoc-thi", "Đề cương ôn tập trực tuyến"],
      ])}`,
  },
  "tin-khai-giang": {
    title: "Lễ khai giảng năm học 2026–2027",
    kicker: "Tin tức · 05/09/2026",
    html: `<p class="lead">Sáng 05/9/2026, thầy cô và học sinh Trường THPT Bến Cát long trọng tổ chức Lễ khai giảng năm học mới 2026–2027 tại sân trường.</p>
      <p>Năm học mới nhà trường tiếp tục giữ vững khẩu hiệu “Đạo đức, tri thức, kỹ năng”: học thật, thi thật, nói thật; mỗi lớp có kế hoạch nền nếp và chỉ tiêu học tập riêng. Khối 10 làm quen ngôi trường mới; khối 12 bắt đầu lộ trình ôn thi tốt nghiệp THPT.</p>
      <h3>Hình ảnh lưu niệm tại Lễ khai giảng</h3>
      <div class="gallery">
        <figure class="gallery-wide"><img src="images/khai-giang-tap-the.jpg" alt="Tập thể Hội đồng sư phạm Trường THPT Bến Cát"><figcaption>Tập thể Hội đồng sư phạm Trường THPT Bến Cát tại Lễ khai giảng 2026–2027</figcaption></figure>
        <figure><img src="images/khai-giang-1.jpg" alt="Thầy cô tổ chuyên môn"><figcaption>Thầy cô tổ chuyên môn chụp ảnh lưu niệm</figcaption></figure>
        <figure><img src="images/khai-giang-2.jpg" alt="Quý cô giáo trong tà áo dài truyền thống"><figcaption>Quý cô giáo rạng rỡ chào đón năm học mới</figcaption></figure>
        <figure><img src="images/khai-giang-3.jpg" alt="Thầy cô các tổ bộ môn"><figcaption>Tập thể thầy cô giáo viên bộ môn</figcaption></figure>
        <figure><img src="images/khai-giang-4.jpg" alt="Cán bộ giáo viên nhà trường"><figcaption>Đội ngũ cán bộ giáo viên nhà trường</figcaption></figure>
      </div>
      <p>Sau buổi lễ, học sinh các khối lớp trở về phòng học nhận thời khóa biểu tuần 1 và phổ biến nội quy năm học mới.</p>`,
  },
  "tin-hoi-khoe": {
    title: "Hội khỏe Phù Đổng cấp trường",
    kicker: "Tin tức · 28/09/2026",
    html: `<p class="lead">Hội khỏe cấp trường diễn ra cuối tháng 9 với các nội dung chạy bền, cầu lông, bóng đá mini và kéo co.</p>
      <p>Tổ Thể dục điều hành thi đấu ngoài giờ học chính khóa để không ảnh hưởng tiết văn hóa. Học sinh tham gia theo đăng ký của lớp, có mặt trước giờ thi 20 phút, mang giày thể thao và bình nước.</p>
      <p>Kết quả được dùng để chọn đội tuyển dự hội khỏe cấp cụm.</p>`,
  },
  "tin-thu-vien": {
    title: "Tuần lễ đọc sách tại thư viện",
    kicker: "Tin tức · 20/09/2026",
    html: `<p class="lead">Thư viện mở cửa thêm buổi chiều trong tuần 20–26/9, giới thiệu giá sách mới khối khoa học xã hội và tủ sách ôn thi.</p>
      <p>Mỗi lớp cử một thủ thư chi đoàn hỗ trợ bạn đọc mượn – trả. Thể lệ và giờ mở cửa xem tại mục <a href="#thu-vien">Thư viện</a>.</p>`,
  },
  "tin-dau-khoa": {
    title: "Sinh hoạt chính trị đầu năm học",
    kicker: "Tin tức · 25/08/2026",
    html: `<p class="lead">Tuần sinh hoạt tập thể đầu năm giúp học sinh thống nhất nền nếp, an toàn giao thông và trách nhiệm với tập thể lớp.</p>
      <p>Khối 12 tập trung bản lĩnh trước năm thi. Khối 10 làm quen kỷ luật học đường, cách sử dụng mạng và trí tuệ nhân tạo có chừng mực, trung thực trong học tập. Sau buổi chung, từng lớp hoàn thành bản cam kết năm học.</p>`,
  },
};

const PAGES = {
  "cong-khai": {
    title: "Công khai",
    kicker: "Minh bạch nhà trường",
    html: `<p class="lead">Nhà trường công khai các nội dung theo quy định: chất lượng giáo dục, thu chi và các việc liên quan đến đấu thầu, đấu giá, mua sắm.</p>
      ${linkList([
        ["#dau-gia", "Đấu giá"],
        ["#cong-khai-khac", "Công khai khác"],
        ["#ba-cong-khai", "Ba công khai"],
      ])}`,
  },
  "dau-gia": {
    title: "Đấu giá",
    kicker: "Công khai",
    html: `<p class="lead">Các thông báo đấu giá tài sản thanh lý của nhà trường được đăng đủ thời gian để cá nhân, tổ chức theo dõi.</p>
      ${docTable([
        ["10/TB-ĐG", "12/09/2026", "Thông báo bán thanh lý bàn ghế phòng bộ môn đã hỏng, không còn sử dụng được"],
        ["07/TB-ĐG", "18/06/2026", "Niêm yết kết quả thanh lý thiết bị tin học hết khấu hao"],
        ["02/TB-ĐG", "04/03/2026", "Kế hoạch kiểm kê tài sản trước khi lập phương án thanh lý"],
      ])}
      <div class="callout"><strong>Nơi nộp hồ sơ:</strong> Văn phòng trường, giờ hành chính. Mang theo giấy giới thiệu nếu đại diện tổ chức.</div>`,
  },
  "cong-khai-khac": {
    title: "Công khai khác",
    kicker: "Công khai",
    html: `<p class="lead">Nhóm này tập hợp các nội dung công khai không thuộc đấu giá: cơ sở vật chất, đội ngũ, tài chính năm học và cam kết chất lượng.</p>
      <div class="cards">
        <article><h3>Cơ sở vật chất</h3><p>Phòng học, phòng bộ môn, thư viện, sân tập và nhà vệ sinh được kê theo năm học.</p></article>
        <article><h3>Đội ngũ</h3><p>Số giáo viên, nhân viên theo môn; tỷ lệ đạt chuẩn đào tạo.</p></article>
        <article><h3>Tài chính</h3><p>Dự toán thu – chi và quyết toán các khoản theo quy định, không thu ngoài danh mục.</p></article>
      </div>
      ${docTable([
        ["45/CK-THPTBC", "01/09/2026", "Công khai điều kiện đảm bảo chất lượng năm học 2026–2027"],
        ["46/CK-THPTBC", "01/09/2026", "Công khai đội ngũ và quy mô lớp học"],
      ])}`,
  },
  "kgvh-hcm": {
    title: "Không gian văn hóa Hồ Chí Minh",
    kicker: "KGVH HCM",
    html: `<p class="lead">Không gian văn hóa Hồ Chí Minh của nhà trường là nơi sinh hoạt chuyên đề, trưng bày tư liệu và tổ chức kể chuyện gương người tốt việc tốt.</p>
      <p>Mỗi tháng, Chi bộ và Đoàn trường chọn một chủ điểm gắn với việc làm nhỏ trong lớp: giữ lời hứa, trung thực khi kiểm tra, nhường ghế xe buýt, trực nhật đến nơi đến chốn. Không tổ chức hình thức suông.</p>
      <h2>Lịch sinh hoạt học kỳ I</h2>
      ${docTable([
        ["KGVH-09", "09/2026", "Chuyên đề “Nói thật, làm thật” — khối 10"],
        ["KGVH-10", "10/2026", "Kể chuyện tấm gương thầy cô, nhân viên nhà trường"],
        ["KGVH-11", "11/2026", "Hành động nhỏ vì bạn học có hoàn cảnh khó khăn"],
      ])}`,
  },
  "cchc": {
    title: "Cải cách hành chính",
    kicker: "Thủ tục gọn, niêm yết rõ",
    html: `<p class="lead">Bộ phận một cửa của văn phòng tiếp nhận hồ sơ học sinh, phụ huynh trong giờ hành chính. Mẫu đơn và thời hạn trả kết quả được niêm yết tại bảng và trên cổng này.</p>
      ${linkList([
        ["#bieu-mau", "Biểu mẫu - Thủ tục hành chính"],
        ["#vb-cchc", "Văn bản cải cách hành chính"],
        ["#chuyen-truong", "Chuyển trường"],
      ])}`,
  },
  "bieu-mau": {
    title: "Biểu mẫu - Thủ tục hành chính",
    kicker: "Cải cách hành chính",
    html: `<p class="lead">In mẫu, điền đủ thông tin, nộp tại văn phòng. Hồ sơ thiếu được hướng dẫn bổ sung một lần, bằng văn bản hoặc tin nhắn của văn thư.</p>
      ${docTable([
        ["BM-01", "Áp dụng 2026", "Đơn xin nghỉ học có phép trên 3 ngày"],
        ["BM-02", "Áp dụng 2026", "Đơn xin cấp lại thẻ học sinh, giấy xác nhận đang học"],
        ["BM-03", "Áp dụng 2026", "Đơn đề nghị chuyển trường (kèm học bạ photo)"],
        ["BM-04", "Áp dụng 2026", "Phiếu đăng ký sử dụng thư viện và phòng tin học"],
      ])}
      <div class="callout">Thời hạn giấy xác nhận đang học: 02 ngày làm việc. Giấy liên quan học bạ: theo lịch hiệu trưởng ký, thường trong tuần.</div>`,
  },
  "vb-cchc": {
    title: "Văn bản cải cách hành chính",
    kicker: "Cải cách hành chính",
    html: `<p>Các văn bản nhà trường dùng để rút ngắn quy trình, công khai tiến độ và phân rõ người chịu trách nhiệm từng loại hồ sơ.</p>
      ${docTable([
        ["12/QĐ-THPTBC", "15/08/2026", "Quy chế tiếp nhận và trả kết quả hồ sơ tại văn phòng"],
        ["08/KH-THPTBC", "20/08/2026", "Kế hoạch rà soát thủ tục hành chính năm học 2026–2027"],
        ["03/BC-THPTBC", "30/06/2026", "Báo cáo cải cách hành chính học kỳ II năm học trước"],
      ])}`,
  },
  "chuyen-truong": {
    title: "Chuyển trường",
    kicker: "Cải cách hành chính",
    html: `<p class="lead">Việc chuyển đi, chuyển đến thực hiện theo hướng dẫn của Sở Giáo dục và Đào tạo và lịch năm học. Nhà trường không nhận hồ sơ ngoài chỉ tiêu đã công bố.</p>
      <ol class="steps">
        <li><strong>Phụ huynh nộp đơn</strong><span>Đơn BM-03, bản photo học bạ, giấy giới thiệu của trường nơi đi (nếu chuyển đến).</span></li>
        <li><strong>Văn phòng kiểm tra</strong><span>Đối chiếu sĩ số lớp, hạnh kiểm và các môn còn nợ. Thông báo thiếu hồ sơ trong 02 ngày làm việc.</span></li>
        <li><strong>Ban giám hiệu duyệt</strong><span>Ký giấy giới thiệu hoặc quyết định tiếp nhận khi đủ điều kiện.</span></li>
        <li><strong>Hoàn tất</strong><span>Học sinh trả sách thư viện, sổ liên lạc và nhận học bạ gốc tại văn thư.</span></li>
      </ol>
      <p>Nộp hồ sơ trực tiếp, không gửi qua người trung gian. Điện thoại hỏi quy trình: 0274.3564.830.</p>`,
  },
  "tin-tuc": {
    title: "Tin tức",
    kicker: "Nhật ký nhà trường",
    html: `<p class="lead">Tin hoạt động chuyên môn, nền nếp và phong trào. Bấm vào tiêu đề để đọc bài đầy đủ.</p>
      ${linkList([
        ["#tin-phu-huynh", "15/10/2026 — Họp phụ huynh giữa học kỳ I"],
        ["#tin-giua-ky", "10/10/2026 — Kế hoạch kiểm tra giữa học kỳ I"],
        ["#tin-khai-giang", "05/09/2026 — Lễ khai giảng năm học 2026–2027"],
        ["#tin-hoi-khoe", "28/09/2026 — Hội khỏe Phù Đổng cấp trường"],
        ["#tin-thu-vien", "20/09/2026 — Tuần lễ đọc sách tại thư viện"],
        ["#tin-dau-khoa", "25/08/2026 — Sinh hoạt chính trị đầu năm học"],
      ])}`,
  },
  "van-ban": {
    title: "Văn bản",
    kicker: "Tra cứu công văn",
    html: `<p class="lead">Văn bản được xếp theo nguồn ban hành. Bản giấy có dấu đỏ lưu tại văn thư; bản trên cổng dùng để tra cứu.</p>
      ${linkList([
        ["#vb-truong", "Văn bản trường"],
        ["#vb-cap-tren", "Văn bản cấp trên"],
        ["#lich-cong-tac", "Lịch công tác"],
        ["#ba-cong-khai", "Ba công khai"],
      ])}`,
  },
  "vb-truong": {
    title: "Văn bản trường",
    kicker: "Văn bản",
    html: `<p>Công văn, kế hoạch, quyết định do Trường THPT Bến Cát ban hành trong năm học 2026–2027.</p>
      ${docTable([
        ["128/TB-THPTBC", "15/10/2026", "Thông báo lịch họp phụ huynh giữa học kỳ I"],
        ["121/KH-THPTBC", "10/10/2026", "Kế hoạch kiểm tra giữa học kỳ I"],
        ["96/QĐ-THPTBC", "25/08/2026", "Phân công chuyên môn và chủ nhiệm năm học"],
        ["88/NQ-THPTBC", "20/08/2026", "Nội quy học sinh năm học 2026–2027"],
        ["70/KH-THPTBC", "05/08/2026", "Kế hoạch năm học 2026–2027"],
      ])}`,
  },
  "vb-cap-tren": {
    title: "Văn bản cấp trên",
    kicker: "Văn bản",
    html: `<p>Văn bản của cơ quan quản lý được nhà trường sao gửi để giáo viên, nhân viên và phụ huynh cùng thực hiện.</p>
      ${docTable([
        ["CV ngành", "09/2026", "Hướng dẫn thực hiện nhiệm vụ năm học bậc trung học phổ thông"],
        ["CV ngành", "08/2026", "Hướng dẫn tuyển sinh lớp 10 và chuyển trường"],
        ["CV ngành", "07/2026", "Quy chế đánh giá học sinh trung học cơ sở và trung học phổ thông"],
      ])}
      <p>Số ký hiệu gốc được văn thư đối chiếu khi công dân cần trích lục. Trên cổng chỉ nêu tên loại và thời điểm nhận.</p>`,
  },
  "lich-cong-tac": {
    title: "Lịch công tác",
    kicker: "Văn bản · Tuần 8",
    html: `<p class="lead">Lịch tuần từ 19/10 đến 24/10/2026. Việc phát sinh được văn phòng cập nhật vào sáng thứ Hai.</p>
      ${docTable([
        ["Thứ Hai 19/10", "7:00", "Chào cờ, sinh hoạt dưới cờ; họp phụ huynh khối 10 lúc 14:00"],
        ["Thứ Ba 20/10", "14:00", "Họp phụ huynh khối 11; sinh hoạt chuyên môn tổ Xã hội"],
        ["Thứ Tư 21/10", "14:00", "Họp phụ huynh khối 12; dự giờ tổ Toán"],
        ["Thứ Năm 22/10", "13:30", "Họp Ban giám hiệu với tổ trưởng"],
        ["Thứ Sáu 23/10", "15:30", "Sinh hoạt chi đoàn; trực cuối tuần"],
        ["Thứ Bảy 24/10", "7:00", "Phụ đạo tự nguyện theo đăng ký; văn phòng trực đến 11:30"],
      ])}`,
  },
  "ba-cong-khai": {
    title: "Ba công khai",
    kicker: "Văn bản",
    html: `<p class="lead">Ba nội dung công khai hằng năm: chất lượng giáo dục, điều kiện đảm bảo, và thu – chi.</p>
      <div class="cards">
        <article><h3>Công khai chất lượng</h3><p>Kết quả học tập, rèn luyện, tỷ lệ tốt nghiệp và các giải học sinh giỏi của năm học liền trước.</p></article>
        <article><h3>Công khai điều kiện</h3><p>Phòng học, giáo viên, thiết bị tối thiểu theo môn và kế hoạch bổ sung.</p></article>
        <article><h3>Công khai thu chi</h3><p>Các khoản thu theo văn bản cho phép, mức thu, mục đích sử dụng và quyết toán.</p></article>
      </div>
      <p>Niêm yết giấy tại bảng tin cổng trường và đăng tại mục này vào đầu mỗi năm học. Khiếu nại về khoản thu gửi văn phòng, không gửi qua cá nhân không có trách nhiệm.</p>`,
  },
  "thong-bao": {
    title: "Thông báo",
    kicker: "Việc cần biết",
    html: `<p class="lead">Các thông báo đang hiệu lực. Đọc kỹ ngày ban hành trước khi thực hiện.</p>
      ${linkList([
        ["#tb-thi", "Thông báo - Danh sách - Lịch thi"],
        ["#tkb", "Thời khóa biểu"],
        ["#thi-hsg", "Thi HSG/KHKT/Olympic/Sao Khuê/LTV"],
        ["#chinh-phuc", "Chinh phục kỳ thi TN THPT"],
        ["#phong-trao", "Phong trào Đoàn/Thư viện"],
      ])}`,
  },
  "tb-thi": {
    title: "Thông báo - Danh sách - Lịch thi",
    kicker: "Thông báo",
    html: `<p class="lead">Lịch kiểm tra giữa học kỳ I, tuần 26–30/10/2026. Học sinh mang thẻ học sinh, bút, không mang tài liệu trừ môn được cho phép.</p>
      ${docTable([
        ["Toán", "26/10 · Tiết 1", "Khối 10, 11, 12 — đề tổ hợp, 45 phút một tiết theo TKB"],
        ["Ngữ văn", "27/10 · Tiết 1", "Làm văn nghị luận xã hội / nghị luận văn học theo khối"],
        ["Tiếng Anh", "28/10 · Tiết 2", "Nghe tại phòng bộ môn theo sơ đồ lớp"],
        ["Lý, Hóa, Sinh", "29/10", "Theo phân công tổ Tự nhiên, không thi trùng buổi"],
        ["Sử, Địa, GDCD", "30/10", "Theo phân công tổ Xã hội"],
      ])}
      <div class="callout">Danh sách phòng thi niêm yết trước 01 ngày tại bảng tin và được giáo viên chủ nhiệm đọc trong sinh hoạt 15 phút.</div>`,
  },
  "tkb": {
    title: "Thời khóa biểu",
    kicker: "Thông báo · Tuần 8, áp dụng từ 19/10/2026",
    html: `<p class="lead">Mẫu thời khóa biểu buổi sáng lớp 10A1. Các lớp khác nhận bản in tại giáo viên chủ nhiệm; cổng sẽ bổ sung khi văn thư phát hành file tuần.</p>
      <div class="table-wrap"><table class="data"><thead><tr><th>Tiết</th><th>Thứ 2</th><th>Thứ 3</th><th>Thứ 4</th><th>Thứ 5</th><th>Thứ 6</th><th>Thứ 7</th></tr></thead><tbody>
        <tr><td>1</td><td>Chào cờ</td><td>Toán</td><td>Ngữ văn</td><td>Tiếng Anh</td><td>Vật lý</td><td>GDTC</td></tr>
        <tr><td>2</td><td>Toán</td><td>Tiếng Anh</td><td>Toán</td><td>Hóa học</td><td>Ngữ văn</td><td>Tin học</td></tr>
        <tr><td>3</td><td>Ngữ văn</td><td>Vật lý</td><td>GDCD</td><td>Toán</td><td>Lịch sử</td><td>Sinh hoạt</td></tr>
        <tr><td>4</td><td>Tiếng Anh</td><td>Hóa học</td><td>Địa lý</td><td>Ngữ văn</td><td>Toán</td><td>—</td></tr>
        <tr><td>5</td><td>GDQP-AN</td><td>Sinh học</td><td>Công nghệ</td><td>Tin học</td><td>GDTC</td><td>—</td></tr>
      </tbody></table></div>
      <p>Buổi chiều: phụ đạo, ngoại khóa và sinh hoạt câu lạc bộ theo đăng ký, không xếp tiết chính khóa trừ khi có thông báo riêng.</p>`,
  },
  "thi-hsg": {
    title: "Thi HSG / KHKT / Olympic / Sao Khuê / LTV",
    kicker: "Thông báo",
    html: `<p class="lead">Nhà trường thành lập đội tuyển theo năng lực, không chạy theo số lượng. Mỗi cuộc thi có giáo viên phụ trách và lịch bồi dưỡng ngoài buổi chính khóa.</p>
      <div class="cards">
        <article><h3>Học sinh giỏi</h3><p>Vòng loại cấp trường trong tháng 11. Môn có từ 15 học sinh đăng ký trở lên mới mở đội tuyển.</p></article>
        <article><h3>Khoa học kỹ thuật</h3><p>Đăng ký đề tài trước 15/11. Ưu tiên đề giải quyết việc thật trong nhà trường hoặc địa phương.</p></article>
        <article><h3>Olympic, Sao Khuê, lập trình</h3><p>Tổ Tin học sơ tuyển. Học sinh tự túc máy khi ôn online; phòng máy mở theo lịch thư viện.</p></article>
      </div>
      <p>Đơn đăng ký nộp cho tổ trưởng chuyên môn, không nộp trực tiếp cho ban giám hiệu.</p>`,
  },
  "chinh-phuc": {
    title: "Chinh phục kỳ thi TN THPT",
    kicker: "Thông báo · Khối 12",
    html: `<p class="lead">Lộ trình ôn thi tốt nghiệp THPT năm 2027 của khối 12, bám sát mạch kiến thức và không học tủ.</p>
      <ol class="steps">
        <li><strong>Học kỳ I</strong><span>Hoàn thành chương trình, kiểm tra giữa kỳ và cuối kỳ nghiêm túc, lập sổ lỗi sai từng môn.</span></li>
        <li><strong>Tháng 1–3</strong><span>Ôn theo chuyên đề. Mỗi tuần một đề minh họa trong 60–90 phút, đúng giờ.</span></li>
        <li><strong>Tháng 4</strong><span>Thi thử toàn trường hai đợt. Phân tích điểm theo câu, không chỉ theo tổng điểm.</span></li>
        <li><strong>Tháng 5–6</strong><span>Rà soát hồ sơ thí sinh, ưu tiên, và ổn định sức khỏe trước kỳ thi.</span></li>
      </ol>
      <p>Đề cương đăng tại <a href="#hoc-thi">Học - Thi trực tuyến</a>. Phụ huynh nhận phiếu điểm thi thử qua giáo viên chủ nhiệm.</p>`,
  },
  "phong-trao": {
    title: "Phong trào Đoàn / Thư viện",
    kicker: "Thông báo",
    html: `<p class="lead">Hai mũi phong trào xuyên suốt năm học: việc làm của Đoàn và thói quen đọc.</p>
      ${linkList([
        ["#doan", "Kế hoạch Đoàn thanh niên"],
        ["#thu-vien", "Nội quy và giờ mở cửa thư viện"],
        ["#tin-thu-vien", "Tin tuần lễ đọc sách"],
      ])}
      <p>Chi đoàn đăng ký công trình trước ngày 30/10: góc sách lớp, đường dây an toàn giao thông đầu giờ, hoặc trực thư viện.</p>`,
  },
  "kiem-tra": {
    title: "Kiểm tra - Đánh giá",
    kicker: "Học thật, thi thật",
    html: `<p class="lead">Đánh giá thường xuyên trong quá trình học và đánh giá định kỳ theo quy chế. Nhà trường không tổ chức thi cử ngoài quy định.</p>
      ${linkList([
        ["#kt-cuoi-ky", "Kiểm tra cuối kỳ"],
        ["#tuyen-sinh-10", "Tuyển sinh 10"],
        ["#tot-nghiep", "Tốt nghiệp THPT"],
      ])}`,
  },
  "kt-cuoi-ky": {
    title: "Kiểm tra cuối kỳ",
    kicker: "Kiểm tra - Đánh giá",
    html: `<p class="lead">Cuối học kỳ I dự kiến tuần giữa tháng 12/2026. Đề do tổ chuyên môn thống nhất ma trận, ban giám hiệu duyệt trước khi in.</p>
      <ul class="link-list">
        <li><a href="#tb-thi">Lịch kiểm tra giữa kỳ (đang hiệu lực)</a></li>
        <li><a href="#hoc-thi">Đề cương ôn tập</a></li>
      </ul>
      <div class="callout">Học sinh vắng có phép được kiểm tra bù trong tuần kế tiếp. Vắng không phép nhận điểm theo quy chế, giáo viên chủ nhiệm báo phụ huynh.</div>`,
  },
  "tuyen-sinh-10": {
    title: "Tuyển sinh 10",
    kicker: "Kiểm tra - Đánh giá",
    html: `<p class="lead">Năm học 2026–2027 nhà trường đã nhận học sinh trúng tuyển. Mục này giữ hướng dẫn cho kỳ tuyển sinh lớp 10 năm 2027 và giải đáp hồ sơ nhập học còn tồn.</p>
      <h2>Hồ sơ nhập học còn thiếu</h2>
      <p>Phụ huynh hoàn tất giấy khai sinh, học bạ THCS và các minh chứng ưu tiên (nếu có) tại văn phòng trước ngày 31/10/2026.</p>
      <h2>Định hướng kỳ tới</h2>
      <div class="cards">
        <article><h3>Chỉ tiêu</h3><p>Công bố khi có văn bản giao chỉ tiêu. Không nhận hồ sơ vượt chỉ tiêu.</p></article>
        <article><h3>Điểm xét</h3><p>Theo phương án của cơ quan quản lý năm đó: xét tuyển hoặc thi tuyển. Nhà trường đăng lại nguyên văn, không tự đặt thêm môn.</p></article>
        <article><h3>Tư vấn</h3><p>Buổi tư vấn cho học sinh lớp 9 trên địa bàn được thông báo vào tháng 3 hằng năm.</p></article>
      </div>`,
  },
  "tot-nghiep": {
    title: "Tốt nghiệp THPT",
    kicker: "Kiểm tra - Đánh giá",
    html: `<p class="lead">Khối 12 năm học 2026–2027 dự kỳ thi tốt nghiệp theo lịch của Bộ Giáo dục và Đào tạo. Nhà trường phụ trách ôn tập, hồ sơ thí sinh và điểm danh.</p>
      ${docTable([
        ["Hồ sơ thí sinh", "Tháng 4/2027", "Rà soát họ tên, ngày sinh, diện ưu tiên, ảnh"],
        ["Thi thử", "Tháng 4/2027", "Hai đợt toàn khối, đúng cấu trúc đề minh họa"],
        ["Sơ yếu lý lịch", "Tháng 5/2027", "Giáo viên chủ nhiệm hoàn tất nhận xét"],
        ["Phổ biến quy chế", "Trước kỳ thi", "Buổi bắt buộc, điểm danh như tiết chính khóa"],
      ])}
      <p>Xem lộ trình ôn tại <a href="#chinh-phuc">Chinh phục kỳ thi TN THPT</a>.</p>`,
  },
  "noi-bo": {
    title: "Nội bộ",
    kicker: "Dành cho cán bộ, giáo viên, nhân viên",
    html: `<p class="lead">Kênh trao đổi trong nhà trường. Một số mục cần tài khoản do văn thư cấp, không dùng mật khẩu chung.</p>
      ${linkList([
        ["#vb-noi-bo", "Văn bản nội bộ"],
        ["#phan-mem", "Phần mềm"],
        ["#ho-so", "Hồ sơ viên chức"],
        ["#hinh-anh", "Hình ảnh / Video"],
      ])}`,
  },
  "vb-noi-bo": {
    title: "Văn bản nội bộ",
    kicker: "Nội bộ",
    html: `<p>Công văn lưu hành nội bộ: phân công tuần, lịch coi kiểm tra, thông báo họp hội đồng sư phạm. Bản đầy đủ gửi trong hộp thư công vụ.</p>
      ${docTable([
        ["NB-41", "16/10/2026", "Phân công trực tuần 8 và coi kiểm tra giữa kỳ"],
        ["NB-36", "02/10/2026", "Lịch sinh hoạt chuyên môn tháng 10"],
        ["NB-22", "28/08/2026", "Hướng dẫn vào sổ điểm điện tử học kỳ I"],
      ])}`,
  },
  "phan-mem": {
    title: "Phần mềm",
    kicker: "Nội bộ",
    html: `<p class="lead">Giáo viên, nhân viên dùng các phần mềm do nhà trường cấp tài khoản. Không gửi mật khẩu qua tin nhắn nhóm.</p>
      <div class="cards">
        <article><h3>Sổ điểm điện tử</h3><p>Vào điểm đúng hạn sau mỗi bài kiểm tra. Tổ trưởng duyệt trước khi khóa cột.</p></article>
        <article><h3>Thư công vụ</h3><p>Hộp thư đuôi cơ quan dùng cho công văn. Văn thư cấp lại khi quên mật khẩu, sau khi đối chiếu danh tính.</p></article>
        <article><h3>Phòng máy</h3><p>Đăng ký buổi thực hành tại tổ Tin. Học sinh không tự ý cài phần mềm.</p></article>
      </div>
      <div class="callout">Cổng này không có ô đăng nhập để tránh thu thập mật khẩu. Cần tài khoản, gặp văn thư trong giờ hành chính.</div>`,
  },
  "ho-so": {
    title: "Hồ sơ viên chức",
    kicker: "Nội bộ",
    html: `<p class="lead">Mỗi viên chức có một bìa hồ sơ lưu tại văn phòng, gồm quyết định tuyển dụng, hợp đồng, bằng cấp và các giấy khen đã đối chiếu bản gốc.</p>
      <h2>Khi bổ sung hồ sơ, mang theo</h2>
      <ul class="link-list">
        <li><a href="#ho-so">Bằng tốt nghiệp, chứng chỉ bồi dưỡng — bản gốc để đối chiếu, nhà trường giữ bản sao</a></li>
        <li><a href="#ho-so">Quyết định bổ nhiệm, điều động (nếu có)</a></li>
        <li><a href="#vb-noi-bo">Đơn đề nghị xác nhận quá trình công tác theo mẫu nội bộ</a></li>
      </ul>
      <p>Nhà trường không đăng dữ liệu cá nhân của viên chức lên mục công khai.</p>`,
  },
  "hinh-anh": {
    title: "Hình ảnh / Video",
    kicker: "Nội bộ · Tư liệu nhà trường",
    html: `<p class="lead">Tư liệu hình ảnh các hoạt động, sự kiện lớn và khuôn viên Trường THPT Bến Cát.</p>
      <h2>Lễ khai giảng năm học 2026–2027</h2>
      <div class="gallery">
        <figure class="gallery-wide"><img src="images/khai-giang-tap-the.jpg" alt="Tập thể Hội đồng sư phạm Trường THPT Bến Cát"><figcaption>Tập thể Hội đồng sư phạm Trường THPT Bến Cát tại Lễ khai giảng 2026–2027</figcaption></figure>
        <figure><img src="images/khai-giang-1.jpg" alt="Thầy cô tổ chuyên môn"><figcaption>Thầy cô tổ chuyên môn</figcaption></figure>
        <figure><img src="images/khai-giang-2.jpg" alt="Quý cô giáo trong tà áo dài truyền thống"><figcaption>Quý cô giáo trong tà áo dài truyền thống</figcaption></figure>
        <figure><img src="images/khai-giang-3.jpg" alt="Thầy cô các tổ bộ môn"><figcaption>Tập thể thầy cô giáo viên bộ môn</figcaption></figure>
        <figure><img src="images/khai-giang-4.jpg" alt="Đội ngũ cán bộ giáo viên"><figcaption>Cán bộ giáo viên hân hoan bước vào năm học mới</figcaption></figure>
      </div>
      <h2>Khuôn viên và cơ sở vật chất</h2>
      <div class="gallery">
        <figure><img src="images/campus-old.jpg" alt="Sân trường và cột cờ"><figcaption>Sân trường và cột cờ</figcaption></figure>
        <figure><img src="images/classroom.jpg" alt="Phòng học"><figcaption>Phòng học tiêu chuẩn</figcaption></figure>
        <figure><img src="images/library.jpg" alt="Phòng đọc thư viện"><figcaption>Thư viện nhà trường</figcaption></figure>
        <figure><img src="images/yard.jpg" alt="Sân vận động"><figcaption>Sân tập thể thao</figcaption></figure>
      </div>`,
  },
  "gioi-thieu": {
    title: "Giới thiệu",
    kicker: "Nhà trường",
    html: `<p class="lead">Trường THPT Bến Cát — thành lập tháng 9 năm 1963. Khẩu hiệu: Đạo đức, tri thức, kỹ năng.</p>
      ${linkList([
        ["#tong-quan", "Tổng quan"],
        ["#chi-bo", "Chi ủy Chi bộ"],
        ["#bgh", "Ban giám hiệu"],
        ["#to-cm", "Tổ chuyên môn"],
        ["#cong-doan", "Công đoàn"],
        ["#doan", "Đoàn thanh niên"],
      ])}`,
  },
  "tong-quan": {
    title: "Tổng quan",
    kicker: "Giới thiệu",
    html: `<p class="lead">Trường Trung học phổ thông Bến Cát được thành lập tháng 9 năm 1963, tọa lạc tại NB2A, khu phố 2, phường Bến Cát, TP. Hồ Chí Minh.</p>
      <p>Nhà trường hiện có hơn 40 lớp và trên 1.500 học sinh các khối 10, 11, 12. Năm 2007 trường được tặng thưởng Huân chương Lao động hạng Ba. Năm 2013 trường đạt chuẩn Quốc gia.</p>
      <p>Điện thoại văn phòng: 0274.3564.830. Thư điện tử: thpt-bencat@sgdbinhduong.edu.vn.</p>
      <div class="cards">
        <article><h3>Sứ mệnh</h3><p>Dạy người đi cùng dạy chữ. Mỗi học sinh ra trường có nền nếp, kiến thức vững và một kỹ năng để tự học tiếp.</p></article>
        <article><h3>Nề nếp</h3><p>Đúng giờ, đồng phục, trung thực trong kiểm tra, giữ trường lớp sạch.</p></article>
        <article><h3>Chuyên môn</h3><p>Dạy đúng chương trình, dự giờ đều, đánh giá đúng sức học.</p></article>
      </div>`,
  },
  "chi-bo": {
    title: "Chi ủy Chi bộ",
    kicker: "Giới thiệu",
    html: `<p class="lead">Chi bộ Đảng nhà trường lãnh đạo việc thực hiện nhiệm vụ chính trị: dạy và học, nền nếp, và các phong trào của cán bộ, giáo viên, nhân viên, học sinh.</p>
      <p>Sinh hoạt định kỳ mỗi tháng. Nghị quyết được chuyển thành kế hoạch của ban giám hiệu, không dừng ở biên bản. Các đợt học tập chuyên đề gắn với Không gian văn hóa Hồ Chí Minh và việc làm được kiểm đếm trong tổ chuyên môn.</p>
      <div class="callout">Lịch sinh hoạt chi bộ gửi trong kênh nội bộ. Đảng viên dự đúng giờ; báo cáo viên chuẩn bị tài liệu trước một tuần.</div>`,
  },
  "bgh": {
    title: "Ban giám hiệu",
    kicker: "Giới thiệu",
    html: `<p class="lead">Ban giám hiệu điều hành hoạt động hằng ngày theo nghị quyết chi bộ và quy chế chuyên môn.</p>
      <div class="role-grid">
        <article class="role"><h3>Hiệu trưởng</h3><p>Phụ trách chung, ký văn bản, đối ngoại và chịu trách nhiệm chất lượng giáo dục của nhà trường.</p></article>
        <article class="role"><h3>Phó hiệu trưởng chuyên môn</h3><p>Chỉ đạo dạy học, kiểm tra đánh giá, thời khóa biểu và hồ sơ tổ chuyên môn.</p></article>
        <article class="role"><h3>Phó hiệu trưởng hoạt động</h3><p>Nền nếp, công tác học sinh, bán trú nếu có, an ninh sân trường và phối hợp phụ huynh.</p></article>
      </div>
      <p>Lịch tiếp phụ huynh: sáng thứ Tư và chiều thứ Sáu, qua văn phòng đặt trước để tránh trùng cuộc họp.</p>`,
  },
  "to-cm": {
    title: "Tổ chuyên môn",
    kicker: "Giới thiệu",
    html: `<p class="lead">Tổ chuyên môn là nơi thống nhất bài dạy, ma trận đề và giờ dự. Tổ trưởng chịu trách nhiệm chất lượng bộ môn.</p>
      <div class="subject-grid">
        <article class="subject"><b>Tổ 01</b><h3>Toán</h3><p>Bồi dưỡng học sinh giỏi và phụ đạo học kỳ.</p></article>
        <article class="subject"><b>Tổ 02</b><h3>Ngữ văn</h3><p>Tập làm văn, kể chuyện, báo tường.</p></article>
        <article class="subject"><b>Tổ 03</b><h3>Ngoại ngữ</h3><p>Tiếng Anh, phòng nghe, câu lạc bộ.</p></article>
        <article class="subject"><b>Tổ 04</b><h3>Khoa học tự nhiên</h3><p>Vật lý, Hóa học, Sinh học, Công nghệ.</p></article>
        <article class="subject"><b>Tổ 05</b><h3>Khoa học xã hội</h3><p>Lịch sử, Địa lý, Giáo dục công dân.</p></article>
        <article class="subject"><b>Tổ 06</b><h3>Thể dục - Quốc phòng - Tin</h3><p>GDTC, GDQP-AN và Tin học.</p></article>
      </div>
      <h2>Hình ảnh các tổ chuyên môn</h2>
      <div class="gallery">
        <figure><img src="images/khai-giang-1.jpg" alt="Thầy cô tổ chuyên môn"><figcaption>Tổ chuyên môn lưu niệm Lễ khai giảng</figcaption></figure>
        <figure><img src="images/khai-giang-2.jpg" alt="Quý cô giáo các tổ bộ môn"><figcaption>Tổ bộ môn Xã hội - Ngoại ngữ</figcaption></figure>
        <figure><img src="images/khai-giang-3.jpg" alt="Thầy cô tổ Tự nhiên"><figcaption>Tổ bộ môn Tự nhiên - Toán - Tin</figcaption></figure>
        <figure><img src="images/khai-giang-4.jpg" alt="Đội ngũ cán bộ giáo viên"><figcaption>Tập thể giáo viên các tổ chuyên môn</figcaption></figure>
      </div>`,
  },
  "cong-doan": {
    title: "Công đoàn",
    kicker: "Giới thiệu",
    html: `<p class="lead">Công đoàn cơ sở chăm lo đoàn viên là cán bộ, giáo viên, nhân viên: thăm hỏi, hiến máu, nữ công và các phong trào dạy tốt.</p>
      <p>Họp ban chấp hành đầu tháng. Quỹ công đoàn thu chi có sổ, công khai tại hội nghị viên chức, không công khai danh sách hoàn cảnh riêng trên cổng này.</p>
      <p>Đề xuất của đoàn viên gửi tổ trưởng công đoàn hoặc bỏ vào hòm thư tại phòng giáo viên.</p>`,
  },
  "doan": {
    title: "Đoàn thanh niên",
    kicker: "Giới thiệu",
    html: `<p class="lead">Đoàn trường và các chi đoàn lớp điều hành phong trào học sinh: chào cờ, văn nghệ, tình nguyện và công trình chi đoàn.</p>
      <div class="cards">
        <article><h3>Đầu năm</h3><p>Kết nạp đoàn viên mới ở khối 10 sau đợt bồi dưỡng cảm tình đoàn.</p></article>
        <article><h3>Hằng tháng</h3><p>Ngày 26 sinh hoạt chi đoàn 30 phút, có biên bản, không họp hình thức.</p></article>
        <article><h3>Công trình</h3><p>Mỗi chi đoàn một việc nhìn thấy được: góc sách, sân sạch, hoặc đôi bạn cùng tiến.</p></article>
      </div>
      <p>Xem tin phong trào tại <a href="#phong-trao">Phong trào Đoàn / Thư viện</a>.</p>`,
  },
  "hoc-thi": {
    title: "Học - Thi trực tuyến",
    kicker: "Ôn tập có chừng mực",
    html: `<p class="lead">Kênh ôn tập của nhà trường: đề cương, lịch phòng máy và quy ước khi học trực tuyến. Không thay tiết học trên lớp.</p>
      <div class="cards">
        <article><h3>Đề cương giữa kỳ</h3><p>Tổ chuyên môn đăng đề cương trước ngày thi 10 ngày. Học sinh ôn đúng đề cương, không photocopy tràn lan.</p></article>
        <article><h3>Phòng máy</h3><p>Mở cửa chiều thứ Ba và thứ Năm, tiết 6–7, ưu tiên khối 12 và đội tuyển tin.</p></article>
        <article><h3>Quy ước</h3><p>Bật camera khi giáo viên yêu cầu trong buổi ôn online. Không nhờ người khác làm bài hộ.</p></article>
      </div>
      ${docTable([
        ["ĐC-Toán-GK1", "16/10/2026", "Đề cương Toán giữa kỳ I, khối 10–12"],
        ["ĐC-Văn-GK1", "16/10/2026", "Đề cương Ngữ văn giữa kỳ I"],
        ["ĐC-Anh-GK1", "17/10/2026", "Đề cương Tiếng Anh, kèm file nghe tại phòng bộ môn"],
      ])}
      <div class="callout">Tài khoản học trực tuyến do giáo viên bộ môn cấp trên lớp. Cổng thông tin không hỏi mật khẩu.</div>`,
  },
  "thu-vien": {
    title: "Thư viện",
    kicker: "Bạn đọc",
    html: `<p class="lead">Thư viện phục vụ học sinh và giáo viên trong giờ ra chơi và hai buổi chiều cố định.</p>
      <div class="gallery">
        <figure><img src="images/library.jpg" alt="Phòng đọc thư viện nhà trường"><figcaption>Phòng đọc</figcaption></figure>
        <figure><img src="images/classroom.jpg" alt="Góc tự học"><figcaption>Giữ yên lặng như trong giờ học</figcaption></figure>
      </div>
      <h2>Giờ mở cửa</h2>
      ${docTable([
        ["Sáng", "7:15–11:00", "Mượn trả trong giờ ra chơi, không vào giữa tiết"],
        ["Chiều T3, T5", "13:30–16:30", "Tự học, đọc báo, ôn thi"],
        ["Thứ Bảy", "Đóng cửa", "Trừ tuần lễ đọc sách có thông báo riêng"],
      ])}
      <h2>Thể lệ</h2>
      <ol class="steps">
        <li><strong>Thẻ bạn đọc</strong><span>Dùng thẻ học sinh. Mượn tối đa 02 cuốn, hạn 14 ngày.</span></li>
        <li><strong>Giữ sách</strong><span>Không viết vào sách. Mất hoặc làm hỏng thì bồi thường đúng đầu sách.</span></li>
        <li><strong>Phòng đọc</strong><span>Không ăn uống, không nói chuyện điện thoại. Thủ thư nhắc hai lần thì mời ra.</span></li>
      </ol>`,
  },
};

Object.assign(PAGES, NEWS);

const LEADS = [
  ["Từ tháng 9 năm 1963", "Ngôi trường công lập tại phường Bến Cát, nơi hơn 1.500 học sinh học tập, rèn luyện mỗi ngày."],
  ["Đội ngũ tâm huyết", "Thầy cô giáo luôn tận tụy, đồng hành cùng học sinh trên con đường tri thức và rèn luyện nhân cách."],
  ["Đạo đức - Tri thức - Kỹ năng", "Phong trào thi đua dạy tốt, học tốt sôi nổi ngay từ những ngày đầu năm học."],
  ["40+ lớp học", "Mỗi tiết học là một bước vững trên nền nếp: đạo đức, tri thức và kỹ năng song hành."],
  ["Chuẩn quốc gia từ 2013", "Sân bãi, thư viện và các tổ chuyên môn cùng nuôi thói quen tự học, tự rèn."],
];

function plain(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function bootPortal() {
  if (typeof document === "undefined") return () => {};
  const nav = document.getElementById("mainNav");
  const home = document.getElementById("view-home");
  const page = document.getElementById("view-page");
  if (!nav || !home || !page || nav.dataset.ready === "1") return () => {};
  nav.dataset.ready = "1";

  const burger = document.querySelector(".hamburger");
  const titleEl = document.getElementById("page-title");
  const kickerEl = document.getElementById("page-kicker");
  const bodyEl = document.getElementById("page-body");
  const crumbEl = document.getElementById("crumb-current");
  const searchForm = document.getElementById("searchForm");
  const searchPop = document.getElementById("searchPop");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const toTop = document.querySelector(".to-top");
  const today = document.getElementById("today");
  const slides = Array.from(document.querySelectorAll(".hero .slide"));
  const dots = Array.from(document.querySelectorAll(".dot"));
  const kicker = document.getElementById("heroKicker");
  const lead = document.getElementById("heroLead");
  let slideIndex = 0;
  let timer = 0;

  if (today) {
    const now = new Date();
    const names = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    today.textContent = `${names[now.getDay()]}, ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  }

  function mobile() {
    return window.matchMedia("(max-width: 1100px)").matches;
  }

  function closeMenu() {
    nav.classList.remove("is-open");
    if (burger) burger.setAttribute("aria-expanded", "false");
    nav.querySelectorAll(".nav-item.open").forEach((item) => {
      item.classList.remove("open");
      const link = item.querySelector(":scope > a");
      if (link) link.setAttribute("aria-expanded", "false");
    });
  }

  function showSlide(index) {
    if (!slides.length) return;
    slideIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === slideIndex));
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === slideIndex);
      dot.setAttribute("aria-current", i === slideIndex ? "true" : "false");
    });
    const copy = LEADS[slideIndex];
    if (copy && kicker && lead) {
      kicker.textContent = copy[0];
      lead.textContent = copy[1];
    }
  }

  function queueSlide() {
    window.clearInterval(timer);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    timer = window.setInterval(() => showSlide(slideIndex + 1), 6000);
  }

  function currentId() {
    const id = (location.hash || "#trang-chu").replace(/^#/, "");
    if (!id || id === "trang-chu") return "trang-chu";
    if (id === "lien-he" || id === "ve-nha-truong" || id === "tin-moi") return id;
    return PAGES[id] ? id : "trang-chu";
  }

  function markCurrent(id) {
    nav.querySelectorAll("a").forEach((link) => {
      if (link.getAttribute("href") === `#${id}`) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function render() {
    const id = currentId();
    const isHome = id === "trang-chu" || id === "lien-he" || id === "ve-nha-truong" || id === "tin-moi";
    home.hidden = !isHome;
    page.hidden = isHome;
    markCurrent(id === "ve-nha-truong" || id === "tin-moi" ? "trang-chu" : id);
    closeMenu();
    if (searchPop) searchPop.hidden = true;
    if (!isHome) {
      const data = PAGES[id];
      if (titleEl) titleEl.textContent = data.title;
      if (kickerEl) kickerEl.textContent = data.kicker;
      if (crumbEl) crumbEl.textContent = data.title;
      if (bodyEl) bodyEl.innerHTML = data.html;
      document.title = `${data.title} — Trường THPT Bến Cát`;
      window.scrollTo(0, 0);
    } else {
      document.title = "Trường THPT Bến Cát";
      if (id === "lien-he" || id === "ve-nha-truong" || id === "tin-moi") {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  function onClick(event) {
    const top = event.target.closest(".to-top");
    if (top) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const dot = event.target.closest(".dot");
    if (dot) {
      showSlide(dots.indexOf(dot));
      queueSlide();
      return;
    }
    if (event.target.closest(".slide-btn.next")) {
      showSlide(slideIndex + 1);
      queueSlide();
      return;
    }
    if (event.target.closest(".slide-btn.prev")) {
      showSlide(slideIndex - 1);
      queueSlide();
      return;
    }
    if (event.target.closest(".hamburger")) {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      if (burger) burger.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }
    const parentLink = event.target.closest(".has-sub > a");
    if (parentLink && mobile()) {
      event.preventDefault();
      const item = parentLink.parentElement;
      const willOpen = !item.classList.contains("open");
      item.parentElement.querySelectorAll(".nav-item.open").forEach((node) => {
        if (node !== item) {
          node.classList.remove("open");
          const link = node.querySelector(":scope > a");
          if (link) link.setAttribute("aria-expanded", "false");
        }
      });
      item.classList.toggle("open", willOpen);
      parentLink.setAttribute("aria-expanded", willOpen ? "true" : "false");
      return;
    }
    if (event.target.closest(".dropdown a, .nav-row-2 a, .nav-home a")) closeMenu();
    const jump = event.target.closest("a[href^='#']");
    if (!jump) return;
    const href = jump.getAttribute("href");
    if (!href || href.length < 2) return;
    event.preventDefault();
    if (location.hash === href) render();
    else location.hash = href;
  }

  function onSubmitSearch(event) {
    event.preventDefault();
    if (!searchPop || !searchForm) return;
    const input = searchForm.querySelector("input");
    const query = plain(input.value.trim());
    searchPop.hidden = false;
    if (query.length < 2) {
      searchPop.innerHTML = "<p>Nhập ít nhất 2 ký tự.</p>";
      return;
    }
    const hits = Object.entries(PAGES).filter(([, data]) => plain(`${data.title} ${data.kicker} ${data.html}`).includes(query));
    if (!hits.length) {
      searchPop.innerHTML = "<p>Không thấy mục phù hợp. Thử “thời khóa biểu”, “tuyển sinh” hoặc “văn bản”.</p>";
      return;
    }
    searchPop.innerHTML = hits
      .slice(0, 8)
      .map(([id, data]) => `<a href="#${id}"><strong>${data.title}</strong> — ${data.kicker}</a>`)
      .join("");
  }

  function onSubmitContact(event) {
    event.preventDefault();
    if (!contactForm) return;
    const data = new FormData(contactForm);
    const ten = String(data.get("ten") || "").trim();
    const sdt = String(data.get("sdt") || "").trim();
    const email = String(data.get("email") || "").trim();
    const nd = String(data.get("nd") || "").trim();
    const body = `Họ và tên: ${ten}\nĐiện thoại: ${sdt}\nEmail: ${email}\n\n${nd}`;
    const url = `mailto:thpt-bencat@sgdbinhduong.edu.vn?subject=${encodeURIComponent("Liên hệ từ cổng thông tin THPT Bến Cát")}&body=${encodeURIComponent(body)}`;
    if (formStatus) {
      formStatus.hidden = false;
      formStatus.textContent = "Đã mở thư nháp. Nếu máy không hiện ứng dụng thư, hãy gửi trực tiếp tới thpt-bencat@sgdbinhduong.edu.vn hoặc gọi 0274.3564.830.";
    }
    window.location.href = url;
  }

  function onScroll() {
    if (!toTop) return;
    toTop.hidden = window.scrollY < 500;
  }

  document.addEventListener("click", onClick);
  window.addEventListener("hashchange", render);
  window.addEventListener("scroll", onScroll, { passive: true });
  if (searchForm) searchForm.addEventListener("submit", onSubmitSearch);
  if (contactForm) contactForm.addEventListener("submit", onSubmitContact);
  showSlide(0);
  queueSlide();
  render();
  onScroll();

  return () => {
    nav.dataset.ready = "";
    document.removeEventListener("click", onClick);
    window.removeEventListener("hashchange", render);
    window.removeEventListener("scroll", onScroll);
    if (searchForm) searchForm.removeEventListener("submit", onSubmitSearch);
    if (contactForm) contactForm.removeEventListener("submit", onSubmitContact);
    window.clearInterval(timer);
  };
}

if (typeof window !== "undefined") {
  window.bootPortal = bootPortal;
}

if (typeof document !== "undefined" && document.body?.getAttribute("data-app") !== "bencat") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => bootPortal());
  else bootPortal();
}
