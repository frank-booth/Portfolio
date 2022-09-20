import { Icon } from 'semantic-ui-react'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p className="footer-name">&copy; Jeff Fraley</p>
      </div>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/jeff-fraley/" target="_blank">
          <Icon color="black" name="linkedin" size="large" />
        </a>

        <a href="https://github.com/frank-booth" target="_blank">
          <Icon color="black" name="github" size="large" />
        </a>

        <a href="mailto:jfraley519@gmail.com" target="_blank">
          <Icon color="black" name="mail" size="large" />
        </a>
      </div>
    </div>
  )
}

export default Footer
