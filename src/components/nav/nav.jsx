import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav">
      <li className="item">
        <NavLink to='/profile'>Профиль</NavLink>
      </li>
      <li className="item">
        <NavLink to='/friends'>Друзья</NavLink>
      </li>
    </ul>
  )
}

export default Nav;
