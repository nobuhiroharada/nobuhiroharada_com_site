import React from 'react';
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export const data = graphql`
	query ( $startDate: Date, $endDate: Date ){
		allMarkdownRemark (
			limit: 100
			filter: { frontmatter: { date: { gte: $startDate, lt: $endDate }} }
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

const ArchivedPages = (props) => {

	const archive = props.pageContext.archive;

	return (
		<Layout>
			<div className='w-3/4 sm:w-full'>
				<h3>Posts archived at "{archive}"</h3>
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

export default ArchivedPages