import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
import store from './redux/stores';
import registerServiceWorker from './registerServiceWorker';
import ErrorPage from './routes/ErrorPage';

ReactDOM.render(
  <Provider store={store}>
    <div className="main">
      <div className="container">
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route exact path='/SpotifyAPI/' component={App} />              
              {/* <Route exact path='/search/:search?' component={App} /> */}
              <Route path='*' component={ErrorPage} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </div>
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
