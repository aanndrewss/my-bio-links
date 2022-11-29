import React, { FC } from 'react'
import Head from 'next/head'

interface IMetaProps {
	title: string
}

const MetaTitle: FC<IMetaProps> = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel='shortcut icon' href='/favicon1.ico' />
		</Head>
	)
}

export default MetaTitle
