import React, { Component } from 'react';

import Card from 'react-toolbox/lib/card/Card'
import CardMedia from 'react-toolbox/lib/card/CardMedia'
import FontIcon from 'react-toolbox/lib/font_icon';
import { Link } from 'react-router-dom'

import hikes from '../data/hikes.js'

class App extends Component {
  componentWillMount() {
    this.setState({
      id: this.props.match.params.id,
    })
  }

  getObj(id, obj) {
    return obj.id.toString() === id
  }

  render() {
    return (
      <div className="app">
        {hikes.map((hike) => {
          return (
            <Link to={`/trail/${hike.id}`}>
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
          </Link>
          )})}
      </div>

    )
  }
}

export default App;
