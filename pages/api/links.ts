import type { NextApiRequest, NextApiResponse } from 'next'
import { ILinks } from '../../app/interfaces/ILinks'

const links = [
	{
		id: 1,
		iconPath: '/icons/gh-logo.svg',
		link: 'https://github.com/aanndrewss',
		title: 'GitHub',
		isImportant: true,
		gradient: {
			from: '#A020F0',
			to: '#AB47BC'
		}
	},
	{
		id: 2,
		iconPath: '/icons/tg-logo.svg',
		link: 'https://t.me/andrxw66',
		title: 'Telegram',
		isImportant: false,
		gradient: {
			from: '#691883',
			to: '#AB47BC'
		}
	},
	{
		id: 3,
		iconPath: '/icons/vk-logo.svg',
		link: 'https://vk.com/andrxw66',
		title: 'VK',
		isImportant: false,
		gradient: {
			from: '#A020F0',
			to: '#AB47BC'
		}
	},
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ILinks[]>
) {
	res.status(200).json(links)
}