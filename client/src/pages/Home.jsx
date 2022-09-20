import { NavLink } from 'react-router-dom'
import { Container, Image, Icon } from 'semantic-ui-react'
import Picture from '../assets/profile_pic.png'

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <Container textAlign="center">
          <NavLink className="img-link" to="/">
            <Image
              className="profile-pic"
              src={Picture}
              size="small"
              centered
              circular
            />
          </NavLink>
          <h1 className="headings">Jeff Fraley</h1>
          <h3 className="headings-title">Full Stack Software Engineer</h3>
        </Container>
      </div>
      <div className="bottom-container">
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Jeff Fraley is a multi-faceted software engineer with a unique
            combination of philanthropic, business and banking experience. A
            life-long learner who loves creating through software development.
            As a resourceful problem solver and consensus builder, he possess an
            innate ability to build and invest in high-performance teams and
            donor/client relationships.
          </p>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <a href="https://www.linkedin.com/in/jeff-fraley/" target="_blank">
            <Icon color="black" name="linkedin" size="big" />
            <span className="icons">LinkedIn</span>
          </a>
          <br />
          <a href="https://github.com/frank-booth" target="_blank">
            <Icon color="black" name="github" size="big" />
            <span className="icons">GitHub</span>
          </a>
          <br />
          <a href="mailto:jfraley519@gmail.com" target="_blank">
            <Icon color="black" name="mail" size="big" />
            <span className="icons">Email</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
