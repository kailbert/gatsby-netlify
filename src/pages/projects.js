import React, { Component } from 'react'
import ProjectListing from '../components/Projects/ProjectListing.js'
import HorizontalScroll from 'react-scroll-horizontal'
// import $ from 'jquery'
import '../components/Projects/projects.styl'

export default class ProjectsPage extends Component {
    // THIS would be for mouse scroll
    // Also uncomment the thumb wrapper
    // constructor(props) {
    //     super(props);
    //   }
    // 
    //   componentDidMount= () =>{        
    //     var cntWd, sldWd, tb;
    //     $(function() {
    //       cntWd = $('.projectslist').innerWidth();
    //       tb = $('.thumbs');
    //       sldWd = tb.outerWidth();
    //   
    //       $('.projectslist').mousemove(function(e)
    //       {
    //         tb.css({left: ((cntWd - sldWd)*((e.pageX / cntWd).toFixed(3))).toFixed(1) +"px" });
    //        });
    //     });
    //   };

  render() {
    const {data} = this.props;
    return (
      <div>
        <div className="projectslist">
          {/* <div className="thumbs"> */}
            <HorizontalScroll reverseScroll={true} >
                {data.allMarkdownRemark.edges.map(({node}) => {
                  return <ProjectListing post={node} key={node.id} />
                })}
            </HorizontalScroll>
          {/* </div> */}
        </div>
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
         next{
          frontmatter{
            title
          }
          fields{
            slug
          }
        }
        previous{
          frontmatter{
            title
          }
          fields{
            slug
          }
        }
        node {
          id
          frontmatter {
            title
            date(formatString:"DD.MM.YYYY")
            image
            videoid
            client
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