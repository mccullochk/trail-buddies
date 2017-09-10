import React, { Component } from 'react';

import Button from 'react-toolbox/lib/button/Button'
import Card from 'react-toolbox/lib/card/Card'
import CardMedia from 'react-toolbox/lib/card/CardMedia'
import CardText from 'react-toolbox/lib/card/CardText'
import CardTitle from 'react-toolbox/lib/card/CardTitle'
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon'
import { Link } from 'react-router-dom'

import '../css/Buddy.css'

import NicImage from "../imgs/Rise-41.jpg"
const image = {
    src: NicImage,
    alt: 'my image',
}

class Buddies extends Component {
  render() {
    return (
      <div className="buddy">
        <div className="contact">
          <Card className="contact__img">
            <CardMedia 
              aspectRatio="square"
              image={image.src}
            />
          </Card>
          <Card className="contact__info">
            <div className="contact__info--body">
              <h2>Nick Riopel</h2>
              <div className="reviews">
                <FontIcon>star</FontIcon>
                <FontIcon>star</FontIcon>
                <FontIcon>star</FontIcon>
                <FontIcon>star</FontIcon>
                <p>3 Reviews</p>
              </div>
              <Button label="Book" raised primary className="book2"/>
            </div>
          </Card>
        </div>
        <Card className="person">
          <CardText>
            <b>Who I am: </b>I am a 24 years old students completing his degree in Adventure Tourism here at TRU. I have been guiding as a sea kayak guide over the last 5 summers. Interpretation and good laugh are my specialties. I will show you around the Kamloops area while you keep stress off your mind.
          </CardText>
        </Card> 
        <Card className="description">
          <Link to='/trail/1'>
            <h2>Kenna Cartwright</h2>
          </Link>
          <Link to='/buddy/1'>
            <CardText>
              <b>What I offer: </b>This is the best 1h30 hike you can do here in Kamloops. When reaching the top of the hike you will have a breathtaking view of Kamloops! For only $10 I will create an awesome experience for you. Join me!
            </CardText>
          </Link>
        </Card>
        <Card className="description">
          <h2>Cinnamon Ridge</h2>
          <CardText>
            <b>What I offer: </b>Head out towards the Kamloops airport along Tranquille Rd. Continue past the airport and golf course. When the road forks, head right over the train tracks. Follow that road until you reach the hairpin turn. Instead of following the road, head over the outer side of the corner on your left.
          </CardText>
        </Card>
        <Card className="description">
          <h2>Lonepine valley</h2>
          <CardText>
            <b>What I offer: </b>Head out towards the Kamloops airport along Tranquille Rd. Continue past the airport and golf course. When the road forks, head right over the train tracks. Follow that road until you reach the hairpin turn. Instead of following the road, head over the outer side of the corner on your left.
          </CardText>
        </Card>
      </div>
    )
  }
}

export default Buddies
