import React, { Component } from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import '../components/About/about.styl'
import TextDisplace from '../components/TextDisplace'

const aboutText = "Director based in Düsseldorf who works indipendent with a focus on projects of culture, art, fashion and music for industrial and private costumes all over the world."
const clients = "Selected Clients: Leica, Canyon, Warner Music Group, Fritz Cola, Dior, Red Bull Media, TSG, Loreal Paris."
const address1 = "Mintropstrasse 14-16"
const address2 = "40219 Düsseldorf"
const address3 = "+49 176 64 36 50 61"
const contact1 =  "kontakt(at)peteschilling.com"
const contact2 =  "instagram: peteschilling"

export default class AboutPage extends Component {
  render() {
    const {data} = this.props;
    return (
      <div className="about">
        <div className="about-intro">
          <TextDisplace text={aboutText}></TextDisplace>
        </div>
        <div className="about-clients">
          <TextDisplace text={clients}></TextDisplace>
        </div>
        <p className="about-address">
        <TextDisplace text={address1}></TextDisplace>
        <TextDisplace text={address2}></TextDisplace>
        <TextDisplace text={address3}></TextDisplace>
        </p>
        <p className="about-contact">
          <a href="mailto:kontakt@peteschilling.com">
          <TextDisplace text={contact1}></TextDisplace>
          </a>
          <a href="https://instagram.com/peteschilling" target="_blank">
            <TextDisplace text={contact2}></TextDisplace>
          </a>
        </p>
        <div className="about-image">
          <Img sizes={data.pete.sizes} />
        </div>
          <p className="about-imprint">
            <Link to="/imprint"><TextDisplace text="+ Imprint"></TextDisplace></Link>
          </p>
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
    pete: imageSharp(id: {regex: "/pete.jpg/"}) {
      sizes(maxWidth:1240, maxHeight:1240, quality:95) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`