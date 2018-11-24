function logar() {
  let username = document.getElementById('username').value;
  let senha = document.getElementById('senha').value;
  document.cookie = 'username =' + username + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  document.cookie = 'senha =' + senha + ';path=/ ;expires=Thu, 18 Dec 2020 12:00:00 UTC';
  window.location = '../info';

}
