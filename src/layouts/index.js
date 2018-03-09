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
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {/* <Header data={data} location={location}/> */}
    <Nav/>
    <TransitionGroup>
      <CSSTransition
          key={location.pathname}
          classNames="pagetransition"
          timeout={{ enter: 1200, exit: 1200 }}
      >
        <TransitionHandler
            location={location}
        >
          <div className="mainwrapper">
            {children()}
          </div>
        </TransitionHandler>
      </CSSTransition>
    </TransitionGroup>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
