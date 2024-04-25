const floatingButton = document.getElementById('floatingButton');
const iconosRedes = document.querySelector('.iconos-redes');

floatingButton.addEventListener('click', () => {
  iconosRedes.classList.toggle('show');
});
