const path = require("path");
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    if (node.internal.type === 'MarkdownRemark') {
        const slug =createFilePath({
            node,
            getNode,
            basePath: 'projects'
        });
        createNodeField({
            node,
            name: "slug",
            value: `projects${slug}`
        });
    }
}

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators;
    return new Promise((resolve,reject) => {
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
        `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({node})=> {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/projects/ProjectPage.js'),
                    context: {
                        slug: node.fields.slug,
                    }
                })
            })
            resolve();
        })
    })
}