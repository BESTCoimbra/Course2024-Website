const navbarPhone = document.querySelector(".options-phone");
const optionsPhone = document.querySelectorAll('.nav-option2');

var btn = document.querySelector(".btn");
btn.addEventListener('click', function() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    this.classList.add('not-active');
    navbarPhone.style.display = "none";
  } else {
    this.classList.remove('not-active');
    this.classList.add('active');
    navbarPhone.style.display = "flex";
  }
});

optionsPhone.forEach(option => {
  option.addEventListener('click', function() {
    console.log('atão');
    btn.classList.remove('active');
    btn.classList.add('not-active');
    navbarPhone.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.best-gallery-buttons button');
  const imageRows = document.querySelectorAll('.best-gallery-images .best-gallery-image-row, .best-gallery-images .best-gallery-image-row-2');
  function hideAllImageRows() {
    imageRows.forEach(row => {
      row.style.display = 'none';
    });
  }
  function showImageRow(year) {
    const selectedRow = document.getElementById(`gallery-${year}`);
    const selectedRow2 = document.getElementById(`gallery-${year}-2`);
    if (selectedRow) {
      selectedRow.style.display = 'flex';
    }
    if (selectedRow2) {
      selectedRow2.style.display = 'flex';
    }
  }
  hideAllImageRows();
  showImageRow('2023');
  buttons.forEach(button => {
    if (button.getAttribute('data-year') === '2023') {
      button.classList.add('clicked');
    }
    button.addEventListener('click', function () {
      const year = this.getAttribute('data-year');
      hideAllImageRows();
      showImageRow(year);
      buttons.forEach(btn => btn.classList.remove('clicked'));
      this.classList.add('clicked');
    });
  });
});


