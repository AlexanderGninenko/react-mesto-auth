const Login = () => {
  return (
  <div className="auth">
    <h1 className="auth__title">Вход</h1>
    <input className="auth__input" placeholder="Email"/>
    <input className="auth__input" placeholder="Пароль"/>
    <button className="auth__button">Войти</button>
  </div>
  )
};

export default Login;
