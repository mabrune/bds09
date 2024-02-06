import './styles.css';

const Login = () => {
  return (
    <div className="base-card login-container">
      <h1>LOGIN</h1>
      <div className="login-context">
        <form action="">
          <div className="box">
            <input type="text" placeholder="Email" name="username" />
          </div>
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
