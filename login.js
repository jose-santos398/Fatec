
// Função para criar uma conta
function criarConta() {
    var emailRecebido = document.getElementById("inputEmail").value;
    var senhaRecebida = document.getElementById("inputSenha").value;
    var confirmaSenha = document.getElementById("inputConfirmaSenha").value;

    // Verifica se as senhas coincidem
    if (senhaRecebida !== confirmaSenha) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return;
    }

    // Recupera as contas salvas no localStorage
    let contas = JSON.parse(localStorage.getItem('contas')) || [];

    // Verifica se o email já existe
    const emailExiste = contas.some(conta => conta.email === emailRecebido);
    if (emailExiste) {
        alert("Este email já está sendo utilizado. Por favor, escolha outro.");
        return;
    } else {
        // Adiciona nova conta
        contas.push({ email: emailRecebido, senha: senhaRecebida });
        localStorage.setItem('contas', JSON.stringify(contas));

        // Alerta e redirecionamento
        alert("Sua conta foi criada com sucesso!");
        window.location.replace("login.html"); // Redireciona para a página de login após o cadastro
    }
}

// Função para logar
function logar(emailRecebido, senhaRecebida) {
    let loginExitoso = false;
    let contas = JSON.parse(localStorage.getItem("contas")) || [];

    // Verifica se o email e a senha correspondem a uma conta registrada
    for (let i = 0; i < contas.length; i++) {
        if (contas[i].email === emailRecebido && contas[i].senha === senhaRecebida) {
            loginExitoso = true;

            // Armazena o usuário logado no localStorage
            localStorage.setItem('usuarioLogado', emailRecebido);

            break;
        }
    }

    // Se o login for bem-sucedido
    if (loginExitoso) {
        alert("Você logou com sucesso!");
        window.location.replace("index.html"); // Redireciona para a página inicial após o login
    } else {
        alert("E-mail ou Senha incorretos. Tente novamente.");
        location.reload(); // Recarrega a página em caso de erro
    }
}

// Função para exibir a saudação após o login
function exibirSaudacao() {
    const userWelcome = document.getElementById('userWelcome');
    const email = localStorage.getItem('usuarioLogado'); // Recupera o email do usuário logado

    if (email) {
        userWelcome.innerHTML = `Bem-vindo(a), ${THERIAN}!`;
    } else {
        userWelcome.innerHTML = ''; // Caso não haja usuário logado, não exibe saudação
    }
}

// Chama a função exibirSaudacao ao carregar a página
window.onload = function () {
    exibirSaudacao();
}


// Verifica o formulário de login
document.querySelector("form").onsubmit = function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const emailRecebido = document.getElementById("inputEmail").value;
    const senhaRecebida = document.getElementById("inputSenha").value;

    // Chama a função de login
    logar(emailRecebido, senhaRecebida);
}


// Função para criar uma conta
function criarConta() {
    var emailRecebido = document.getElementById("inputEmail").value;
    var senhaRecebida = document.getElementById("inputSenha").value;
    var confirmaSenha = document.getElementById("inputConfirmaSenha").value;

    // Verifica se as senhas coincidem
    if (senhaRecebida !== confirmaSenha) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return;
    }

    // Recupera as contas salvas no localStorage
    let contas = JSON.parse(localStorage.getItem('contas')) || [];

    // Verifica se o email já existe
    const emailExiste = contas.some(conta => conta.email === emailRecebido);
    if (emailExiste) {
        alert("Este email já está sendo utilizado. Por favor, escolha outro.");
        return;
    } else {
        // Adiciona nova conta
        contas.push({ email: emailRecebido, senha: senhaRecebida });
        localStorage.setItem('contas', JSON.stringify(contas));

        // Alerta e redirecionamento
        alert("Sua conta foi criada com sucesso!");
        window.location.replace("login.html"); // Redireciona para a página de login após o cadastro
    }
}
// Verifica o login do usuário ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    const userLoggedIn = localStorage.getItem('userLoggedIn');
    
    if (userLoggedIn) {
        // Se o usuário estiver logado, exibe a opção de logout e oculta a opção de login
        document.getElementById('loginItem').style.display = 'none';
        document.getElementById('logoutItem').style.display = 'block';
        document.getElementById('userWelcome').textContent = `Bem-vindo, ${userLoggedIn}`;
    } else {
        // Se não estiver logado, garante que o login está visível
        document.getElementById('loginItem').style.display = 'block';
        document.getElementById('logoutItem').style.display = 'none';
        document.getElementById('userWelcome').textContent = '';
    }
});

// Função para deslogar o usuário
function logout() {
    // Remove o item 'userLoggedIn' do localStorage
    localStorage.removeItem('userLoggedIn');
    
    // Atualiza a interface
    document.getElementById('loginItem').style.display = 'block';
    document.getElementById('logoutItem').style.display = 'none';
    document.getElementById('userWelcome').textContent = '';

    // Redireciona para a página inicial ou login
    window.location.href = 'login.html'; // ou pode ser outra página desejada
}

// Supondo que no processo de login, o nome do usuário seja armazenado
function login(userName) {
    // Armazena o nome do usuário no localStorage
    localStorage.setItem('userLoggedIn', userName);
    
    // Redireciona para a página principal após o login
    window.location.href = 'index.html';  // ou outra página que você desejar
}

    window.onload = function() {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            const userName = userEmail.split('@')[0];  // Pega a parte antes do '@'
            document.getElementById('userWelcome').textContent = `Olá, ${userName}!`;
            document.getElementById('loginItem').style.display = 'none';
            document.getElementById('logoutItem').style.display = 'block';
        }
    };

    // Função de logout
    function logout() {
        localStorage.removeItem('userEmail');  // Remove o e-mail do usuário da sessão
        window.location.reload();  // Recarrega a página para atualizar o estado
    }

