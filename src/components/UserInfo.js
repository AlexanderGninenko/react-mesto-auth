import { Link } from "react-router-dom"

export default function UserInfo({ loggedIn, email, onSignOut }) {
  return (
    <div className='header__info'>
      <p className='header__link'>{email}</p>
      <Link
        to='sign-in'
        className='header__link'
        onClick={onSignOut}
      >
        Выйти
      </Link>
    </div>
  )
}