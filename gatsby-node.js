const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const { currentTimestampUTC } = require('./src/utils/currentTimestamp');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000,
        filter: {
          frontmatter: {
            public: { eq: true }, 
            date: { lt: ${currentTimestampUTC} } 
          }
        }
        ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              url
              tags
              templateKey
              date
              public
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.frontmatter.url,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          currentTimestampUTC,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tag/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
          currentTimestampUTC,
        },
      })
    })
  })
}

const remark = require('remark')
const remarkHTML = require('remark-html')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  const locales = ['zh', 'ja', 'ko', 'ru', 'id'];

  if (node && node.frontmatter) {


    for (let index = 0; index < locales.length; index++) {
      const locale = locales[index];
      const body = node.frontmatter[`body_${locale}`];
      if (body) {
        const value = remark()
          .use(remarkHTML)
          .processSync(body)
          .toString();

        // new node at:
        // fields {
        //   body_${locale}_html
        // }
        createNodeField({
          name: `body_${locale}_html`,
          node,
          value
        });
      }
    }

  }

}
