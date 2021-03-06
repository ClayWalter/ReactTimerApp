var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">React Timer App</li>
        <li>
          <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
        </li>
        <li>
          <Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
        </li>
    </ul>
    </div>
    <div className="top-bar-right">
      <p className="menu-text">Created by <a href="http://www.clayhero.com/about" target="_blank">Clay Walter</a></p>
    </div>
  </div>
);
}


module.exports = Nav;
