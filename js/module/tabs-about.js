const advantageBtns = document.querySelectorAll('.advantage__btn');
const advantageContentItems = document.querySelectorAll('.advantage__content-item');

advantageBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    advantageContentItems.forEach((item, j) => {
      if (i === j) {
        advantageBtns[j].classList.add('advantage__btn_active');
        advantageContentItems[j].classList.add('advantage__content-item_active');
      } else {
        advantageBtns[j].classList.remove('advantage__btn_active');
        advantageContentItems[j].classList.remove('advantage__content-item_active');
      }
    });
  });
});