const viewer = document.querySelector('#viewer');
const picture = document.querySelector('#viewer-image');
const caption = document.querySelector('#viewer-caption');
let previousFocus;
for (const button of document.querySelectorAll('.shot')) {
  button.addEventListener('click', () => {
    previousFocus = button;
    picture.src = button.dataset.full;
    picture.alt = button.dataset.caption;
    caption.textContent = button.dataset.caption;
    viewer.showModal();
  });
}
document.querySelector('#close-viewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => {
  if (event.target === viewer) {
    const box = viewer.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) viewer.close();
  }
});
viewer.addEventListener('close', () => previousFocus?.focus());
