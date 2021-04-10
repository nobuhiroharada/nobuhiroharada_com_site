import React from 'react'
import { Link } from 'gatsby'

const Pagination = (data) => {

	const numPages = data.props.pageContext.numPages
	const currentPage = data.props.pageContext.currentPage

	let pagination = []
	for(let i=1; i<=numPages; i++) {
		if(i===currentPage) {
			pagination.push(<Link to={`/blog/${i}`} className='p-2 mr-4 text-gray-800 bg-gray-100 rounded hover:bg-gray-200' activeClassName='bg-gray-200' key={i}>{i}</Link>)
		} else {
			pagination.push(<Link to={`/blog/${i}`} className='p-2 mr-4 text-gray-800 bg-gray-100 rounded hover:bg-gray-200' key={i}>{i}</Link>)
		}
	}

	return (
		<div className='my-10'>
			{pagination}
		</div>
	)
}

export default Pagination