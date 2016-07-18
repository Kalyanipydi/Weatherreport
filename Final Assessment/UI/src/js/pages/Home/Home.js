var React = require('react');
var MainLayout = require('../../components/MainLayout');
var MovieBox = require('../../components/MovieBox');
var MovieList = require('../../components/MovieList');
var Movie = require('../../components/Movie');

var Home = React.createClass({
  render () {
    return (
          <MainLayout />
    );
  }
});

module.exports = Home;
