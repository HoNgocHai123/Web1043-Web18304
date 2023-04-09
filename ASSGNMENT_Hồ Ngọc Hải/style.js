
// slider chạy qua lại


  var slideIndex = 0;

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";   
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

  // gọi hàm showSlides() mỗi 3 giây
  setInterval(showSlides, 1000);

// hiện danh mục ẩn

// Lấy liên kết "Danh Mục Sản Phẩm"
var dropdownLink = document.querySelector('.dropbtn');

// ẩn hiện danh mục
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
  if (dropdownContent.style.display === 'none') {
    dropdownContent.style.display = 'block';
  } else {
    dropdownContent.style.display = 'none';
  }
});



  
  
  
  
  
  