import React from 'react'

const portfolioCard = (props) => {

	return (
		<div className='col-span-12'>
			<h3 className="dark:text-gray-200">{props.title}</h3>
			<a href={props.url} className="duration-700 hover:opacity-70" target="_blank" rel="noopener noreferrer">
				<img className='w-full' src={props.image} alt='Blog' />
			</a>
			<p className="dark:text-gray-200">{props.description}</p>
		</div>
	)
}

export default portfolioCard