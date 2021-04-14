import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
	query ( $slug: String! ) {
		markdownRemark ( fields: { slug: { eq: $slug } } ) {
			frontmatter {
				title
				tags
				date
			}
			html
		}
	}
`

const BlogPage = (props) => {

	const frontmatter = props.data.markdownRemark.frontmatter

	return (
		<Layout>
			<Head title="Blog" description={frontmatter.title}/>
			<div className='w-full'>
				<h1 className='sm:text-xl dark:text-gray-200'>{frontmatter.title}</h1>
				<div className='my-7'>
					{frontmatter.tags && frontmatter.tags.map(tag => (
						<Link 
							to={`/tag/${tag}`}
							key={tag}
							className='inline-block p-2 m-1 text-gray-800 bg-gray-100 rounded hover:bg-gray-200'
						>
							{tag}
						</Link>
					))}
				</div>
				<p className='float-right mt-0 text-xs text-gray-400'>{frontmatter.date}</p>
				<br />
				<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
			</div>
		</Layout>
	)
}

export default BlogPage