import { Link } from "react-router-dom"

export default function UserInfo({ loggedIn, email, onSignOut }) {
  return (
    <div className='header__info'>
      <p className='header__link'>{email}</p>
      <Link
        to='sign-up'
        className={`header__link ${loggedIn && 'header__link_state_active'}`}
        onClick={onSignOut}
      >
        Выйти
      </Link>
    </div>
  )
}