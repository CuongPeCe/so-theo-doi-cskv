# Sổ công việc Cường

Ứng dụng web (chạy trên trình duyệt, cài được lên điện thoại) để giao việc và theo dõi việc nộp báo cáo của Cảnh sát khu vực.

## Tính năng
- **Giao việc & theo dõi**: hạn, số ngày chậm, nhắc lần 1/2/3, tin nhắn Zalo soạn sẵn, lý do giải trình, ghi chú trao đổi.
- **Bài nộp chưa đạt → yêu cầu nộp lại** kèm link nộp bổ sung; **tự kiểm tra file Excel** CSKV nộp (đúng mẫu, đủ mục I/II/III, lý do loại…).
- **Mẫu việc & lặp lại hằng tháng**, **tiêu chí đạt**, **nhãn lĩnh vực** (PCCC, CNCH, VK-VLN-CCHT…).
- **Bảng Kanban** (kéo thả), **Lịch** hạn nộp, **tìm kiếm chung**.
- **Sổ chậm muộn** + **chấm điểm CSKV** (tham khảo, tự cấu hình), xuất Excel; **phiếu giao việc .docx**.
- **Đồng bộ Google Drive** (tự ghi nhận người nộp) và **lưu dữ liệu dùng chung** qua Google Apps Script của chính đơn vị.
- **Thông báo trình duyệt**, cài như ứng dụng (PWA).

## Sử dụng
- Mở trang GitHub Pages của repo. Lần đầu: **📂 Khôi phục** từ file sao lưu `.json`, hoặc bật **☁️ Lưu dữ liệu lên Google** để tải dữ liệu dùng chung.
- Hướng dẫn cài Apps Script: tab **⚙️ Cài đặt → 📘 Hướng dẫn cài đặt + mã Apps Script**.

## Dữ liệu cá nhân
Mã nguồn không chứa họ tên, số điện thoại, email của cán bộ. Dữ liệu chỉ nằm trong trình duyệt hoặc Google Drive của đơn vị.
Không commit file sao lưu `.json` vào repo.
