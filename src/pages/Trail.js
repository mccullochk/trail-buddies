import React, { Component } from 'react';

import Button from 'react-toolbox/lib/button/Button'
import Card from 'react-toolbox/lib/card/Card'
import CardMedia from 'react-toolbox/lib/card/CardMedia'
import CardText from 'react-toolbox/lib/card/CardText'
import CardTitle from 'react-toolbox/lib/card/CardTitle'


class Trail extends Component {
  render() {
    return (
      <div className="trail">
        <div className="contact">
          <Card className="contact__img">
            <CardMedia
              aspectRatio="square"
              image="http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/05/Best-hiking-apps-053016.jpg"
            />
          </Card>
          <Card className="contact__info">
            <div className="contact__info--body">
              <h2>Kenna Cartright</h2>
              <p><b>[ ]</b> 90 minute hike</p>
              <p><b>[ ]</b> Beginner level</p>
              <p><b>[ ]</b> Awesomeness++</p>
            </div>
          </Card>
        </div>
        <Card className="description">
          <CardText>
            Kenna Cartwright offers an extensive network of gentle nature trails for hiking or cycling with panoramic views of the city, the Thompson Valley, Kamloops Lake and the convergence of the North and South Thompson Rivers. This combined with our distinctive 4 seasons and easy access, makes Kenna Cartwright a park for all seasons.
          </CardText>
        </Card>
        <div className="buddies">
          <Card className="buddies__cards">
            <CardMedia apsectration="wide" src="https://orchardinn.com/wp-content/uploads/2015/12/Maridav-iStock-Thinkstock.jpg" alt="Jack" />
            <CardTitle
              className="buddies_cards--title"
              avatar="https://i.pinimg.com/736x/68/be/1a/68be1a805e9206e375554f1f01e3b305--mens-headshots-model-headshots.jpg"
              title="Jack Savage"
              subtitle="Adventurer Extroardinaire" />
          </Card>
          <Card className="buddies__cards">
            <CardTitle subtitle='"Beautiful Hike"'/>
          </Card>
          <Card className="buddies__cards">
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
        `}</style>
      </div>

    )
  }
}

export default Trail
