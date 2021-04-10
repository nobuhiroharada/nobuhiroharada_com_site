import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Header = () => {
	const data = useStaticQuery(graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
	`)
	return (
		<header className='pt-1 pb-6'>
			<h1>
				<Link to="/" className="text-5xl text-gray-800 sm:text-2xl">
					{data.site.siteMetadata.title}
				</Link>
			</h1>
			<nav>
				<ul className='flex p-0 m-0'>
					<li>
						<Link to="/" className='mr-5 text-gray-400 list-none hover:text-gray-600' activeClassName='text-gray-800'>Home</Link>
					</li>
					<li>
						<Link to="/about" className='mr-5 text-gray-400 list-none hover:text-gray-600' activeClassName='text-gray-800'>About</Link>
					</li>
					<li>
						<Link to="/contact" className='mr-5 text-gray-400 list-none hover:text-gray-600' activeClassName='text-gray-800'>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header