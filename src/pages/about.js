import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Sidebar from '../components/sidebar'

const AboutPage = () => {
	return (
		<Layout>
			<Head title="About" description="About page"/>
			<div>
				<h3>スキル</h3>
				<p>・言語：PHP, JavaScript</p>
				<p>・フレームワーク：Laravel, Zend Framework, CakePHP</p>
				<p>・データベース：MySQL, PostgreSQL</p>
				<p>・OS：macOS, Linux, Windows</p>
				<p>・その他：Git</p>
				<h3>資格</h3>
				<table>
					<thead>
						<tr>
							<th className='w-1/4 p-2'>年月</th>
							<th className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>内容</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='w-1/4 p-2'>2008年8月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>TOEIC 800</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2010年8月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>ITパスポート</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2015年6月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>Oracle Certified Java Programmer, Bronze SE 7</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2021年4月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>基本情報技術者</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Sidebar />
		</Layout>
	)
}

export default AboutPage