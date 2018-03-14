import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import ReactDOM from 'react-dom'

import $ from 'jquery'
import '../TextDisplace/textDisplacer.styl'


export default class ProjectThumb extends Component {
    
    componentDidMount= () => {
        const sentence = this.article
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
        
        $('.textdisplacer-article').hover(
            
            function() {
                function getRandomFloat(min, max) {
                    return Math.random() * (max - min) + min;
                }
                let spans = $(this).find(".textdisplacer-text").children()
                for(var a = 0, b = spans.length; a < b; a++){
                    if ((a % 3) == 0) {
                        spans[a].style.transform = 'translateY('+ (getRandomFloat(-34,34)) + 'px)'
                    }
                }
            }, 
            function() {
                let spans = $(this).find(".textdisplacer-text").children()
                for(var a = 0, b = spans.length; a < b; a++){
                    spans[a].style.transform = 'translateY(0px)'
                }
            }
        )

    }

  render() {
    const { post } = this.props;
    return (

        <article className="textdisplacer-article">
            <Link to={post.fields.slug}>
                {/* <Img resolutions={post.frontmatter.image.childImageSharp.sizes} /> */}
                <div className="article-image">
                    <img src={post.frontmatter.image}/>
                </div>
                <div className="textdisplacer-text project-title" ref={(article) => this.article = ReactDOM.findDOMNode(article)}>
                    {post.frontmatter.title}
                </div>
                <div className="project-client">
                {post.frontmatter.client}
                </div>
            </Link>
        </article>

    )
  }
}

   