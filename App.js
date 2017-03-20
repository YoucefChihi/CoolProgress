import React, { Component } from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router';

//Routes
import Home from './routes/Home.js';

//Style
import mainStyle from './styles/main.sass';

//Theme
import Theme from './themes/CustomTheme.js';

injectTapEventPlugin();
class App extends Component {
  render() {
    return(
      <Theme>
        <Router history={hashHistory}>
          <Route path="/" component={Home}/>
        </Router>
      </Theme>
    )
  }
}

render(<App/>, document.getElementById('app'));
