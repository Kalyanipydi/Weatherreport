var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Master = require('./pages/Master/Master');
var report=require('./components/WeatherFirst');
module.exports = (

  <Route>
        <Route handler={Master}>
        <DefaultRoute handler={report} name="HomePage" />
        </Route>
  </Route>

);
