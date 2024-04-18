import "./Auth.css";

// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { register, reset } from "../../slices/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(user);

    dispatch(register(user));
  };

  // Clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div id="cadastro">
      <div id='formulario'>
        <h1>Cadastre-se na Influency</h1>
        <h3>Dê o próximo passo para o sucesso!</h3>
        <p>Cadastre-se e explore um mundo de parcerias que podem impulsionar sua carreira!</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            {/* value -> controle de input
              onChange -> preencher valor dos states */}
            <input type="text"  required placeholder='Nome' onChange={(e)=> setName(e.target.value)} value={name|| ""}/>
          </label>
          <label>
            <span>Email:</span>
            <input type="email" required placeholder='Email' onChange={(e)=> setEmail(e.target.value)} value={email||"" }/>
          </label>
          <label>
            <span>Senha:</span>
            <input type="password" required placeholder='Senha'onChange={(e)=> setPassword(e.target.value)} value={password||""}/>
          </label>
          <label>
            <span>Confirmação de senha:</span>
            <input type="password" name="ConfirmSenha" required placeholder='Confirme a Senha' onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword||""}/>
          </label>
          {!loading && <button className='btn'>Cadastrar</button> }
          {loading && <button className='btn'>Aguarde...</button> }
          {error && <Message msg={error} type="error" />}
          </form>
          
          <p className='entre'>Já tem cadastro? <Link to='/login'>Entre</Link> </p>
        
      </div>
    </div>
  )
}
  
export default Register