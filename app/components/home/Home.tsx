import React, { FC } from 'react'
import styles from './Home.module.scss'
import { IData } from '../../interfaces/IData'

const Home: FC<IData> = ({links, me}) => {



	return (
		<section className={styles.section}>
			<div className={styles.container}>
				Home
				{me.siteName}
			</div>
		</section>
	)
}

export default Home
