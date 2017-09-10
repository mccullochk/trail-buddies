import React, { Component } from 'react';

import Card from 'react-toolbox/lib/card/Card'
import CardMedia from 'react-toolbox/lib/card/CardMedia'
import CardText from 'react-toolbox/lib/card/CardText'
import CardTitle from 'react-toolbox/lib/card/CardTitle'
import FontIcon from 'react-toolbox/lib/font_icon';
import {Link} from 'react-router-dom';

import '../css/Trail.css'

import hikes from '../data/hikes.js'
import buddies from '../data/buddies.js'

class Trail extends Component {
  componentWillMount() {
    this.setState({
      id: this.props.match.params.id,
    })
  }

  getObj(id, obj) {
    return obj.id.toString() === id
  }

  render() {
    const hike = hikes.find(this.getObj.bind(this, this.state.id))
    return (
      <div className="trail">
        <div className="contact">
          <Card className="contact__img">
            <CardMedia
              aspectRatio="square"
              image={hike.image}
            />
          </Card>
          <Card className="contact__info">
            <div className="contact__info--body">
              <h2>{hike.name}</h2>
              <p><b><FontIcon>wb_sunny</FontIcon></b> {hike.duration} minute hike</p>
              <p><b><FontIcon>directions_walk</FontIcon></b> {hike.level} level</p>
              <p><b><FontIcon>tag_faces</FontIcon></b> Coolness {hike.coolness}/10</p>
            </div>
          </Card>
        </div>
        <Card className="description">
          <CardText>{hike.description}</CardText>
        </Card>
        <div className="buddies">
        {hike.buddies.map((id) => {
          const buddy = buddies.find(this.getObj.bind(this, id.toString()))
          return (
          <Link to={`/buddy/${buddy.id}?hike=${this.state.id}`}>
            <Card className="buddies__cards">
              <CardTitle
                className="buddies_cards--title"
                avatar={buddy.img}
                title={buddy.name}
                subtitle={buddy.motto} />
              <div className="buddies_cards--reviews">
                {buddy.rating.map(() => {
                  return <FontIcon>star</FontIcon>
                })}
              </div>
            </Card>
          </Link>
          )
        })}
        </div>
      </div>

    )
  }
}

export default Trail
