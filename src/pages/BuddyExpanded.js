import React, { Component } from 'react';

import Button from 'react-toolbox/lib/button/Button'
import Card from 'react-toolbox/lib/card/Card'
import CardMedia from 'react-toolbox/lib/card/CardMedia'
import CardText from 'react-toolbox/lib/card/CardText'
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon'

import '../css/Buddy.css'

import buddies from '../data/buddies.js'
import hikes from '../data/hikes.js'

class Buddies extends Component {
  componentWillMount() {
    this.setState({
      id: this.props.match.params.id,
      hike: "1"
    })
  }

  getObj(id, obj) {
    return obj.id.toString() === id 
  }

  // Super ghetto way to make a hike booking, but this is an MVP after all...
  setupButton() {
    window.open('mailto:nriopel13@gmail.com?subject=Booking a Hike&body=Hi Nick! I would like to book a hike with you.');
  }

  render() {
    const buddy = buddies.find(this.getObj.bind(this, this.state.id))
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
              <Button label="Book" raised primary className="book" onClick={this.setupButton} />
            </div>
          </Card>
        </div>
        <Card className="person">
          <CardText>
            <b>Who I am: </b>{buddy.description}
          </CardText>
        </Card>
        {buddy.hikes.map((hike) => {
          const hikeOffer = hikes.find(this.getObj.bind(this, hike.id.toString()))
          return (
            <Card className="description1">
              <h2>{hikeOffer.name}</h2>
              <CardText>
                <b>What I offer: </b>{hike.offer}
              </CardText>
            </Card>
          )
        })}
      </div>
    )
  }
}



export default Buddies
