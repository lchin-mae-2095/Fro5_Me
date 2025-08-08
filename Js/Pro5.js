// Xử lý hiển thị modal khi nhấn Contact
document.getElementById('contact-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('contact-modal').style.display = 'flex';
});

// Xử lý đóng modal Contact khi nhấn nút đóng
document.getElementById('close-modal').addEventListener('click', function() {
  document.getElementById('contact-modal').style.display = 'none';
});

// Đóng modal Contact khi nhấn ra ngoài nội dung
document.getElementById('contact-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});

// Xử lý hiển thị modal khi nhấn Exit
document.getElementById('exit-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('exit-modal').style.display = 'flex';
});

// Xử lý đóng modal Exit khi nhấn nút đóng
document.getElementById('close-exit-modal').addEventListener('click', function() {
  document.getElementById('exit-modal').style.display = 'none';
});

// Đóng modal Exit khi nhấn ra ngoài nội dung
document.getElementById('exit-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});

// Xử lý nút "Follow me"
document.getElementById('btn-hire').addEventListener('click', function() {
  alert('Thank you for your interest! You can contact me via social media or email.');
});

// Navigation active link highlighting
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    navLinks.forEach(lnk => lnk.classList.remove('active'));
    e.target.classList.add('active');
  });
});