// Tạo các ngôi sao
const spaceBackground = document.getElementById('spaceBackground');
const starCount = 300;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Kích thước ngẫu nhiên từ 1-3px
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Vị trí ngẫu nhiên
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    // Tốc độ nhấp nháy ngẫu nhiên
    star.style.setProperty('--duration', `${Math.random() * 5 + 3}s`);
    
    // Thêm hiệu ứng sáng tối ngẫu nhiên
    const brightness = Math.random() * 0.8 + 0.2;
    star.style.opacity = brightness;
    
    spaceBackground.appendChild(star);
}

// Tạo sao băng
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    
    // Vị trí ngẫu nhiên
    shootingStar.style.top = `${Math.random() * 50 + 10}%`;
    shootingStar.style.left = `${Math.random() * 50 - 100}%`;
    
    // Tốc độ ngẫu nhiên
    const speed = Math.random() * 3 + 2;
    shootingStar.style.setProperty('--speed', `${speed}s`);
    
    // Độ dài ngẫu nhiên
    const length = Math.random() * 100 + 100;
    shootingStar.style.width = `${length}px`;
    
    spaceBackground.appendChild(shootingStar);
    
    // Xóa sao băng sau khi animation kết thúc
    setTimeout(() => {
        shootingStar.remove();
    }, speed * 1000);
}

// Tạo sao băng định kỳ
setInterval(createShootingStar, 2500);

// Tạo ngay 3 sao băng khi load trang
for (let i = 0; i < 3; i++) {
    setTimeout(createShootingStar, i * 800);
}

// Hiệu ứng parallax đơn giản
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const nebulas = document.querySelectorAll('.nebula');
    nebulas[0].style.transform = `translate(${x * 30}px, ${y * 30}px) scale(1.05)`;
    nebulas[1].style.transform = `translate(${x * -20}px, ${y * -20}px) scale(1.03)`;
});

// Xử lý chuyển tab
const menuBtns = document.querySelectorAll('.menu-btn');
const contentSections = document.querySelectorAll('.content-section');

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Xóa active khỏi tất cả các nút và section
        menuBtns.forEach(b => b.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
        
        // Thêm active vào nút được click
        btn.classList.add('active');
        
        // Hiển thị section tương ứng
        const sectionId = btn.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
        
        // Cuộn mượt đến phần nội dung
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Xử lý form đăng ký
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Lấy dữ liệu form
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        major: document.getElementById('major').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    // Ở đây bạn có thể gửi dữ liệu đến server hoặc xử lý tùy ý
    console.log('Form submitted:', formData);
    
    // Hiển thị thông báo
    alert('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong vòng 3 ngày làm việc.');
    
    // Reset form
    registerForm.reset();
    
    // Chuyển về tab giới thiệu
    document.querySelector('.menu-btn[data-section="about"]').click();
});

// Thêm hiệu ứng khi cuộn trang
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const nebula1 = document.querySelector('.nebula-1');
    const nebula2 = document.querySelector('.nebula-2');
    
    nebula1.style.transform = `translateY(${scrollPosition * 0.2}px) translateX(${scrollPosition * 0.1}px)`;
    nebula2.style.transform = `translateY(${scrollPosition * 0.15}px) translateX(${-scrollPosition * 0.1}px)`;
});

// Animation khi load trang
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.animation = 'fadeInUp 1s ease-out';
});