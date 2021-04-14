import React from 'react';
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export const data = graphql`
	query ( $tag: String ){
		allMarkdownRemark (
			limit: 100
			filter: { frontmatter: { tags: { in: [$tag] }} }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						date
					}
					fields {
						slug
					}
				}
			}
		}
	}
`

const TagedPages = (props) => {

	const tag = props.pageContext.tag;

	return (
		<Layout>
			<div className='w-3/4 sm:w-full'>
				<h3>Posts tagged as "{tag}"</h3>
				<ul className='p-0'>
					{props.data.allMarkdownRemark.edges.map((edge, index) => {
						return (
							<li className='my-4' key={index}>
								<Link to={`/blog/${edge.node.fields.slug}`} className='block p-3 text-gray-800 bg-gray-100 rounded hover:bg-gray-200 dark:bg-gray-500 dark:hover:bg-gray-400'>
									<h3>{edge.node.frontmatter.title}</h3>
									<p>{edge.node.frontmatter.date}</p>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
			<Sidebar />
		</Layout>
	)
}

export default TagedPages