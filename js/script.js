document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.querySelector(".formulario-cadastro");
  var mensagem = document.getElementById("mensagem-formulario");

  if (!formulario || !mensagem) {
    return;
  }

  var campos = {
    nome: document.getElementById("nome"),
    sobrenome: document.getElementById("sobrenome"),
    dataNascimento: document.getElementById("data-nascimento"),
    email: document.getElementById("email"),
    telefone: document.getElementById("telefone"),
    senha: document.getElementById("senha"),
    confirmarSenha: document.getElementById("confirmar-senha")
  };

  var nomesCampos = {
    nome: "Nome",
    sobrenome: "Sobrenome",
    dataNascimento: "Data de nascimento",
    email: "Email",
    telefone: "Numero/telefone",
    senha: "Senha",
    confirmarSenha: "Confirmar senha"
  };

  var manterMensagemSucesso = false;

  function limparErrosCampos() {
    Object.keys(campos).forEach(function (chave) {
      campos[chave].classList.remove("erro");
    });
  }

  function limparEstado() {
    limparErrosCampos();
    mensagem.textContent = "";
    mensagem.className = "mensagem-formulario";
  }

  function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = "mensagem-formulario ativa " + tipo;
  }

  function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    limparEstado();

    var erros = [];
    var primeiroCampoComErro = null;

    Object.keys(campos).forEach(function (chave) {
      var campo = campos[chave];

      if (!campo.value.trim()) {
        erros.push("Preencha o campo " + nomesCampos[chave] + ".");
        campo.classList.add("erro");

        if (!primeiroCampoComErro) {
          primeiroCampoComErro = campo;
        }
      }
    });

    if (campos.email.value.trim() && !emailValido(campos.email.value.trim())) {
      erros.push("Digite um email valido.");
      campos.email.classList.add("erro");
      primeiroCampoComErro = primeiroCampoComErro || campos.email;
    }

    if (
      campos.senha.value &&
      campos.confirmarSenha.value &&
      campos.senha.value !== campos.confirmarSenha.value
    ) {
      erros.push("As senhas precisam ser iguais.");
      campos.senha.classList.add("erro");
      campos.confirmarSenha.classList.add("erro");
      primeiroCampoComErro = primeiroCampoComErro || campos.senha;
    }

    if (erros.length > 0) {
      mostrarMensagem(erros[0], "erro");
      primeiroCampoComErro.focus();
      return;
    }

    mostrarMensagem("Cadastro enviado com sucesso!", "sucesso");
    manterMensagemSucesso = true;
    formulario.reset();
  });

  formulario.addEventListener("reset", function () {
    setTimeout(function () {
      if (manterMensagemSucesso) {
        manterMensagemSucesso = false;
        limparErrosCampos();
        return;
      }

      limparEstado();
    }, 0);
  });
});
