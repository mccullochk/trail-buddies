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
              <Button label="Book" raised primary className="book2"/>
            </div>
          </Card>
        </div>
        <Card className="person">
          <CardText>
            <b>Who I am: </b>I have lived in Kamloops my whole life and am therefore intimately familiar with all the best place in Kamloops and the surround area. My degree in history allows me to be able to share a vaste amount of information with all my hiking companions.
          </CardText>
        </Card> 
        <Card className="description">
          <Link to='/trail/1'>
            <h2>Kenna Cartwright</h2>
          </Link>
          <Link to='/buddy/1'>
            <CardText>
              <b>What I offer: </b>Head out towards the Kamloops airport along Tranquille Rd. Continue past the airport and golf course. When the road forks, head right over the train tracks. Follow that road until you reach the hairpin turn. Instead of following the road, head over the outer side of the corner on your left.
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
