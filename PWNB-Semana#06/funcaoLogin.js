function iniciarLogin(){
    
    let usuario = widow.prompt('Insira nome de Usuario... ')
    let senha = widow.prompt('Agora insira sua Senha...')

    if(usuario == admin && senha == 1234){
        window.alert(`Olá, ${usuario}! Bem Vindo de volta!`)
    }else{
        window.alert(`Usuario não cadastrado. Prossiga para tela de Cadastros!`)
    }
}