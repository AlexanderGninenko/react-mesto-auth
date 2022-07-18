import { useState } from "react";

const Login = ({ onLogin, isLoading }) => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values.password, values.email);
  };

  return (
    <form onSubmit={handleSubmit} className="auth">
      <h1 className="auth__title">Вход</h1>
      <input
        name="email"
        onChange={handleChange}
        value={values.email || ""}
        className="auth__input"
        placeholder="Email"
      />
      <input
        name='password'
        value={values.password || ""}
        onChange={handleChange}
        className="auth__input"
        placeholder="Пароль"
      />
      <button className="auth__button">
        {isLoading ? "Входим..." : "Войти"}
      </button>
    </form>
  );
};

export default Login;
