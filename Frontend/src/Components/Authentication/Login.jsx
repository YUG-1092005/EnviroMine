import "./Login.css";

const Login = () => {
  return (
    <div className="Login-container">
      <div className="header">
        <div className="auth-text">Login</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="" alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        forgot password? <span>Click here</span>
      </div>

      <div className="submit-container">
        <div
          className="submit"
          onClick={() => {
            setCurrent("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
