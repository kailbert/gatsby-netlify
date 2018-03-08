import React, { Component } from 'react'
import Img from 'gatsby-image'


export default class AboutPage extends Component {
  render() {
    const {data} = this.props;
    const lorem = "Director based in Düsseldorf. eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no se"
    return (
      <div className="about">
        <p className="about-intro">{lorem}</p>
        <p className="about-clients">{lorem}</p>
        <p className="about-address">{lorem}</p>
        <p className="about-contact">{lorem}</p>
        <div className="about-image">
          <Img sizes={data.background.sizes} />
        </div>
        <p className="about-imprint"><a href="test">+ Imprint</a></p>
      </div>
    )
  }
}

export const query = graphql`
  query aboutPage {
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
  }
`