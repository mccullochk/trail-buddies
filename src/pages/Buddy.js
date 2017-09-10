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
              image="https://i.pinimg.com/736x/68/be/1a/68be1a805e9206e375554f1f01e3b305--mens-headshots-model-headshots.jpg"
            />
          </Card>
          <Card className="contact__info">
            <div className="contact__info--body">
              <h2>Jack Savage</h2>
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
        <Card className="description">
          <CardText>
            <b>Who I am: </b>Head out towards the Kamloops airport along Tranquille Rd. Continue past the airport and golf course. When the road forks, head right over the train tracks. Follow that road until you reach the hairpin turn. Instead of following the road, head over the outer side of the corner on your left.
          </CardText>
        </Card>
        <Card className="description">
          <CardText>
            <b>What I offer: </b>Head out towards the Kamloops airport along Tranquille Rd. Continue past the airport and golf course. When the road forks, head right over the train tracks. Follow that road until you reach the hairpin turn. Instead of following the road, head over the outer side of the corner on your left.
          </CardText>
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
