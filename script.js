onload = () => {
  document.body.classList.remove("container");
};

document.getElementById('mostrarFlores').addEventListener('click', function() {
  var floresContainer = document.getElementById('floresContainer');
  if (floresContainer.style.display === 'none') {
      floresContainer.style.display = 'block'; // Mostrar flores cuando se hace clic en el botón
  } else {
      floresContainer.style.display = 'none'; // Ocultar flores si ya están visibles
  }
});

