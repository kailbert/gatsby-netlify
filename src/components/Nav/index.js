import React, { Component } from 'react';
import Link from 'gatsby-link';

import './nav.styl';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" activeClassName="active">Home</Link>
            </li>
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