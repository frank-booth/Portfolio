import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav-bar">
      <NavLink className="links" to="/">
        JEFF FRALEY
      </NavLink>
      <div className="nav-links">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/projects">
          Projects
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
