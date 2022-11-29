import React from 'react'
import styles from './EmailButton.module.scss'
import Image from 'next/image'
import { APP_URL } from '../../../../utilities/constants'

const EmailButton = () => {
	return (
		<div className={styles.button}>
			<a
				href='mailto:andreyshihalev099@gmail.com'
				target={'_blank'}
				rel={'noreferrer'}
				title={'andreyshihalev099@gmail.com'}
			>
				<span>
					<Image src={`${APP_URL}/icons/mail.svg`} alt={''} width={18} height={18}/>
				</span>
				<span>Email</span>
			</a>
		</div>
	)
}

export default EmailButton