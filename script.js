document.querySelectorAll('.actions button').forEach((button) => {
  button.addEventListener('click', () => {
    const counter = button.querySelector('span');
    counter.textContent = String(Number(counter.textContent) + 1);
  });
});
