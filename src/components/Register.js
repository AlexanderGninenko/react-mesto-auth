import { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({onRegister, isLoading}) => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values.password, values.email);
}

  return (
  <form className="auth" onSubmit={handleSubmit}>
    <h1 className="auth__title">Регистрация</h1>
    <input name='email' value={values.email || ''} onChange={handleChange} className="auth__input" placeholder="Email"/>
    <input name='password' value={values.password || ''} onChange={handleChange} className="auth__input" placeholder="Пароль"/>
    <button className="auth__button">{isLoading ? 'Регистрируемся...' : 'Зарегистрироваться'}</button>
    <span className="auth__sign-in">Уже зарегистрированы? <Link className="auth__sign-in" to='/sign-in'>Войти</Link></span>
  </form>
  )
};

export default Register;
