import React,  {useState} from "react";
import { LoginContainer, Overlay, CadastroContainer, RecuperarSenha} from "./style";


function Login( {fecharLogin}){
    const [ tela, setTela] = useState('login')

    const salvarCadastro = (e) =>{
        e.preventDefault();
        const form = e.target;
        const nome = form.name.value;
        const senha = form.senha.value;
        const email = form.email.value;


        const usuario ={nome, email, senha}


        localStorage.setItem(email, JSON.stringify(usuario))
        alert("Cadastro realizado com sucesso!")
        setTela("login")
    }

    const salvarLogin = (e) =>{
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const senha = form.senha.value;

        const usuarioSalvo = localStorage.getItem(email)

        if(!usuarioSalvo){
            alert("Usuario nao cadastrado");
            return
        }

        const usuario = JSON.parse(usuarioSalvo)

        if(usuario.senha !== senha){
            alert("Senha incorreta")
            return
        }

        localStorage.setItem("usuarioLogado", JSON.stringify({nome: usuario.nome, email: usuario.email}))
        alert(`Bem-vindo, ${usuario.nome}`)
        window.dispatchEvent(new Event("usuarioLogado")); // dispara evento
        fecharLogin()
    }


    return(

            <Overlay onClick={fecharLogin}>
                {tela === 'login' &&(
                
                    <LoginContainer onClick={(e) => e.stopPropagation()}>
                    <form onSubmit={salvarLogin}>
                        <h2>Login</h2>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input name="email" type="email" placeholder="Digite seu Email" required />
                        </div>
                        
                        <div>
                            <label htmlFor="senha">Senha</label>
                            <input name="senha" type="password" placeholder="Digite sua Senha" required />
                        </div>
                        <div>
                            <button type="submit">Entrar</button>
                        </div>
                        <div className="href">
                            <a href="#" onClick={(e) =>{e.preventDefault(); setTela("cadastro")}}>Cadastrar-se</a>
                            <a href="#" onClick={(e) =>{e.preventDefault(); setTela("recuperar")}}>Esqueceu a senha?</a>
                        </div>
                    </form>
                </LoginContainer>
            )}

            {tela === "cadastro" && (
                <CadastroContainer onClick={(e) => e.stopPropagation()} >
                    <form onSubmit={salvarCadastro}>
                        <h2>Cadastro</h2>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <input name="name" type="text" placeholder="Digite seu Nome" required />
                        </div>
                        
                        <div>
                            <label htmlFor="senha">Senha</label>
                            <input name="senha" type="password" placeholder="Digite sua Senha" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input name="email" type="email" placeholder="Digite seu Email" required />
                        </div>
                        <div>
                            <button type="submit">Cadastrar</button>
                        </div>
                        <div className="href">
                            <a href="#" onClick={(e) => {e.preventDefault(); setTela("login")}}>Já tem Conta?</a>
                        </div>
                    </form>

                </CadastroContainer>
                )}
                {tela === "recuperar" && (
                    <RecuperarSenha  onClick={(e) => e.stopPropagation()}>

                        <h2>Recuperar Senha</h2>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input name="email" type="e-mail" placeholder="Digite seu Email" required />
                        </div>
                        <button onClick={(e) => {e.preventDefault(); setTela('login')}}> Enviar</button>

                    </RecuperarSenha>
                )}
            </Overlay>
    )
}

export default Login

