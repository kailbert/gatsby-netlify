import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import withRouter from 'react-router-dom/withRouter'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Nav from '../components/Nav'

import './styles/reset.css'
import "./styles/globalStyles";
import './styles/main.styl'


class TransitionHandler extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname;
  }
  render() {
    const {children} = this.props;
    return (
      <div className="transition-container">
        {children}
      </div>
    );
  }
}

const TemplateWrapper = ({ children, data, location }) => (
  <div>
    <Helmet
      title="Pete Schilling – Director/DOP"
      meta={[
        { name: 'description', content: 'Pete Schilling – Director/DOP' },
        { name: 'keywords', content: 'Pete Schilling, Director/DOP' },
      ]}
    />
    {/* <Header data={data} location={location}/> */}
    <Nav/>
    {/* <TransitionGroup>
      <CSSTransition
          key={location.pathname}
          classNames="pagetransition"
          timeout={{ enter: 2000, exit: 2000 }}
      >
        <TransitionHandler
            location={location}
        > */}
          <div className="mainwrapper">
            {children()}
          </div>
        {/* </TransitionHandler>
      </CSSTransition>
    </TransitionGroup> */}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
