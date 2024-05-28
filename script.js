document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões com a classe 'exibirBtn'
    const botoesExibir = document.querySelectorAll('.exibirBotao');
  
    // Itera sobre cada botão selecionado
    botoesExibir.forEach(function(botao) {
      // Adiciona um evento de clique a cada botão
      botao.addEventListener('click', function() {
        // Obtém o valor do atributo data-target do botão clicado
        const targetId = botao.getAttribute('data-target');
        // Obtém o elemento de conteúdo correspondente ao targetId
        const conteudo = document.getElementById(targetId);
  
        // Verifica se o conteúdo está atualmente oculto (display: none)
        if (conteudo.style.display === 'none') {
          // Se estiver oculto, muda o estilo para 'block' para exibir o conteúdo
          conteudo.style.display = 'block';
          // Também muda o texto do botão para 'Clique para Ocultar'
          botao.textContent = 'Clique para Ocultar';
        } else {
          // Se o conteúdo estiver visível, muda o estilo para 'none' para ocultar o conteúdo
          conteudo.style.display = 'none';
          // Também muda o texto do botão para 'Clique para Exibir Conteúdo X'
          botao.textContent = 'Clique para Exibir Conteúdo ' + targetId.replace('conteudo', '');
        }
      });
    });
  });