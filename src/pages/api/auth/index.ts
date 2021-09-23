import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse)=> {
    const users = [
        {id: 1, name: 'Wagner' },
        {id: 2, name: 'Diego' },
        {id: 3, name: 'Ana' },
    ]

    return res.json(users);
}