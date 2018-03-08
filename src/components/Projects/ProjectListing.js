import React from 'react'
import Link from 'gatsby-link'

const ProjectListing = ({ post }) => 
    <article>
        <Link to={post.fields.slug}>
            {/* <Img sizes={data.background.sizes} /> */}
            <h3>{post.frontmatter.title}</h3>
            <span>{post.frontmatter.date}</span>
        </Link>
    </article>
;

export default ProjectListing;