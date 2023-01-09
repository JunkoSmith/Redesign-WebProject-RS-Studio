const btn1 = document.getElementById('btn1');
const btn3 = document.getElementById('btn3');
const mask = document.getElementById('mask');
const mask2 = document.getElementById('mask2');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');

btn1.addEventListener('click', () => {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
});

mask.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});

btn3.addEventListener('click', () => {
  mask2.classList.remove('hidden');
  modal2.classList.remove('hidden');
});

mask.addEventListener('click', () => {
  mask2.classList.add('hidden');
  modal2.classList.add('hidden');
});