import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from "gatsby"
import '../components/Intro/intro.styl'
import introVid from '../components/Intro/intro.mp4'
import ProjectsList from '../components/Projects/ProjectsList'
import AboutPage from '../components/About/AboutPage'
import { graphql } from 'gatsby'
import $ from 'jquery'
import Rellax from 'rellax'
import Layout from "../components/Layout"


if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]',{
    speed: 1200, 
	  easing: 'easeInOutCubic'
  });
}

export default class MainPage extends Component {

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
        span.className = 'letter'
        span.innerHTML = letter
        elem.appendChild(span)
      }

    }
    insertSpan(sentence, wordsToArray(sentence.textContent))

    $(".letter:nth-child(1)").attr("data-rellax-speed", "0")    // P
    $(".letter:nth-child(2)").attr("data-rellax-speed", "-2")   // e
    $(".letter:nth-child(3)").attr("data-rellax-speed", "0")    // t
    $(".letter:nth-child(4)").attr("data-rellax-speed", "8")    // e
    $(".letter:nth-child(5)").attr("data-rellax-speed", "0")    // empty
    $(".letter:nth-child(6)").attr("data-rellax-speed", "0")    // S
    $(".letter:nth-child(7)").attr("data-rellax-speed", "-4")   // c
    $(".letter:nth-child(8)").attr("data-rellax-speed", "0")    // h
    $(".letter:nth-child(9)").attr("data-rellax-speed", "10")   // i
    $(".letter:nth-child(10)").attr("data-rellax-speed", "0")   // l
    $(".letter:nth-child(11)").attr("data-rellax-speed", "0")   // l
    $(".letter:nth-child(12)").attr("data-rellax-speed", "-3")  // i
    $(".letter:nth-child(13)").attr("data-rellax-speed", "0")   // n
    $(".letter:nth-child(14)").attr("data-rellax-speed", "5")   // g
    var rellax = new Rellax(".letter");
    

    const loader = this.loadering
    let wordsToArrayloader = (str) => str.split('').map(e => e === ' ' ? '&nbsp;' : e)

    function insertSpan(elem, letters) {
      elem.textContent = ''

      for(let letter of letters) {
        let span = document.createElement('span')
        span.className = 'letter'
        span.innerHTML = letter
        elem.appendChild(span)
      }

    }
    insertSpan(loader, wordsToArrayloader(loader.textContent))
  };

  render() {
    const {data} = this.props;
    return (
      <Layout>

      <div>
        <div className="loader"ref={(loadering) => this.loadering = ReactDOM.findDOMNode(loadering)}>Loading...</div>
        <Link to="/#projects">
          <div className="hero">
            <div className="video">
                <video loop muted="muted" autoPlay playsInline>
                  <source src={introVid} type="video/mp4" />
                </video>
            </div>
            <div className="logo" ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>Pete Schilling</div>
            {/* <div className="jobtitle">Director/DOP</div> */}
          </div>  
        </Link>

        <ProjectsList data={data}/>

        <AboutPage image={data.pete} text={data.dataYaml}/>
        
      </div>
      </Layout>
    )
  }
}


export const query = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
      desc
    }
  }
  dataYaml {
    intro
    address1
    address2
    address3
    clients
    social1
    social1name
    social2
    social2name
    social3
    social3name
    image
  }
  pete: imageSharp(id: {regex: "/pete.jpg/"}) {
    fluid(maxWidth: 700) {
      ...GatsbyImageSharpFluid
    }
  }
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    edges {
      next {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
      previous {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
      node {
        id
        frontmatter {
          title
          published
          date(formatString: "DD.MM.YYYY")
          image
          videoid
          client
        }
        html
        excerpt
        fields {
          slug
        }
      }
    }
  }
}
`