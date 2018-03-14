import React, { Component } from 'react';
import Link from 'gatsby-link';

import './nav.styl'
import TextDisplace from '../TextDisplace'

export default class Nav extends Component {

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"><TextDisplace text="Pete Schilling"/></Link>
            </li>
            <li>
              <a href="/#projects"><TextDisplace text="Projects"/></a>
            </li>
            <li>
              <a href="/#about" ><TextDisplace text="Information"/></a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
