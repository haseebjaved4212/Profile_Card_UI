document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const card = document.querySelector('.card');
  const img = card.querySelector('img');
  const nameDiv = card.querySelector('.name');
  const occupationDiv = card.querySelector('.occupation');
  const infoDiv = card.querySelector('.info');
  const [picInput, nameInput, occInput, infoInput] = form.querySelectorAll('input[type="url"], input[type="text"]');

  // Hide card initially
  card.style.display = 'none';

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Check if all fields are filled
    if (
      picInput.value.trim() &&
      nameInput.value.trim() &&
      occInput.value.trim() &&
      infoInput.value.trim()
    ) {
      img.src = picInput.value;
      nameDiv.textContent = nameInput.value;
      occupationDiv.textContent = occInput.value;
      infoDiv.textContent = infoInput.value;
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });

  // Optional: Hide card if any input is cleared after submit
  form.addEventListener('input', function () {
    if (
      !picInput.value.trim() ||
      !nameInput.value.trim() ||
      !occInput.value.trim() ||
      !infoInput.value.trim()
    ) {
      card.style.display = 'none';
    }
  });
});