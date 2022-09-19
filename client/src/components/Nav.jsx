import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav-bar">
      <NavLink className="links-name" to="/">
        Jeff Fraley
      </NavLink>
      <div className="nav-links">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/projects">
          Projects
        </NavLink>
        <NavLink className="links" to="/projects">
          Contact
        </NavLink>
      </div>
    </div>
  )
}

export default Nav