import React, { Component } from 'react';

import Button from 'react-toolbox/lib/button/Button'
import Card from 'react-toolbox/lib/card/Card'
import CardMedia from 'react-toolbox/lib/card/CardMedia'
import CardText from 'react-toolbox/lib/card/CardText'
import CardTitle from 'react-toolbox/lib/card/CardTitle'
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon'
import { Link } from 'react-router-dom'

import '../css/Buddy.css'

import buddies from '../data/buddies.js'
import hikes from '../data/hikes.js'

class Buddies extends Component {
  componentWillMount() {
    this.setState({
      id: this.props.match.params.id,
      hike: this.props.location.search.slice(-1) || '1'
    })
  }

  getObj(id, obj) {
    return obj.id.toString() === id 
  }

  // Super ghetto way to make a hike booking, but this is an MVP after all...
  setupButton(hike) {
    console.log(hike);
    window.open(`mailto:nriopel13@gmail.com?subject=${hike.name} Hike&body=Hi Nick! I would like to book the ${hike.name} hike.`);
  }

  render() {
    const buddy = buddies.find(this.getObj.bind(this, this.state.id))
    const hike = hikes.find(this.getObj.bind(this, this.state.hike))
    const buddyHike = buddy.hikes.find(this.getObj.bind(this, this.state.hike))
    return (
      <div className="buddy">
        <div className="contact">
          <Card className="contact__img">
            <CardMedia
              aspectRatio="square"
              image={buddy.img}
            />
          </Card>
          <Card className="contact__info">
            <div className="contact__info--body">
              <h2>{buddy.name}</h2>
              <div className="reviews">
                {buddy.rating.map(() => {
                  return <FontIcon>star</FontIcon>
                })}
                <p>{buddy.reviews.length} reviews</p>
              </div>
              <p><b>${buddyHike.price}</b> per person</p>
              <Button label="Book" raised primary className="book" onClick={this.setupButton.bind(this, hike)} />
            </div>
          </Card>
        </div>
        <Card className="person">
          <CardText>
            <b>Who I am: </b>{buddy.description}
          </CardText>
        </Card>
        <Card className="description">
          <h2>{hike.name}</h2>
          <CardText>
            <b>What I offer: </b>{buddyHike.offer}
          </CardText>
        </Card>
        <Card className="more">
          <Link to={`/buddy/expanded/${this.state.id}`}>
            <Button>Other hikes</Button>
          </Link>
        </Card>
        <div className="reviews">
          {buddy.reviews.map((review) => {
            return (
              <Card className="review__card">
                <CardTitle
                  className="review__card--title"
                  avatar={review.img}
                  title={review.name}
                />
                <CardText>{review.statement}</CardText>
                <div className="stars">
                  {review.rating.map(() => {
                    return <FontIcon>star</FontIcon>
                  })}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }
}



export default Buddies
