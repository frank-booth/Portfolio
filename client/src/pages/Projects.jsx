import { Container, Image, Segment } from 'semantic-ui-react'
import Whack from '../assets/whack_a_mole.png'

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
      <div className="whack-a-mole-container">
        <p className="whack-a-mole-text">
          <Image src={Whack} size="small" floated="left" />
          Whack-A-Mole: Built with vanilla JavaScript, HTML, CSS grid system -
          designed and developed a classic game for the web browser.
          <br />
          <br />
          <a href="https://github.com/frank-booth/Whack-A-Mole" target="_blank">
            <span>GitHub</span>
          </a>
          <a href="https://fraley-project1.surge.sh" target="_blank">
            <span> / Demo</span>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Projects
