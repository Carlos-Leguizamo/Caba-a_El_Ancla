document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitReview');
  const inputName = document.getElementById('inputName');
  const inputReview = document.getElementById('inputReview');
  const starsInput = document.getElementById('stars');
  const reviewsContainer = document.getElementById('reviews');

  submitButton.addEventListener('click', () => {
    const name = inputName.value.trim();
    const reviewText = inputReview.value.trim();
    const stars = parseInt(starsInput.value);

    if (name !== '' && reviewText !== '') {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');

      const randomImage = document.createElement('img');
      randomImage.classList.add('review-image');
      randomImage.src = getRandomImageUrl(); // Función para obtener una URL aleatoria de imagen
      reviewElement.appendChild(randomImage);

      const reviewContent = document.createElement('div');
      reviewContent.classList.add('review-content');

      const reviewHeader = document.createElement('div');
      reviewHeader.classList.add('review-header');
      reviewHeader.textContent = `Reseña de ${name}`;

      const starsElement = document.createElement('div');
      starsElement.classList.add('stars');
      starsElement.innerHTML = '&#9733;'.repeat(stars);

      const reviewBody = document.createElement('div');
      reviewBody.classList.add('review-body');
      reviewBody.textContent = reviewText;

      reviewContent.appendChild(reviewHeader);
      reviewContent.appendChild(starsElement);
      reviewContent.appendChild(reviewBody);

      reviewElement.appendChild(reviewContent);

      reviewsContainer.prepend(reviewElement);

      // Limpiar campos después de enviar la reseña
      inputName.value = '';
      inputReview.value = '';
      starsInput.value = 5;
    } else {
      alert('Por favor, ingresa tu nombre y tu reseña antes de enviar.');
    }
  });

  // Función para obtener una URL aleatoria de imagen
  function getRandomImageUrl() {
    const imageUrls = [
      "./img/reseña/1.jpg",
      "./img/reseña/2.jpg",
      "./img/reseña/3.jpg",
      // Agrega más URLs de imágenes aquí
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }
});
