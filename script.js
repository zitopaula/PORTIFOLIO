const botaoTema = document.getElementById('btn-tema');

botaoTema.addEventListener('click', function () {
  document.body.classList.toggle('tema-claro');

  if (document.body.classList.contains('tema-claro')) {
    botaoTema.textContent = 'Tema Escuro';
  } else {
    botaoTema.textContent = 'Tema Claro';
  }
});

const objetivos = document.querySelectorAll('.objetivo-item');

objetivos.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('aberto');

    const simbolo = item.querySelector('.objetivo-titulo span');
    if (item.classList.contains('aberto')) {
      simbolo.textContent = '−';
    } else {
      simbolo.textContent = '+';
    }
  });
});