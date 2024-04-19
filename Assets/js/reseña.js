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
        
        const reviewHeader = document.createElement('div');
        reviewHeader.classList.add('review-header');
        reviewHeader.textContent = `Reseña de ${name}`;
  
        const starsElement = document.createElement('div');
        starsElement.classList.add('stars');
        starsElement.innerHTML = '&#9733;'.repeat(stars);
  
        const reviewBody = document.createElement('div');
        reviewBody.textContent = reviewText;
  
        reviewElement.appendChild(reviewHeader);
        reviewElement.appendChild(starsElement);
        reviewElement.appendChild(reviewBody);
  
        reviewsContainer.prepend(reviewElement);
  
        // Limpiar campos después de enviar la reseña
        inputName.value = '';
        inputReview.value = '';
        starsInput.value = 5;
      } else {
        alert('Por favor, ingresa tu nombre y tu reseña antes de enviar.');
      }
    });
  });
  