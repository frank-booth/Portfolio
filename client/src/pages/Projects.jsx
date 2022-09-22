import { Container, Image, Segment } from 'semantic-ui-react'
import Whack from '../assets/whack_a_mole.png'
import Bond from '../assets/bond.png'

const Projects = () => {
  return (
    <div>
      <div className="home-page">
        <div className="home-container">
          <Container textAlign="left">
            <h1 className="headings">Projects</h1>
            <p className="project-help">
              Need help with DevOps?
              <a className="project-email" href="mailto:jfraley519@gmail.com">
                <span> Reach out to me.</span>
              </a>
            </p>
          </Container>
        </div>
      </div>
      <div className="project3-container">
        <p className="whack-a-mole-text">
          <Image src={Bond} size="medium" floated="left" />
          <span className="project-title">Bond, James Bond</span>
          <br />
          <br />
          I designed and developed a James Bond site to show all things Bond.
          Built with ExpressJS, NodeJS, MongoDB and Mongoose Database.
          <br />
          <a
            href="https://github.com/frank-booth/Bond-James-Bond"
            target="_blank"
          >
            <span>GitHub</span>
          </a>
          <a href="https://fraley-project1.surge.sh" target="_blank">
            <span> / Demo</span>
          </a>
        </p>
        <br />
      </div>
      <div className="project4-container">
        <p className="whack-a-mole-text">
          <Image
            src={Whack}
            size="medium"
            floated="left"
            className="whack-image"
          />
          <span className="project-title">Whack-A-Mole</span>
          <br />
          <br />
          Built with vanilla JavaScript, HTML, CSS grid system - designed and
          developed a classic game for the web browser.
          <br />
          <a href="https://github.com/frank-booth/Whack-A-Mole" target="_blank">
            <span>GitHub</span>
          </a>
          <a href="https://fraley-project1.surge.sh" target="_blank">
            <span> / Demo</span>
          </a>
        </p>
        <br />
      </div>
    </div>
  )
}

export default Projects
