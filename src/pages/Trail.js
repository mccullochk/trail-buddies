import React, { Component } from 'react';

import Card from 'react-toolbox/lib/card/Card'
import CardMedia from 'react-toolbox/lib/card/CardMedia'
import CardText from 'react-toolbox/lib/card/CardText'
import CardTitle from 'react-toolbox/lib/card/CardTitle'
import FontIcon from 'react-toolbox/lib/font_icon';
import {Link} from 'react-router-dom';

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
          .contact__info--body h2 {
            font-size: 20px;
          }
          .contact__info--body span {
            position: relative;
            top: 2px;
            font-size: 15px;
          }
          .contact__info--body .book {
            margin-left: 20px;
          }
          .description {
            margin-bottom: 20px;
          }
          .buddies {
            display: flex;
            flex-wrap: wrap;
          }
          .buddies__cards {
            width: 154px;
            height: 100px;
            margin-right: 5px;
            margin-bottom: 10px;
          }
          .buddies .buddies__cards p {
            font-size: 12px;
          }
          h2 {
            margin: 10px 0 10px 0;
          }
          p {
            margin: 0;
            margin-bottom: 10px;
          }
          .buddies_cards--title div:last-child {
            width: 50%;
          }
          body div.buddies_cards--title div:last-child h5,
          body div.buddies_cards--title div:last-child p {
            font-size: 10px !important;
          }
          body div.buddies_cards--title div:last-child h5 {
            color: black !important;
          }
          .buddies_cards span {
            color: black !important;
          }
          .buddies a {
            text-decoration: none !important;
          }
          .buddies_cards--reviews span  {
            font-size: 16px;
            color: black !important;
          }
          .buddies_cards--reviews {
            margin-left: 15px;
            margin-top: 7px;
          }
          div.buddies_cards--title {
            padding-bottom: 10px !important;
          }
        `}</style>
      </div>

    )
  }
}

export default Trail
