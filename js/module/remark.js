const remark = document.querySelector('.remark');
let height = remark.offsetHeight;
remark.style.height = `${height}px`;

const closeRemark = () => {
  height -= 3; // цифра - это кол-во пикселей на сколько будет уменьшаться высота каждую иттерацию
  remark.style.height = `${height}px`; 
  // remark.style.height = `${--height}px`; // эту строку раскомментировать, а предыдущие две закомментировать, если надо чтобы было медленно

  if (height > 0) {
    requestAnimationFrame(closeRemark);
  } else {
    remark.style.display = 'none';
  }
};

// setTimeout(closeRemark, 5000); // скрытие через 5 сек

remark.addEventListener('click', closeRemark); // скрытие по клику