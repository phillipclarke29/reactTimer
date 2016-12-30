var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');


//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
import { hashHistory } from 'react-router'

//load css
require('style!css!sass!applicationStyles')

  ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
  );
