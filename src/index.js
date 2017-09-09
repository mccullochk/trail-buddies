import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'

import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import theme from './assets/react-toolbox-themr/theme'
import './assets/react-toolbox-themr/theme.css'
import App from './pages/App'

const Root = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route exact path='/' component={App} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
