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
  // Super ghetto way to make a hike booking, but this is an MVP after all...
  setupButton() {
    window.open('mailto:nriopel13@gmail.com?subject=Kenna Cartwright Hike&body=Hi Nick! I would like to book the Kenna Cartwright hike.');
  }
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
              <p><b>$10.00</b> per person</p>
              <Button label="Book" raised primary className="book" onClick={this.setupButton} />
            </div>
          </Card>
        </div>
        <Card className="person">
          <CardText>
            <b>Who I am: </b>I am a 24 years old students completing his degree in Adventure Tourism here at TRU. I have been guiding as a sea kayak guide over the last 5 summers. Interpretation and good laugh are my specialties. I will show you around the Kamloops area while you keep stress off your mind.
          </CardText>
        </Card>
        <Card className="description">
          <h2>Kenna Cartwright</h2>
          <CardText>
            <b>What I offer: </b>This is the best 1h30 hike you can do here in Kamloops. When reaching the top of the hike you will have a breathtaking view of Kamloops! For only $10 I will create an awesome experience for you. Join me!
          </CardText>
        </Card>
        <Card className="more">
          <Link to='/buddy/expanded/1'>
            <Button>Other hikes</Button>
          </Link>
        </Card>
        <div className="reviews">
          <Card className="review__card">
            <CardTitle
              className="review__card--title"
              avatar="https://www.journeybeyondtravel.com/wp-content/uploads/2017/07/Lucas-Peters-Headshot-Banasa-SMALL-300x288.jpg"
              title="Billy"
            />
            <CardText>"Really knowledgable guide"</CardText>
            <div className="stars">
              <FontIcon>star</FontIcon>
              <FontIcon>star</FontIcon>
              <FontIcon>star</FontIcon>
              <FontIcon>star</FontIcon>
            </div>
          </Card>
          <Card className="review__card">
            <CardTitle
              className="review__card--title"
              avatar="https://andrewskurka.korndev-cdn.com/wp-content/uploads/about-skurka-headshot.jpg"
              title="Jordan"
            />
            <CardText>"Beautiful hike"</CardText>
            <div className="stars">
              <FontIcon>star</FontIcon>
              <FontIcon>star</FontIcon>
              <FontIcon>star</FontIcon>
              <FontIcon>star</FontIcon>
              <FontIcon>star</FontIcon>
            </div>
          </Card>
          <Card className="review__card">
            <CardTitle
              className="review__card--title"
              avatar="http://wpmedia.theprovince.com/2011/12/davis_headshot1.jpg?quality=60&strip=all"
              title="April"
            />
            <CardText>"So so.."</CardText>
            <div className="stars">
              <FontIcon>star</FontIcon>
              <FontIcon>star</FontIcon>
              <FontIcon>star</FontIcon>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default Buddies
