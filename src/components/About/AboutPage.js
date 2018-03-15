import React, { Component } from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import './about.styl'
import TextDisplace from '../TextDisplace'


const aboutText1 = "PETE SCHILLING, born in 1987 and based in Düsseldorf, Germany. Starting at a really young age, Pete filmed skateboard and sports videos with his friends. During his high school year in the USA, he further expanded his interest in moving images and produced numerous spots for the high school tv station."
const aboutText2 = " Being back in Germany he knew his studies would need to include his passion for making films which let to a masters degree in communication design. In his first years after college, he gained a lot of experience working together with established production companies and agencies for clients like Red Bull, Leica, Dior, L’Oreal, Warsteiner, Aldi Süd, Fritz Kola und Deutsche Bank. During this period he developed extensive skills in disciplines like direction, camera and edit and is therefore able to work in these areas at a very high level."
const aboutText3 = "In 2017 he founded his own production company „Neuland“ and is now focussing on directing and camerawork. His working style is characterized by quick decisions, high ambition and pure efficiency without forgetting to have fun on the set. He is fascinated by the aesthetics of human shapes and movements as well as the design of beautiful products which he easily transports to the spectators of his films."
const aboutText4 = "One simply cannot watch a piece of Pete’s work without noticing the artful usage of light and the high emphasis on a rich sound which creates a unique atmosphere."

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
          <p>Office</p>
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
        <div className="about-text">
          <p>{aboutText1}</p>
          <p>{aboutText2}</p>
          <p>{aboutText3}</p>
          <p>{aboutText4}</p>
        </div>
          
      </div>
    )
  }
}
