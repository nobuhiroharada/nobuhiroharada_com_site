import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import useDarkMode from '../hooks/useDarkMode'

const Header = () => {
	const [ colorTheme, setTheme ] = useDarkMode()
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
			<div className='flex justify-between'>
				<h1>
					<Link to='/' className='text-5xl text-gray-800 sm:text-2xl dark:text-gray-200'>
						{data.site.siteMetadata.title}
					</Link>
				</h1>
				<div className='self-start'>
					<div onClick={() => setTheme(colorTheme)} role='none'>
						{colorTheme === 'light' ?
							<svg xmlns='http://www.w3.org/2000/svg' className='text-gray-200 cursor-pointer w-7' viewBox='0 0 20 20' fill='currentColor'>
								<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
							</svg>
							:
							<svg xmlns='http://www.w3.org/2000/svg' className='cursor-pointer w-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
							</svg>
						}
					</div>
				</div>
			</div>
			<nav>
				<ul className='flex p-0 m-0'>
					<li>
						<Link to='/' className='mr-5 text-gray-400 list-none hover:text-gray-600' activeClassName='text-gray-800 dark:text-gray-200'>Home</Link>
					</li>
					<li>
						<Link to='/about' className='mr-5 text-gray-400 list-none hover:text-gray-600' activeClassName='text-gray-800 dark:text-gray-200'>About</Link>
					</li>
					<li>
						<Link to='/portfolio' className='mr-5 text-gray-400 list-none hover:text-gray-600' activeClassName='text-gray-800 dark:text-gray-200'>Portfolio</Link>
					</li>
					<li>
						<Link to='/contact' className='mr-5 text-gray-400 list-none hover:text-gray-600' activeClassName='text-gray-800 dark:text-gray-200'>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header