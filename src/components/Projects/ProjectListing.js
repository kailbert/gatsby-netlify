import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const ProjectListing = ({ post }) => 
    <article>
        <Link to={post.fields.slug}>
            {/* <Img sizes={post.frontmatter.image.childImageSharp.sizes} /> */}
            <img src={post.frontmatter.image}/>
            <h3>{post.frontmatter.title}</h3>
        </Link>
    </article>
;

export default ProjectListing;