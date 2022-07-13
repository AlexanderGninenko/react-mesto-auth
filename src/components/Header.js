import logo from '../images/Mesto.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место"></img>
    </header>
  );
}

export default Header;