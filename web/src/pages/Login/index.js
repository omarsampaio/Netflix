import React, {useState} from 'react';
import Header from '../../componentes/Header';
import api from '../../services/api';

const Login = () => {
    
    const [credencias, setCredenciais] = useState({
        email: '',
        senha: ''
    });

    const login = async () => {

        try {

            const response = await api.post('/usuario/login', credencias);
            const res = response.data;

            if (res.error) {
                alert(res.mensage);
                return false;
            } 

            localStorage.setItem('@user', JSON.stringify(res.usuario));
            window.location.reload();
         }  catch (err) {
            alert(err.mensage)

        }
    };
    
    return(
        
        <div
            class="container-fluid bg_filmes"
            style={{
                position: 'fixed',
                height: '100%'
            }}
        >

        <Header hideMenu /> 
        <div id="caixa_login" class="col-4 offset-4">
            <h1 class="text-white">Entrar</h1>
            <br />
            <>
                <input 
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email ou número de telefone"
                    onChange={(e) => {
                        setCredenciais({
                            ...credencias,
                            email: e.target.value
                        });
                    }}
                />
                <br /> 
                <input 
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Senha"
                    onChange={(e) => {
                        setCredenciais({
                            ...credencias,
                            senha: e.target.value
                        });
                    }}
                />
                <br />
                <button class="btn btn-lg btn-block" onClick={login } style={{ backgroundColor: '#E50914', color:'#fff' }}>Entrar</button>
                <div class="row mt-4">
                    <div class="col text-muted">
                        <input type="checkbox"/> Lembrar de mim
                    </div>
                    <div class="col text-right">
                        <a href="#" class="text-muted">Precisa de ajuda?</a>
                    </div>
                    
                </div>
                <div>
                    <p style={{ color: '#8B8B8B', marginTop: '10px'}}>Novo por aqui? <a href="#" style={{ color: "#ffff" }}>Assine Agora.</a></p>
                 </div>
                 <div>
                    <p style={{ color: '#8B8B8B', marginTop: '10px', fontSize: '13px' }}>Esta página é protegida pelo Google reCAPTCHA para garantir
                        que você não é um robô<a href="#" style={{ color: "#1C82AD" }}> Saiba mais</a></p>
                 </div>
            </>
        </div>
    </div>
    )
}

export default Login;