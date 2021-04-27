import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Sidebar from '../components/sidebar'

const AboutPage = () => {
	return (
		<Layout>
			<Head title="About" description="About page"/>
			<div>
				<h3>自己紹介</h3>
				<p>はじめまして、原田順啓(はらだのぶひろ)と申します。</p>
				<p>1982年生まれ</p>
				<h3>スキル</h3>
					<p>・言語：PHP, JavaScript, Swift</p>
					<p>・フレームワーク：Laravel, Zend Framework</p>
					<p>・データベース：MySQL, PostgreSQL</p>
					<p>・OS：macOS, Linux, Windows</p>
					<p>・その他：Git</p>
				<h3>経歴</h3>
				<table>
					<thead>
						<tr>
							<th className='w-1/4 p-2'>年月</th>
							<th className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>内容</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='w-1/4 p-2'>2001年3月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>京都府東山高校卒業</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2002年3月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>代々木ゼミナール京都校卒業</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2006年3月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>関西外国語大学英米語学科卒業</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2006年8月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>派遣事務の仕事に就くと同時に大阪府大阪市旭区千林大宮に移住</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2008年9月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>リーマンショックの影響で派遣切りにあう</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2008年10月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>大阪府大阪市淀川区十三に移住</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2011年8月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>埼玉県所沢市に住んでいた弟の元に転がり込む</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2011年10月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>東京都新宿区高田馬場に移住</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2011年11月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>派遣事務の仕事に就く</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2014年1月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>職業訓練校でAndroidアプリ開発を受講する</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2014年9月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>SES系の会社にアルバイト時給1000円で働き始める</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2015年12月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>派遣プログラマーとして働き始める</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2020年2月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>フリーランスとして働き始める</td>
						</tr>
						<tr>
							<td className='w-1/4 p-2'>2020年7月</td>
							<td className='w-3/4 sm:w-full' style={{borderLeft: '1px solid #9ca3af'}}>東京都目黒区祐天寺に移住</td>
						</tr>
					</tbody>
				</table>
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