import React, { FC } from 'react'
import { IMe } from '../../../interfaces/IMe'
import AboutButton from './about-button/AboutButton'
import styles from './AboutMe.module.scss'
import Image from 'next/image'
import { APP_URL } from '../../../utilities/constants'
import EmailButton from './email-button/EmailButton'

interface IPropsMe {
	me: IMe
}

const AboutMe: FC<IPropsMe> = ({ me }) => {
	return <div className={styles.me}>
		<div className={styles.imgWrapper}>
			<Image className={styles.image} src={`/images${me.avatar}`} alt={me.siteName} width={190} height={190} quality={100} />
		</div>
		<div className={styles.heading}>
			<span>Andrew</span>
		</div>
		<EmailButton />
		<AboutButton description={me.description} />
	</div>

}

export default AboutMe

