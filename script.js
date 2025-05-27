// Navbar toggle
const menuBtn = document.querySelector(".menu-btn");
const navbarMenu = document.querySelector(".navbar .menu");

menuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

// Sticky navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 20);

  // Scroll-up button toggle
  const scrollUpBtn = document.querySelector(".scroll-up-btn");
  if (scrollUpBtn) {
    scrollUpBtn.classList.toggle("show", window.scrollY > 500);
  }
});

// Scroll-up button behavior
document.querySelector(".scroll-up-btn")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Close menu when nav item clicked (mobile)
document.querySelectorAll(".navbar .menu li a").forEach(item => {
  item.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});


document.addEventListener('DOMContentLoaded', function() {
const downloadBtn = document.getElementById('downloadBtn');
 if (downloadBtn) {
  downloadBtn.addEventListener('click', function() {
   const link = document.createElement('a');
 link.href = './images/banner/Dighanchilayout.pdf'; 
  link.download = 'Dighanchilayout.pdf';
  link.click();
 });
   } 
  });

  document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtnk');
     if (downloadBtn) {
      downloadBtn.addEventListener('click', function() {
       const link = document.createElement('a');
       link.href = './images/banner/kharsundi_layout.pdf'; 
       link.download = 'kharsundilayout.pdf';
      link.click();
     });
       } 
      });
  
// document.getElementById('downloadBtn').addEventListener('click', function() {
//   const link = document.createElement('a');
//   link.href = './images/banner/Dighanchilayout.pdf'; 
//   link.download = 'Dighanchilayout.pdf';
//   link.click();
// });


document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('downloadBtnf');
   if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
     const link = document.createElement('a');
     link.href = './images/banner/'; 
     link.download = 'Sanglilayout.pdf';
    link.click();
   });
     } 
    });

    

 
