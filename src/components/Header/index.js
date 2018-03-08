import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './header.styl';
const charming = require('charming')

export default class Header extends Component {
  
  componentDidMount= () =>{
    const headline = this.wrapper
    // charming(headline)
    charming(headline, {classPrefix: 'letter'});
    if (this.props.location.pathname === '/'){
      this.wrapper.classList.add("is-home");
    } else {
      this.wrapper.classList.remove("is-home");
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.location.pathname === '/'){
      this.wrapper.classList.add("is-home");
    } else {
      this.wrapper.classList.remove("is-home");
    }
  };
  
  render() {
    const {data} = this.props;
    return (
    <div ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)} className="hero">
       <div className="logo">Pete Schilling</div>
    </div>
    )
  }
}
