const nutChay = document.getElementById('no');
const nutKichHoat = document.getElementById('yes');
const nutTaiLieu = document.getElementById('dao');
const title = document.getElementById('cauhoi');

// --- PHẦN 1: Làm nút chạy trốn ---
nutChay.addEventListener('mouseover', function() {
    
    nutChay.style.transition = 'all 0.2s ease'; 

    nutChay.style.position = 'fixed';
    
    const maxX = window.innerWidth - nutChay.offsetWidth;
    const maxY = window.innerHeight - nutChay.offsetHeight;
    
    // Thêm transition bằng JS để đảm bảo nó luôn mượt
    nutChay.style.left = Math.floor(Math.random() * maxX) + 'px';
    nutChay.style.top = Math.floor(Math.random() * maxY) + 'px';
});

// Ngăn không cho bấm trúng nút chạy trốn
nutChay.addEventListener('click', (e) => e.preventDefault());

// --- PHẦN 2: Click nút đứng im để hiện nút thật ---
nutKichHoat.addEventListener('click', function() {
    nutChay.style.display = 'none';
    nutKichHoat.style.display = 'none';
    title.style.display = 'none';
    // Hiện nút thật và tạo hiệu ứng xuất hiện
    nutTaiLieu.style.display = 'inline-block';
});
