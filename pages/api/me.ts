import { NextApiRequest, NextApiResponse } from 'next'
import { IMe } from '../../app/interfaces/IMe'

const me = {
	siteName: 'My bio',
	avatar: '/avatar.jpg',
	description:
		'<p>Hi there, I am Andrew.</p>' +
		'<p>Computer science student from Kazan 🇷🇺</p>' +
		'<p>19 y.o.</p>' +
		'<p>I am interested in web development and would like to become a web developer.</p>'
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IMe>
) {
	res.status(200).json(me)
}