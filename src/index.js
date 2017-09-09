import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'

import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import theme from './assets/react-toolbox-themr/theme'
import './assets/react-toolbox-themr/theme.css'

import AppLayout from './components/AppLayout'
import App from './pages/App'
import Buddy from './pages/Buddy'
import Trail from './pages/Trail'

const Root = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={App} />
            <Route path='/trail' component={Trail} />
            <Route path='/buddy' component={Buddy} />
          </div>
        </BrowserRouter>
      </AppLayout>
    </ThemeProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
