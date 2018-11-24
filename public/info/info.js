function readCookie(name) {
    var nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
// var userlogin = readCookie('username' );
var userlogin = readCookie('username');
var usersenha = readCookie('senha');
var senhacookie = readCookie('senha_' + userlogin);


if (userlogin == '') {
    
    document.getElementById("aviso").classList.remove('d-none');
    document.getElementById("form").classList.add('d-none');
    document.getElementById("perfil").classList.add('d-none');
    document.getElementById("detalhes").classList.add('d-none');
} else {
    if(userlogin == null){
document.getElementById("aviso").classList.remove('d-none');
document.getElementById("form").classList.add('d-none');
document.getElementById("perfil").classList.add('d-none');
document.getElementById("detalhes").classList.add('d-none');
document.getElementById("sair").classList.add('d-none');

    }
    if (usersenha == senhacookie) {
        var cep = readCookie('cep_' + userlogin);
        var cidade = readCookie('cidade_' + userlogin);
        var cpf = readCookie('cpf_' + userlogin);
        var ddd = readCookie('ddd_' + userlogin);
        var dn = readCookie('dn_' + userlogin);
        var email = readCookie('email_' + userlogin);
        var escolaridade = readCookie('escolaridade_' + userlogin);
        var nome = readCookie('firstName_' + userlogin);
        var sobrenome = readCookie('lastName_' + userlogin);

        var pais = readCookie('pais_' + userlogin);
        var prof = readCookie('prof_' + userlogin);
        var genero = readCookie('sexo_' + userlogin);
        var telefone = readCookie('telefone_' + userlogin);
        var uf = readCookie('uf_' + userlogin);
        var username = readCookie('username_' + userlogin);


        document.getElementById('cep').innerHTML = cep;
        document.getElementById('cidade').innerHTML = cidade;
        document.getElementById('cpf').innerHTML = cpf;
        document.getElementById('dn').innerHTML = dn;
        document.getElementById('email').innerHTML = email;
        document.getElementById('escolaridade').innerHTML = escolaridade;
        document.getElementById('nome').innerHTML = nome;

        document.getElementById('nomecompleto').innerHTML = nome + ' ' + sobrenome;

        document.getElementById('pais').innerHTML = pais;
        document.getElementById('prof').innerHTML = prof;
        document.getElementById('genero').innerHTML = genero;
        document.getElementById('telefone').innerHTML = '(' + ddd + ')' + telefone;
        document.getElementById('uf').innerHTML = uf;
        document.getElementById('user').innerHTML = username;
    } else {
        alert('senha incorreta redirecionando para o login');
        window.location = '../login/';
    }
}
function sair() {

    window.location = '../login/';
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'senha=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}


