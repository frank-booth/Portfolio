import { Container } from 'semantic-ui-react'

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
    </div>
  )
}

export default Projects
