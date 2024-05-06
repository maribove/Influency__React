import "./Auth.css";

// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { login, reset } from "../../slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    console.log(user);

    dispatch(login(user));
  };

  // Clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
   
      <div id='formulario1'>
        <div className="logo-container">
          <img src="/logo_influency_pq.png" alt="Logo Influency" className="logo" />
          <div className="line"></div>
        </div>
        <div  className="form-container">
          <h1>Entrar</h1>
          <p>Faça o login e construa conexões poderosas! </p>
          <form onSubmit={handleSubmit} >
            <label>
              <span>Email:</span>
              <input type="email" required placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email || ''} />
            </label>
            <label>
              <span>Senha:</span>
              <input type="password" required placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password || ''} />
            </label>
            <div className="btn-container">
              {!loading && <button className='btn'>Entar</button>}
              {loading && <button className='btn'>Aguarde...</button>}
            </div>
            {error && <Message msg={error} type="error" />}
            <a className='esquecisenha' href='/esquecisenha'>Esqueci a senha</a>
            <p className='entre'>Não tem cadastro? <Link to='/register'>Cadastrar</Link> </p>
       


        </form>
        </div>
      </div>


  )
}
export default Login