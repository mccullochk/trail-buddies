import React, { Component } from 'react';

import Button from 'react-toolbox/lib/button/Button'
import Card from 'react-toolbox/lib/card/Card'
import CardMedia from 'react-toolbox/lib/card/CardMedia'
import CardText from 'react-toolbox/lib/card/CardText'
import CardTitle from 'react-toolbox/lib/card/CardTitle'
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon'
import { Link } from 'react-router-dom'

import '../css/Buddy.css'

class Buddies extends Component {
  render() {
    return (
      <div className="buddy">
        <div className="contact">
          <Card className="contact__img">
            <CardMedia 
              aspectRatio="square"
              image="http://www.mysteryranch.com/Landing%20Pages/ambassadors/headshot-inge-perkins.jpg"
            />
          </Card>
          <Card className="contact__info">
            <div className="contact__info--body">
              <h2>Tracy Willow</h2>
              <div className="reviews">
                <FontIcon>star</FontIcon>
                <FontIcon>star</FontIcon>
                <FontIcon>star</FontIcon>
                <FontIcon>star</FontIcon>
                <p>3 Reviews</p>
              </div>
              <p><b>$25.00</b> per person</p>
              <Button label="Book" raised primary className="book"/>
            </div>
          </Card>
        </div>
        <Card className="person">
          <CardText>
            <b>Who I am: </b>I have lived in Kamloops my whole life and am therefore intimately familiar with all the best place in Kamloops and the surround area. My degree in history allows me to be able to share a vaste amount of information with all my hiking companions.
          </CardText>
        </Card>
        <Card className="description">
          <h2>Kenna Cartwright</h2>
          <CardText>
            <b>What I offer: </b>Head out towards the Kamloops airport along Tranquille Rd. Continue past the airport and golf course. When the road forks, head right over the train tracks. Follow that road until you reach the hairpin turn. Instead of following the road, head over the outer side of the corner on your left.
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
