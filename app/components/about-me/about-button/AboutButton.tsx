import React, { FC } from 'react'
import cn from 'classnames'
import { useOutside } from '../../../hooks/useOutside'
import styles from './AboutButton.module.scss'
import parse from 'html-react-parser'

interface IPropsAboutBtn {
	description: string
}

const AboutButton: FC<IPropsAboutBtn> = ({ description }) => {
	const { isShow, setIsShow, ref } = useOutside(false)

	return (
		<div className={styles.parent} ref={ref}>
			<button onClick={() => setIsShow(!isShow)} className={cn({
				[styles.active]: isShow
			})}>
				<span>About me</span>
			</button>
			{isShow && <article>{parse(description)}</article>}
		</div>
	)
}

export default AboutButton