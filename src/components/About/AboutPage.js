import React, { Component } from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import './about.styl'
import TextDisplace from '../TextDisplace'



export default class AboutPage extends Component {
  render() {
    const {text} = this.props;
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
          <p>{text.address1}</p>
          <p>{text.address2}</p>
          <p>{text.address3}</p>
        </div>
        <div className="about-contact">
          <a href={text.social1name}>
            <TextDisplace text={text.social1}></TextDisplace>
          </a>
          <a href={text.social2name} target="_blank">
            <TextDisplace text={text.social2}></TextDisplace>
          </a>
          <a href={text.social3name} target="_blank">
            <TextDisplace text={text.social3}></TextDisplace>
          </a>
        </div>
        <div className="about-image">
          <img src={text.image} alt="Pete Schilling" />
        </div>
          <div className="about-imprint">
            <Link to="/imprint"><TextDisplace text="+ Imprint"></TextDisplace></Link>
          </div>
      </div>
    )
  }
}
