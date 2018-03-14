import React, { Component } from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import './about.styl'
import TextDisplace from '../TextDisplace'



export default class AboutPage extends Component {
  render() {
    const {image} = this.props;
    return (
      <div className="about" id="about" name="about">
        <div className="about-intro">
          Director based in Düsseldorf who works indipendent with a focus on projects of culture, art, fashion and music for industrial and private costumes all over the world.
        </div>
        <div className="about-clients">
          Selected Clients: Leica, Canyon, Warner Music Group, Fritz Cola, Dior, Red Bull Media, TSG, Loreal Paris.
        </div>
        <div className="about-address">
          <h4>Office:</h4>
          <p>Mintropstrasse 14-16</p>
          <p>40219 Düsseldorf</p>
          <p>+49 176 64 36 50 61</p>
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
