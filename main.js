const nutChay = document.getElementById('no');
const nutKichHoat = document.getElementById('yes');
const nutTaiLieu = document.getElementById('dao');
const title = document.getElementById('cauhoi');

// --- PHẦN 1: Làm nút chạy trốn (Đã tối ưu cho Mobile) ---
function diChuyenNut(e) {
    // Ngăn chặn hành động mặc định để tránh cuộn trang khi chạm trên điện thoại
    if (e.type === 'touchstart') e.preventDefault();

    nutChay.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'; 
    nutChay.style.position = 'fixed';
    nutChay.style.zIndex = '9999'; // Đảm bảo nút luôn nổi lên trên
    
    // Giới hạn vùng nhảy để tránh nút nhảy sát mép quá khó nhìn
    const padding = 20;
    const maxX = window.innerWidth - nutChay.offsetWidth - padding;
    const maxY = window.innerHeight - nutChay.offsetHeight - padding;
    
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    nutChay.style.left = randomX + 'px';
    nutChay.style.top = randomY + 'px';
}

// Dùng pointerover cho PC (mượt hơn mouseover)
nutChay.addEventListener('pointerover', diChuyenNut);

// Dùng touchstart cho Mobile để phản hồi ngay lập tức khi ngón tay vừa chạm
nutChay.addEventListener('touchstart', diChuyenNut, { passive: false });

// Ngăn không cho bấm trúng nút chạy trốn
nutChay.addEventListener('click', (e) => {
    e.preventDefault();
    diChuyenNut(e); // Nếu lỡ bấm trúng thì nó cũng nhảy đi luôn
});

// --- PHẦN 2: Click nút đứng im để hiện nút thật ---
nutKichHoat.addEventListener('click', function() {
    nutChay.style.display = 'none';
    nutKichHoat.style.display = 'none';
    title.style.display = 'none';
    
    // Hiện nút thật
    nutTaiLieu.style.display = 'inline-block';
    // Thêm hiệu ứng xuất hiện nhẹ nhàng bằng CSS hoặc JS
    nutTaiLieu.style.animation = 'fadeIn 0.5s forwards';
});