const jobPostBtn = document.getElementById('job-post-btn');
const closeModalBtn = document.getElementById('modal-close-btn');
const modalForm = document.getElementById('modal-form');
const overlay = document.getElementById('overlay');
const inputs = document.querySelectorAll('input');



jobPostBtn.addEventListener('click', () => {
  
  modalForm.classList.remove('hidden');
  overlay.classList.remove('hidden');
}) 

overlay.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
  modalForm.classList.add('hidden');
  overlay.classList.remove('hidden');
  })

closeModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  inputs.forEach(input => input.value = '');
  modalForm.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  
});

