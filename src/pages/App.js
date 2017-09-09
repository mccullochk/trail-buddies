import React, { Component } from 'react';

import Card from 'react-toolbox/lib/card/Card'
import CardTitle from 'react-toolbox/lib/card/CardTitle'

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="app-header">
          <Card className="region" >
            <CardTitle className="region__title"
              title="Whistler"
            />
          </Card>
        </section>
      </div>

    )
  }
}

export default App;
