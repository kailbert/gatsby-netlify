import React, { Component } from 'react'
import Img from 'gatsby-image'
import ProjectListing from '../components/Projects/ProjectListing.js'
import HorizontalScroll from 'react-scroll-horizontal'

import ReactDOM from 'react-dom'


import $ from 'jquery'
import charming from 'charming'
import Rellax from 'rellax'


export default class ProjectsList extends Component {

  constructor(props) {
    super(props);
    // this.state = {isHovered: false};

    // This binding is necessary to make `this` work in the callback
    // this.wrapChars = this.wrapChars.bind(this);
  }

  componentDidMount= () =>{
    var cntWd, sldWd, tb;
    $(function() {
      cntWd = $('.projectslist').innerWidth();
      tb = $('.thumbs');
      sldWd = tb.outerWidth();
      
      $('.projectslist').mousemove(function(e)
      {
        tb.css({left: ((cntWd - sldWd)*((e.pageX / cntWd).toFixed(3))).toFixed(1) +"px" });
       });
    });
    const headline = this.wrapper
    charming(headline, {classPrefix: 'letter letter'});

    $(".letter2").attr("data-rellax-speed", "-7")
    $(".letter3").attr("data-rellax-speed", "-4")
    $(".letter4").attr("data-rellax-speed", "7")
    $(".letter5").attr("data-rellax-speed", "-1")
    $(".letter6").attr("data-rellax-speed", "-1")
    $(".letter7").attr("data-rellax-speed", "4")
    $(".letter8").attr("data-rellax-speed", "-5")
    $(".letter9").attr("data-rellax-speed", "3")
    $(".letter10").attr("data-rellax-speed", "-3")
    $(".letter11").attr("data-rellax-speed", "5")
    $(".letter12").attr("data-rellax-speed", "1")

    var para = $(headline).children("span")
    var rellax = new Rellax(".letter");
  };

  // componentDidUpdate = (prevProps, prevState) => {

    
  // };
  
  render() {
    const {data} = this.props;
    return (
      <div>
         <div className="hero">
          <div className="logo" ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>Pete Schilling</div>
        </div>
        <div className="projectslist">
          <div className="thumbs">
                {data.allMarkdownRemark.edges.map(({node}) => {
                  return <ProjectListing post={node} key={node.id} />
                })}
          </div>
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query SiteMeta {
    site{
      siteMetadata{
        title
        desc
      }
    }
    background: imageSharp(id: {regex: "/bg.jpg/"}) {
      sizes(maxWidth:1240, maxHeight:1240, quality:95) {
        ...GatsbyImageSharpSizes
      }
    }
    allMarkdownRemark(sort: {
      fields:[frontmatter___date],
      order: DESC
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString:"DD.MM.YYYY")
            image
            videoid
          }
          html
          excerpt
          fields{
            slug
          }
        }
      }
    }
  }
`