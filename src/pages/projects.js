import React, { Component } from 'react'
import Img from 'gatsby-image'
import ProjectListing from '../components/Projects/ProjectListing.js'


export default class ProjectsList extends Component {
  render() {
    const {data} = this.props;
    return (
      <div>
        {/* <p>Welcome to {data.site.siteMetadata.title}</p>
        <Img sizes={data.background.sizes}/>
        <p>Now go build {data.site.siteMetadata.desc}</p> */}
        {data.allMarkdownRemark.edges.map(({node}) => {
            return <ProjectListing post={node} key={node.id} />
         })}
      </div>
    )
  }
}

export const query = graphql`
  query SiteMeta {
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
    allMarkdownRemark(sort: {
      fields:[frontmatter___date],
      order: DESC
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString:"DD.MM.YYYY")
          }
          html
          excerpt
          fields{
            slug
          }
        }
      }
    }
  }
`