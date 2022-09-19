import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import Picture from '../assets/jeff.jpeg'

const Home = () => {
  return (
    <div className="home-container">
      <Container textAlign="center">
        <Image
          className="profile-pic"
          src={Picture}
          size="small"
          centered
          circular
        />
        <h1 className="font-link">Jeff Fraley</h1>
        <h3 className="font-link">Software Engineer</h3>
      </Container>
    </div>
  )
}

export default Home
