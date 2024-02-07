import './styles.css';

const Login = () => {
  return (
    <div className="base-card login-container">
      <h1>LOGIN</h1>
      <div className="login-context">
        <form action="">
          <input type="text" placeholder="Email" name="username" />
          <input type="text" placeholder="Senha" name="password" />
        </form>
        <button className="btn btn-primary btn-icon">
          <p>FAZER LOGIN</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
