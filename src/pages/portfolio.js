import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Sidebar from '../components/sidebar'
import PortfolioCard from '../components/portfolioCard'
import blogImage from '../images/blog.png'
import portfolioImage from '../images/portfolio.png'
import sampleAppLPImage from '../images/sample-app-lp.png'

const PortfolioPage = () => {

	return (
		<Layout>
			<Head title='Portfolio' description='Portfolio page'/>
			<div className='w-3/4 sm:w-full'>
				<div className='grid grid-cols-12 gap-4'>
					<PortfolioCard
						title='ブログ'
						url='https://nobuhiroharada.com'
						image={blogImage}
						description='GatsbyJS, TailwindCSS, Netlifyを使用'
					/>
					<PortfolioCard
						title='ポートフォリオサイト'
						url='https://nobuhiroharada.github.io/portfolio-3/'
						image={portfolioImage}
						description='React, GitHub Pagesを使用'
					/>
					<PortfolioCard
						title='サンプルアプリランディングページ'
						url='https://nobuhiroharada.github.io/sample-app-lp/'
						image={sampleAppLPImage}
						description='Bootstrap4, GitHub Pagesを使用'
					/>
				</div>
			</div>
			<Sidebar />
		</Layout>
	)
}

export default PortfolioPage