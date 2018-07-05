import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import $ from 'jquery'
import './textDisplacer.styl'


export default class TextDisplace extends Component {
    
    componentDidMount= () => {
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
        
        $('.textdisplacer').hover(
            
            function() {
                function getRandomFloat(min, max) {
                    return Math.random() * (max - min) + min;
                }
                let spans = $(this).children()
                for(var a = 0, b = spans.length; a < b; a++){
                    if ((a % 3) == 0) {
                    spans[a].style.transform = 'translateY('+ (getRandomFloat(-64,64)) + 'px)'
                    }
                }
            }, 
            function() {
                let spans = $(this).children()
                for(var a = 0, b = spans.length; a < b; a++){
                    spans[a].style.transform = 'translateY(0px)'
                }
            }
        )

    }

  render() {

    return (

        <div className="textdisplacer" 
            ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
            >
            {this.props.text}
        </div>

    )
  }
}
