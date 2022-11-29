import React, { FC } from 'react'
import styles from './Grid.module.scss'
import { ILinks } from '../../../interfaces/ILinks'

interface IGridProps {
	item: ILinks
}

const GridItem: FC<IGridProps> = ({ item }) => {
	return (
		<a href={item.link} rel={'noreferrer'} target={'_blank'} className={styles.item}>
			<div className={styles.gradient}>
				<img src={item.iconPath} alt='' />
			</div>
			<div className={styles.title}>{item.title}</div>
		</a>
	)
}

export default GridItem
