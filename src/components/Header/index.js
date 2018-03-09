import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './header.styl';
// const charming = require('charming')

// import $ from 'jquery'

// function isScrolledIntoView(elem) {
//   var docViewTop = $(window).scrollTop();
//   var docViewBottom = docViewTop + $(window).height();

//   var elemTop = $(elem).offset().top;
//   var elemBottom = elemTop + $(elem).height() / 2;

//   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


// $(window).scroll(function () {
// //add class to all .sr elements when in view
//   // $('.sr').each(function () {
//   //     if (isScrolledIntoView(this) === true) {
//   //         $(this).addClass('in-view')
//   //     }
//   // });
//   var scroll = $(window).scrollTop();

//   if (scroll >= 220) {
//       $(".hero").addClass("is-hidden");
//   }
//   else {
//     $(".hero").removeClass("is-hidden");
//   }

// });

// $('#elm').hover(
//   function(){ $(this).addClass('hover') },
//   function(){ $(this).removeClass('hover') }
// )

export default class Header extends Component {
  
  // componentDidMount= () =>{
  //   const headline = this.wrapper
  //   // charming(headline)
  //   charming(headline, {classPrefix: 'letter'});
  //   if (this.props.location.pathname === '/'){
  //     this.wrapper.classList.add("is-home");
  //   } else {
  //     this.wrapper.classList.remove("is-home");
  //   }
  // };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (this.props.location.pathname === '/'){
  //     this.wrapper.classList.add("is-home");
  //   } else {
  //     this.wrapper.classList.remove("is-home");
  //   }
  // };
  
  render() {
    const {data} = this.props;
    return (
    <div ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)} className="hero">
       <div className="logo">Pete Schilling</div>
    </div>
    )
  }
}
