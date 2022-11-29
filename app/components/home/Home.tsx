import React, { FC } from 'react'
import styles from './Home.module.scss'
import { IData } from '../../interfaces/IData'
import AboutMe from './about-me/AboutMe'
import Grid from './grid/Grid'
import MetaTitle from '../ui/MetaTitle'

const Home: FC<IData> = ({links, me}) => {

	if (!links && !me) {
		return null
	}

	return (
		<section className={styles.section}>
			<MetaTitle title={'Andrew Shihalev | My portfolio'} />
			<div className={styles.container}>
				<AboutMe me={me}/>
				<Grid links={links} />
			</div>
		</section>
	)
}

export default Home
