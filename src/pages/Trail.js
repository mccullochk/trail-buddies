import React, { Component } from 'react';

import Card from 'react-toolbox/lib/card/Card'
import CardMedia from 'react-toolbox/lib/card/CardMedia'
import CardText from 'react-toolbox/lib/card/CardText'
import CardTitle from 'react-toolbox/lib/card/CardTitle'
import FontIcon from 'react-toolbox/lib/font_icon';
import {Link} from 'react-router-dom';

import nic from "../imgs/Rise-41.jpg"
const NicImage = {
    src: nic,
    alt: 'my image',
}

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
              <p><b><FontIcon>wb_sunny</FontIcon></b> 90 minute hike</p>
              <p><b><FontIcon>directions_walk</FontIcon></b> Beginner level</p>
              <p><b><FontIcon>tag_faces</FontIcon></b> Coolness 11/10</p>
            </div>
          </Card>
        </div>
        <Card className="description">
          <CardText>
            Kenna Cartwright offers an extensive network of gentle nature trails for hiking or cycling with panoramic views of the city, the Thompson Valley, Kamloops Lake and the convergence of the North and South Thompson Rivers. This combined with our distinctive 4 seasons and easy access, makes Kenna Cartwright a park for all seasons.
          </CardText>
        </Card>
        <div className="buddies">
          <Link to={`/buddy/1234`} activeClassName="active">
          <Card className="buddies__cards">
            <CardTitle
              className="buddies_cards--title"
              avatar={NicImage.src}
              title="Nick Riopel"
              subtitle="Perilous Pathfinder" />
            <div className="buddies_cards--reviews">
              <FontIcon>star</FontIcon><FontIcon>star</FontIcon><FontIcon>star</FontIcon><FontIcon>star</FontIcon>
            </div>
          </Card>
          </Link>
          <Card className="buddies__cards">
            <CardTitle
              className="buddies_cards--title"
              avatar="http://www.thewanderguide.com/wp-content/uploads/2017/07/headshot.jpg"
              title="Inga Tranvik"
              subtitle="Bushwacker" />
            <div className="buddies_cards--reviews">
              <FontIcon>star</FontIcon><FontIcon>star</FontIcon><FontIcon>star</FontIcon><FontIcon>star</FontIcon>
            </div>
          </Card>
          <Card className="buddies__cards">
            <CardTitle
              className="buddies_cards--title"
              avatar="http://eclipsemagazine.com/wp-content/uploads/2017/04/Ian-Hecox-headshot-photo-credit-Albert-L.-Ortega.jpg"
              title="Justin Raker"
              subtitle="Survivalist" />
            <div className="buddies_cards--reviews">
              <FontIcon>star</FontIcon><FontIcon>star</FontIcon><FontIcon>star</FontIcon><FontIcon>star</FontIcon>
            </div>
          </Card>
          <Card className="buddies__cards">
            <CardTitle
              className="buddies_cards--title"
              avatar="https://i.pinimg.com/736x/68/be/1a/68be1a805e9206e375554f1f01e3b305--mens-headshots-model-headshots.jpg"
              title="Jack Savage"
              subtitle="Adventurer Extroardinaire" />
            <div className="buddies_cards--reviews">
              <FontIcon>star</FontIcon><FontIcon>star</FontIcon><FontIcon>star</FontIcon>
            </div>
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
