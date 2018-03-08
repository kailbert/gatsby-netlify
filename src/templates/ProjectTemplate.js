import React, { Component } from 'react'

export default class ProjectPage extends Component {
  render() {
      const { data } = this.props;
      const iframeSrc = `https://player.vimeo.com/video/${data.markdownRemark.frontmatter.videoid}?autoplay=1&color=fff&title=0&byline=0&portrait=0`
    return (
      <div>
        <div className="video-embed">
          <iframe 
          src= {iframeSrc}
          frameborder="0" 
          allowfullscreen>
          </iframe>
        </div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <h1>{data.markdownRemark.frontmatter.videoid}</h1>
        <div dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
        }} />
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
        }
      }
}
`;
