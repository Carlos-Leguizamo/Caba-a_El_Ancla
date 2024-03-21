const themeToggle = document.querySelector('#bd-theme');

themeToggle.addEventListener('click', () => {
  // Obtener el color actual de --text-color
  const computedStyle = window.getComputedStyle(document.body);
  const textColorVar = computedStyle.getPropertyValue('--text-color');

  // Verificar si el color actual es blanco (modo oscuro)
  if (textColorVar.trim() === 'rgb(255, 255, 255)' || textColorVar.trim() === '#ffffff') {
    // Si el color actual es blanco, cambiar a modo claro (texto negro)
    document.documentElement.style.setProperty('--text-color', 'var(--text-color-light)');
  } else {
    // Si el color actual no es blanco, cambiar a modo oscuro (texto blanco)
    document.documentElement.style.setProperty('--text-color', 'var(--text-color-dark)');
  }
});



