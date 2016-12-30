var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var CountDown = require('CountDown');


//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
import { hashHistory } from 'react-router'

//load css
require('style!css!sass!applicationStyles')

  ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/"component={Main}>
      <Route path="Countdown" component={CountDown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
  );
