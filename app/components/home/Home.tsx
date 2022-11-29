import React, { FC } from 'react'
import styles from './Home.module.scss'
import { IData } from '../../interfaces/IData'
import AboutMe from '../about-me/AboutMe'

const Home: FC<IData> = ({links, me}) => {

	if (!links && !me) {
		return null
	}

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<AboutMe me={me}/>
			</div>
		</section>
	)
}

export default Home
