import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Sidebar from '../components/sidebar'
import blogImage from '../images/blog.png'
import portfolioImage from '../images/portfolio.png'
import sampleAppLPImage from '../images/sample-app-lp.png'

const PortfolioPage = () => {

	return (
		<Layout>
			<Head title='Portfolio' description='Portfolio page'/>
			<div className='w-3/4 sm:w-full'>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12'>
						<h3 className="dark:text-gray-200">ブログ</h3>
						<a href="https://nobuhiroharada.com" target="_blank" rel="noopener noreferrer">
							<img className='w-full' src={blogImage} alt='Blog' />
						</a>
						<p className="dark:text-gray-200">GatsbyJS, TailwindCSS, Netlifyを使用</p>
					</div>
					<div className='col-span-12'>
						<h3 className="dark:text-gray-200">ポートフォリオページ</h3>
						<a href="https://nobuhiroharada.github.io/portfolio-3/" target="_blank" rel="noopener noreferrer">
							<img className='w-full cursor-pointer' src={portfolioImage} alt='Blog' />
						</a>
						<p className="dark:text-gray-200">Reactを使用</p>
					</div>
					<div className='col-span-12'>
						<h3 className="dark:text-gray-200">サンプルアプリランディングページ</h3>
						<a href="https://nobuhiroharada.com" target="_blank" rel="noopener noreferrer">
							<img className='w-full cursor-pointer' src={sampleAppLPImage} alt='Blog' />
						</a>
						<p className="dark:text-gray-200">Bootstrap4を使用</p>
					</div>
				</div>
			</div>
			<Sidebar />
		</Layout>
	)
}

export default PortfolioPage