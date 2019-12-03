const path = require(`path`)
const { postsPerPage } = require(`./src/utils/siteConfig`)
const { paginate } = require(`gatsby-awesome-pagination`)
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, and pages that we fetched from the Ghost site.
 */

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const result = await graphql(`
		{
			allMarkdownRemark(limit: 1000) {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							tags
							templateKey
							public
						}
					}
				}
			}
		}
    `)

	// Check for any errors
	if (result.errors) {
		throw new Error(result.errors)
	}

	// Extract query results
	const posts = result.data.allMarkdownRemark.edges

	// Extract tags from posts
	const tags = [];
	const tagsObj = {};
	for (let index = 0; index < posts.length; index++) {
		const edge = posts[index];
		for (let index = 0; index < edge.node.frontmatter.tags.length; index++) {
			const tag = edge.node.frontmatter.tags[index];
			tagsObj[tag] = true;
		}
	}
	for (const key in tags) {
		if (tags.hasOwnProperty(key)) {
			const element = tags[key];
			tags.push(key);
		}
	}

	// Load templates
	const indexTemplate = path.resolve(`./src/templates/index.js`)
	const tagsTemplate = path.resolve(`./src/templates/tag.js`)
	const postTemplate = path.resolve(`./src/templates/post.js`)

	// Create tag pages
	tags.forEach(({ node }) => {
		const totalPosts = node.postCount !== null ? node.postCount : 0
		const numberOfPages = Math.ceil(totalPosts / postsPerPage)

		// This part here defines, that our tag pages will use
		// a `/tag/:slug/` permalink.
		node.url = `/tag/${node.slug}/`

		Array.from({ length: numberOfPages }).forEach((_, i) => {
			const currentPage = i + 1
			const prevPageNumber = currentPage <= 1 ? null : currentPage - 1
			const nextPageNumber =
				currentPage + 1 > numberOfPages ? null : currentPage + 1
			const previousPagePath = prevPageNumber
				? prevPageNumber === 1
					? node.url
					: `${node.url}page/${prevPageNumber}/`
				: null
			const nextPagePath = nextPageNumber
				? `${node.url}page/${nextPageNumber}/`
				: null

			createPage({
				path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
				component: tagsTemplate,
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.slug,
					limit: postsPerPage,
					skip: i * postsPerPage,
					numberOfPages: numberOfPages,
					humanPageNumber: currentPage,
					prevPageNumber: prevPageNumber,
					nextPageNumber: nextPageNumber,
					previousPagePath: previousPagePath,
					nextPagePath: nextPagePath,
				},
			})
		})
	})

	// Create post pages
	posts.forEach(({ node }) => {
		// This part here defines, that our posts will use
		// a `/:slug/` permalink.
		node.url = `/${node.slug}/`

		createPage({
			path: node.url,
			component: postTemplate,
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.slug,
			},
		})
	})

	// Create pagination
	paginate({
		createPage,
		items: posts,
		itemsPerPage: postsPerPage,
		component: indexTemplate,
		pathPrefix: ({ pageNumber }) => {
			if (pageNumber === 0) {
				return `/`
			} else {
				return `/page`
			}
		},
	})
}