// Validação do formulário
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contatoForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

        //validação: todos os campos precisam estar preenchidos 
      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      //validação para que o formato do email seja escrito de forma correta
      const emailValido = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailValido.test(email)) {
        alert("Por favor, insira um e-mail válido!");
        return;
      }

      //simula o envio 
      alert("Mensagem enviada com sucesso!");
      form.reset();
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const btnTema = document.getElementById("btnTema");

  // Verifica se há preferência salva no navegador
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo) {
    document.body.classList.add(temaSalvo);
    atualizarTextoBotao(temaSalvo);
  } else {
    document.body.classList.add("light"); // padrão: claro
  }

  // Quando o botão for clicado, alterna o tema
  if (btnTema) {
    btnTema.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      document.body.classList.toggle("light");

      // Salva o tema no navegador
      const temaAtual = document.body.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("tema", temaAtual);

      // Atualiza o texto do botão
      atualizarTextoBotao(temaAtual);
    });
  }

  // Atualiza o texto e ícone conforme o tema
  function atualizarTextoBotao(tema) {
    if (btnTema) {
      btnTema.textContent = tema === "dark" ? "🌙 Modo Escuro" : "🌞 Modo Claro";
    }
  }
});