const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
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
      if (edge.node.frontmatter.public === true) {
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
          },
        })
      }
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

  if (node && node.frontmatter) {
    const body_ja = node.frontmatter.body_ja;
    if (body_ja) {
      const value = remark()
        .use(remarkHTML)
        .processSync(body_ja)
        .toString();

      // new node at:
      // fields {
      //   body_ja_html
      // }
      createNodeField({
        name: `body_ja_html`,
        node,
        value
      });
    }

    const body_ko = node.frontmatter.body_ko;
    if (body_ko) {
      const value = remark()
        .use(remarkHTML)
        .processSync(body_ko)
        .toString();

      // new node at:
      // fields {
      //   body_ko_html
      // }
      createNodeField({
        name: `body_ko_html`,
        node,
        value
      });
    }

    const body_zh = node.frontmatter.body_zh;
    if (body_zh) {
      const value = remark()
        .use(remarkHTML)
        .processSync(body_zh)
        .toString();

      // new node at:
      // fields {
      //   body_zh_html
      // }
      createNodeField({
        name: `body_zh_html`,
        node,
        value
      });
    }
  }

}
