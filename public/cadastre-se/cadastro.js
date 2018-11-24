
function cadastrar() {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let cpf = document.getElementById('cpf').value;
  let dn = document.getElementById('dn').value;
  let sexo = document.getElementById('sexo').value;
  let prof = document.getElementById('prof').value;
  let escolaridade = document.getElementById('escolaridade').value;
  let pais = document.getElementById('pais').value;
  let uf = document.getElementById('uf').value;
  let cidade = document.getElementById('cidade').value;
  let cep = document.getElementById('cep').value;
  let ddd = document.getElementById('ddd').value;
  let telefone = document.getElementById('telefone').value;
  let email = document.getElementById('email').value;
  let username = document.getElementById('username').value;
  let senha = document.getElementById('senha').value;
  document.cookie = 'firstName_' + username + '=' + firstName + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'lastName_' + username + '=' + lastName + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'cpf_' + username + '=' + cpf + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'dn_' + username + '=' + dn + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'sexo_' + username + '=' + sexo + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'prof_' + username + '=' + prof + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'escolaridade_' + username + '=' + escolaridade + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'pais_' + username + '=' + pais + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'uf_' + username + '=' + uf + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'cidade_' + username + '=' + cidade + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'cep_' + username + '=' + cep + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'ddd_' + username + '=' + ddd + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'telefone_' + username + '=' + telefone + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'email_' + username + '=' + email + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'username_' + username + '=' + username + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'senha_' + username + '=' + senha + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  window.location = '../login';
}
