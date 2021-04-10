import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Sidebar = () => {

	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							tags
							date(formatString: "YYYY-MM")
						}
					}
				}
			}
		}
	`)
	

	let tagArray = []
	let archiveArray = []

	data.allMarkdownRemark.edges.forEach((edge) => {

		if(edge.node.frontmatter.tags) {
			edge.node.frontmatter.tags.forEach((tag) => {
				tagArray.push(tag)
			})
		}

		if(edge.node.frontmatter.date) {
			archiveArray.push(edge.node.frontmatter.date)
		}
	})

	// タグ
	let tagDict = []
	for(let key of tagArray){
		tagDict[key] = tagArray.filter(function(x){return x===key}).length;
	}

	let orderedTag = {}
	Object.keys(tagDict).sort().forEach(function(key) {
		orderedTag[key] = tagDict[key];
	});

	let tagLinks = []
	for(let key in orderedTag) {
		tagLinks.push(<Link to={`/tag/${key}`} className='inline-block p-2 m-1 text-gray-800 bg-gray-100 rounded hover:bg-gray-200' key={key}>{key} ({tagDict[key]})</Link>)
	}

	// アーカイブ
	let archiveDict = []
	for(let key of archiveArray){
		archiveDict[key] = archiveArray.filter(function(x){return x===key}).length;
	}

	let orderedArchive = {}
	Object.keys(archiveDict).sort().reverse().forEach(function(key) {
		orderedArchive[key] = archiveDict[key];
	});
	
	let archiveLinks = []
	for(let key in orderedArchive) {
		let archiveLink = key.replace('-', '/')
		archiveLinks.push(<Link to={`/archive/${archiveLink}`} className='inline-block p-2 m-1 text-gray-800 bg-gray-100 rounded hover:bg-gray-200' key={key}>{key} ({archiveDict[key]})</Link>)
	}


	return (
		<div className='w-1/4 px-8 py-0 sm:w-full sm:px-0 sm:py-8'>
			<h3>Tags</h3>
			<div>
				{tagLinks}
			</div>
			<h3>Archives</h3>
			<div>
				{archiveLinks}
			</div>
		</div>
	)
}

export default Sidebar