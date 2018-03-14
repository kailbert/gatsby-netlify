import React, { Component } from 'react'
import ProjectThumb from './ProjectThumb.js'

import './projects.styl'

const ProjectsList = ({ data }) => 
    <div className="projectslist" id="projects" name="projects">

        {data.allMarkdownRemark.edges.map(({node}) => {
            return <ProjectThumb post={node} key={node.id} />
        })}

    </div>
;

export default ProjectsList
