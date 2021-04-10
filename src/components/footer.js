import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare, faFacebookSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`)

	return (
		<footer>
			<Link to="/">
				<h2 className='text-gray-800'>nobuhiroharada.com</h2>
			</Link>
			<div>
				<ul className='p-0'>
					<li>
						<Link to="/" className='leading-6 text-gray-400 hover:text-gray-600' activeClassName='text-gray-800'>Home</Link>
					</li>
					<li>
						<Link to="/about" className='leading-6 text-gray-400 hover:text-gray-600' activeClassName='text-gray-800'>About</Link>
					</li>
					<li>
						<Link to="/contact" className='leading-6 text-gray-400 hover:text-gray-600' activeClassName='text-gray-800'>Contact</Link>
					</li>
				</ul>
			</div>
			<div>
				<a 
					href="https://twitter.com/nobuhiro_harada"
					className='pr-4 text-4xl text-gray-400 hover:text-gray-600'
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faTwitterSquare} />
				</a>
				<a href="https://www.facebook.com/nobuhiroharada1026"
					className='pr-4 text-4xl text-gray-400 hover:text-gray-600'
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</a>
				<a href="https://github.com/nobuhiroharada"
					className='pr-4 text-4xl text-gray-400 hover:text-gray-600'
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faGithubSquare} />
				</a>
			</div>
			<div>
				<p>Created by {data.site.siteMetadata.author} © {(new Date()).getFullYear()}</p>
			</div>
		</footer>
	)
}

export default Footer