import React, { Component } from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import './about.styl'
import TextDisplace from '../TextDisplace'



export default class AboutPage extends Component {
  render() {
    const {image, text} = this.props;
    return (
      <div className="about" id="about" name="about">
        <div className="about-intro">
         {text.intro}
        </div>
        <div className="about-clients">
        {text.clients}
        </div>
        <div className="about-address">
          <h4>Office:</h4>
          {text.address}
        </div>
        <div className="about-contact">
          <a href="mailto:kontakt@peteschilling.com">
            <TextDisplace text="kontakt(at)peteschilling.com"></TextDisplace>
          </a>
          <a href="https://vimeo.com/peteschilling" target="_blank">
            <TextDisplace text="Vimeo: PeteSchilling"></TextDisplace>
          </a>
          <a href="https://instagram.com/peteschilling" target="_blank">
            <TextDisplace text="instagram: pete.schilling"></TextDisplace>
          </a>
        </div>
        <div className="about-image">
          <Img sizes={image.sizes} />
        </div>
          <div className="about-imprint">
            <Link to="/imprint"><TextDisplace text="+ Imprint"></TextDisplace></Link>
          </div>
      </div>
    )
  }
}
