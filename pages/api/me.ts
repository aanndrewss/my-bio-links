import { NextApiRequest, NextApiResponse } from 'next'
import { IMe } from '../../app/interfaces/IMe'

const me = {
	siteName: 'My bio',
	avatar: '/avatar.jpg',
	description:
		'<p>My name is Andrew.</p>' +
		'<p>18 y.o.</p>' +
		'<p>Student.</p>' +
		'<p>Want to be a frontend React developer.</p>'
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IMe>
) {
	res.status(200).json(me)
}