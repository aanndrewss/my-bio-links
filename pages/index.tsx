import Head from 'next/head'
import Image from 'next/image'
import styles from '../app/components/home/Home.module.scss'
import Home from '../app/components/home/Home'
import axios from 'axios'
import { API_URL } from '../app/utilities/constants'
import { IData } from '../app/interfaces/IData'
import { useQuery } from 'react-query'

export default function HomePage(props: IData) {

	return (
		<div>
			<Home {...props}/>
		</div>
	)
}

export const getStaticProps = async () => {
	try {
		const links = await axios.get(`${API_URL}/links`).then(({data}) => data)
		const me = await axios.get(`${API_URL}/me`).then(({data}) => data)


		if (!links && !me) {
			return {
				notFound: true,
			}
		}

		return {
			props: {
				links: links,
				me: me
			},
			revalidate: 60
		}
	} catch {
		return {
			props: {
				links: null,
				me: null
			}
		}
	}


}
