import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'

export default class ProjectsList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount= () =>{

    const sentence = this.wrapper
    let wordsToArray = (str) => str.split('').map(e => e === ' ' ? '&nbsp;' : e)

    function insertSpan(elem, letters) {
      elem.textContent = ''

      for(let letter of letters) {
        let span = document.createElement('span')
        span.innerHTML = letter
        elem.appendChild(span)
      }

    }
    insertSpan(sentence, wordsToArray(sentence.textContent))
  };

  render() {
    const {data} = this.props;
    return (
      <div>
        <Link to="/projects">
         <div className="hero">
          <div className="logo" ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>Pete Schilling</div>
        </div>  
        </Link>
      </div>
    )
  }
}
