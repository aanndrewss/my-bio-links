import React, { FC } from 'react'
import styles from './Grid.module.scss'
import { ILinks } from '../../../interfaces/ILinks'
import AnimateBlock from '../../ui/animate-block/AnimateBlock'

interface IGridProps {
	item: ILinks
}

const GridItem: FC<IGridProps> = ({ item }) => {
	return (
		<a href={item.link} rel={'noreferrer'} target={'_blank'} className={styles.item}>
			<div className={styles.gradient}
				style={{
					backgroundImage: `linear-gradient(to right, ${item.gradient.from} 0%, ${item.gradient.to} 51%, ${item.gradient.from} 100%)`
				}}
			>
				<img src={item.iconPath} alt='' />
			</div>
			<div className={styles.title}>{item.title}</div>
			{item.isImportant && <AnimateBlock />}
		</a>
	)
}

export default GridItem
