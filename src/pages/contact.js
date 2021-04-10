import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
	return (
		<Layout>
			<Head title="Contact" description="Contact page"/>
			<div className='w-3/4 sm:w-full'>
				<h2>お問い合わせ</h2>
				
				Twitter: <a href="https://twitter.com/nobuhiro_harada" rel="noreferrer noopener" target="_blank">@nobuhiro_harada</a>
			</div>
		</Layout>
	)
}

export default ContactPage