const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
  const acordeon = trigger.parentElement
  trigger.setAttribute('aria-expanded', acordeon.classList.contains('open'))

  trigger.addEventListener('click', () => {
    const isOpen = acordeon.classList.toggle('open')
    trigger.setAttribute('aria-expanded', isOpen)
  })
})
