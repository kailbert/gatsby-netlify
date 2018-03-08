
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';

import './header.styl';

export default class Header extends Component {
  
  render() {
    const {data, location} = this.props;
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/projects" activeClassName="active">Projects</Link>
            </li>
            <li>
              <Link to="/information" activeClassName="active">Information</Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
