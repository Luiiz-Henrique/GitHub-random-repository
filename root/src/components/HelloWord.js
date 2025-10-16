import style from './HelloWord.module.css';
import { useState } from 'react';



function HelloWord({name, event}) { // passado como parâmetro "props", todos os valores tenho que passar como
                            // objeto, por exemplo: function exemplo (props) { props.variavel1, props.variavel2, ..., props.variaveln}. 
                            // Com o uso das {} no parametro posso evitar o uso de props e deixa-lo de usar como objeto, como por exemplo:
                            // function exemplo ({vairavel1, variavel2, ..., variaveln}) { variavel1, variavel2, ..., variaveln}

    const [email, setEmail] = useState('teste@');
    const [userEmail, setUserEmail] = useState();

    function login(e){
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail(){
        setUserEmail('');
    }

    return (
        <div className={style.Testtitle}>
            <h1> Hello, {name}! </h1>
            <button onClick={event} > clique </button>



            <form onSubmit={login}>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Digite seu email..."
                        onChange={(e)=> setEmail(e.target.value)}>
                    </input>

                    <label htmlFor='password'>Senha: </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite sua senha...">
                    </input>
                </div>

                <div>
                    <input type="submit"></input>
                </div>
            </form>

            {userEmail && (
                <div>
                    <p> Seu email: {userEmail}</p>
                    <button onClick={limparEmail}> Limpar Email </button>
                </div>
            )}

        </div>
    );
 
}

export default HelloWord;