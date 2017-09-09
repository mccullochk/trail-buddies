import React, { Component } from 'react';

import Button from 'react-toolbox/lib/button/Button'
import Card from 'react-toolbox/lib/card/Card'
import CardMedia from 'react-toolbox/lib/card/CardMedia'
import CardText from 'react-toolbox/lib/card/CardText'
import CardTitle from 'react-toolbox/lib/card/CardTitle'
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon'
import Chip from 'react-toolbox/lib/chip/Chip'

class Buddies extends Component {
  render() {
    return (
      <div className="buddy">
        <div className="contact">
          <Card className="contact__img">
            <CardMedia 
              aspectRatio="square"
              image="https://a0.muscache.com/im/pictures/1c0747c8-5c6f-48ef-ac71-1d2afdfc7446.jpg?aki_policy=xl_poster"
            />
          </Card>
          <Card className="contact__info">
            <div className="contact__info--body">
              <h2>John Doe</h2>
              <p><b>$25.00</b> per person</p>
              <Button label="Book" raised primary className="book"/>
            </div>
          </Card>
        </div>
        <Card className="description">
          <CardText>
            <b>What I offer: </b>Head out towards the Kamloops airport along Tranquille Rd. Continue past the airport and golf course. When the road forks, head right over the train tracks. Follow that road until you reach the hairpin turn. Instead of following the road, head over the outer side of the corner on your left.
          </CardText>
        </Card> 
        <div className="reviews">
          <Card className="review__cards">
            <CardTitle subtitle='"Awesome Experience"'/>
          </Card>
          <Card className="review__cards">
            <CardTitle subtitle='"Beautiful Hike"'/>
          </Card>
          <Card className="review__cards">
            <CardTitle subtitle='"So so.."'/>
          </Card>
        </div>
        <style>{`
          .contact {
            display: flex;
            margin: 0 auto;
            margin-bottom: 20px;
          }
          .contact .contact__img {
            height: 150px;
            width: calc((100%-20px)*0.5);
          }
          .contact .contact__info {
            height: 150px;
            width: calc((100%-20px)*0.5);
          }
          .contact__info--body {
            margin-left: 10px;
          }
          .contact__info--body .book {
            margin-left: 20px;
          }
          .description {
            margin-bottom: 20px;
          }
          .reviews {
            display: flex;
            flex-wrap: wrap;
          }
          .review__cards {
            width: 154px;
            height: 100px;
            margin-right: 5px;
            margin-bottom: 10px;
          }
          .reviews .review__cards p {
            font-size: 12px;
          }
          h2 {
            margin: 10px 0 10px 0;
          }
          p {
            margin: 0;
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    )
  }
}

export default Buddies
