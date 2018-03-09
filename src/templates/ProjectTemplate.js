import React, { Component } from 'react'

export default class ProjectPage extends Component {
  render() {
      const { data } = this.props;
      const iframeSrc = `https://player.vimeo.com/video/${data.markdownRemark.frontmatter.videoid}?autoplay=1&color=fff&title=0&byline=0&portrait=0`
    return (
      <div className="project">
        <div className="project-left">
          <div className="project-title">
            <h3>{data.markdownRemark.frontmatter.title}</h3>
            <h3>with {data.markdownRemark.frontmatter.client}</h3>
          </div>
        </div>
        <div className="project-main">
          <div className="video-embed">
            <iframe 
            src= {iframeSrc}
            frameborder="0" 
            allowfullscreen>
            </iframe>
          </div>
          <div dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html
          }} />
        </div>
        <div className="project-right">
          <a href="">Next</a>
        </div>
      </div>
    )
  }
}

export const query = graphql`
query BlogPostQuery($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter{
            title
            date(formatString: "DD.MM.YYYY")
            videoid
            client
        }
      }
}
`;
