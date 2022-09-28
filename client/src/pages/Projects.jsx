import { Container, Image } from 'semantic-ui-react'
import Whack from '../assets/whack_a_mole2.png'
import Bond from '../assets/bond.png'
import Cycle from '../assets/cyclist.png'
import Stox from '../assets/stox_tckr.png'

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
      <div className="project2-container">
        <p className="cyclelist-text">
          <Image src={Stox} size="medium" floated="left" />
          <span className="project-title">Stox TCKR</span>
          Web application designed for users to track a stock portfolio and
          search related articles. Built with PostgreSQL, Express/NodeJS,
          ReactJS.
          <br />
          <a
            href="https://github.com/frank-booth/Stox_TCKR_Frontend"
            target="blank"
          >
            <span>GitHub</span>
          </a>
          <a href="https://fraley-project1.surge.sh" target="blank">
            <span> / Demo</span>
          </a>
        </p>
      </div>
      <div className="project2-container">
        <p className="cyclelist-text">
          <Image src={Cycle} size="medium" floated="left" />
          <span className="project-title">CycleList</span>
          Web application designed for cycle instructors to store and share
          songs with a routine they created. As a group, we collaborated on both
          the front-end and back-end REST API. Built with PostgreSQL,
          Express/NodeJS, ReactJS.
          <br />
          <a
            href="https://github.com/frank-booth/CycleList_Frontend"
            target="blank"
          >
            <span>GitHub</span>
          </a>
          <a href="https://cyclelist.netlify.app" target="blank">
            <span> / Demo</span>
          </a>
        </p>
      </div>
      <div className="project3-container">
        <p className="bond-text">
          <Image src={Bond} size="medium" floated="left" />
          <span className="project-title">Bond, James Bond</span>
          I designed and developed a James Bond site to show all things Bond.
          Built with ExpressJS, NodeJS, MongoDB and Mongoose Database.
          <br />
          <a
            href="https://github.com/frank-booth/Bond-James-Bond"
            target="blank"
          >
            <span>GitHub</span>
          </a>
          <a href="https://fraley-project1.surge.sh" target="blank">
            <span> / Demo</span>
          </a>
        </p>
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
          Built with vanilla JavaScript, HTML, CSS grid system - designed and
          developed a classic game for the web browser.
          <a href="https://github.com/frank-booth/Whack-A-Mole" target="blank">
            <br />
            <span>GitHub</span>
          </a>
          <a href="https://fraley-project1.surge.sh" target="blank">
            <span> / Demo</span>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Projects
