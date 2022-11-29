import React, { FC } from 'react'
import { ILinks } from '../../../interfaces/ILinks'
import GridItem from './GridItem'
import styles from './Grid.module.scss'

interface IGridProps {
	links: ILinks[]
}

const Grid: FC<IGridProps> = ({links}) => {
	return (
		<div className={styles.grid}>
			{links.map(link => <GridItem key={link.id} item={link}/>)}
		</div>
	)
}

export default Grid
