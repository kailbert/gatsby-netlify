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
              <Link to="/#projectslist" activeClassName="active">Projects</Link>
            </li>
            {/* <li>
              <Link to="/projects" activeClassName="active">Projects</Link>
            </li> */}
            <li>
              <Link to="/about" activeClassName="active">Information</Link>
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
