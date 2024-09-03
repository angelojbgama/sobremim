const acordeonTrigger = document.querySelectorAll('.acordeon .trigger');

acordeonTrigger.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    const acordeon = trigger.parentElement;
    const content = acordeon.querySelector('.content');
    const isOpen = acordeon.classList.contains('open');

    if (isOpen) {
      // Fechando o acordeão
      content.style.maxHeight = 0;
      content.style.opacity = 0;
      acordeon.classList.remove('open');
    } else {
      // Abrindo o acordeão
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = 1;
      acordeon.classList.add('open');
    }
  });
});
