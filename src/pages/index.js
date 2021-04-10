import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Head from '../components/head'

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark (
				sort: { fields: [frontmatter___date], order: DESC }
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
	`)
	
	const posts = data.allMarkdownRemark.edges
	const postsPerPage = 10
	const numPages = Math.ceil(posts.length / postsPerPage)
	const currentPage = 1

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
			<Head title="Home" description="Home page"/>
			<div className='w-3/4 sm:w-full'>
				<ul className='p-0'>
					{data.allMarkdownRemark.edges.slice(0, postsPerPage).map((edge, index) => {
						return (
							<li className='my-4' key={index}>
								<Link to={`/blog/${edge.node.fields.slug}`} className='block p-3 text-gray-800 bg-gray-100 rounded hover:bg-gray-200'>
									<h3>{edge.node.frontmatter.title}</h3>
									<p>{edge.node.frontmatter.date}</p>
								</Link>
							</li>
						)
					})}
				</ul>
				
				<div className='my-10'>
					{pagination}
				</div>
			</div>
			<Sidebar />
		</Layout>
	)
}

export default IndexPage