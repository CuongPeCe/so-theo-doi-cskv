# Sổ theo dõi tiến độ, chậm muộn báo cáo của CSKV

Ứng dụng web chạy hoàn toàn trên trình duyệt để theo dõi việc nộp báo cáo của Cảnh sát khu vực:
giao nhiệm vụ, theo dõi hạn, số ngày chậm, nhắc lần 1/2/3, tổng hợp tin nhắn gửi nhóm Zalo,
ghi lý do giải trình, đánh dấu sai mẫu, đồng bộ bài nộp từ thư mục Google Drive (qua Apps Script),
xuất sổ chậm muộn ra Excel.

## Sử dụng
- Mở trang GitHub Pages của repo (hoặc mở `index.html`).
- Lần đầu: bấm **📂 Khôi phục** và chọn file sao lưu `.json` để nạp danh sách CSKV và dữ liệu.
- Dữ liệu chỉ lưu trong trình duyệt của máy đang dùng (localStorage), không gửi lên GitHub.
  Bấm **💾 Sao lưu** định kỳ.

## Dữ liệu cá nhân
Mã nguồn không chứa họ tên, số điện thoại, email của cán bộ. Không commit file sao lưu `.json` vào repo.
