import React from "react"
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Sidebar from '../components/sidebar'
import Pagination from '../components/pagination'

export const data = graphql`
	query ($skip: Int!, $limit: Int!) {
		allMarkdownRemark (
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		){
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

const BlogPages = (props) => {

	const numPages = props.pageContext.numPages
	const currentPage = props.pageContext.currentPage

	let pagination = []
	for(let i=1; i<=numPages; i++) {
		if(i===currentPage) {
			pagination.push(<Link to={`/blog/${i}`} className='p-2 mr-4 text-gray-800 bg-gray-100 rounded hover:bg-gray-200' activeClassName='bg-gray-200' key={i}>{i}</Link>)
		} else {
			pagination.push(<Link to={`/blog/${i}`} className='p-2 mr-4 text-gray-800 bg-gray-100 rounded hover:bg-gray-200' key={i}>{i}</Link>)
		}
	}

	return (
		<Layout>
			<Head title="Blog list" description="Blog list page"/>
			<div className='w-3/4 sm:w-full'>
				<ul className='p-0'>
					{props.data.allMarkdownRemark.edges.map((edge, index) => {
						return (
							<li className='my-4' key={index}>
								<Link to={`/blog/${edge.node.fields.slug}`} className='block p-3 text-gray-800 bg-gray-100 rounded hover:bg-gray-200'>
									<h2>{edge.node.frontmatter.title}</h2>
									<p>{edge.node.frontmatter.date}</p>
								</Link>
							</li>
						)
					})}
				</ul>
				<Pagination props={props}/>
			</div>
			<Sidebar />
		</Layout>
	)
}

export default BlogPages