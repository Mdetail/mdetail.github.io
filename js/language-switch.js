function switchLang(lang, btn) {
  const modalContent = btn.closest('.modal-content');
  const en = modalContent.querySelector('.en');
  const ru = modalContent.querySelector('.ru');

  if(lang === 'en') {
    en.style.display = 'block';
    ru.style.display = 'none';
  } else {
    en.style.display = 'none';
    ru.style.display = 'block';
  }
}
  // Открытие модалки
  document.querySelectorAll('[data-modal]').forEach(link => {
    link.addEventListener('click', function() {
      const modalId = this.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "flex"; // показываем модалку
        document.body.style.overflow = "hidden"; // блокируем прокрутку
      }
    });
  });

  // Закрытие модалки
  document.querySelectorAll('.modal .close').forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.style.display = "none"; // скрываем модалку
      document.body.style.overflow = ""; // разблокируем прокрутку
    });
  });

