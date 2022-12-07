// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserController } from '../../../app/http/controllers/UserController'
import { ReturnAPI } from '../../../app/resources/ReturnAPI'


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        return UserController.store(req, res);
    }


    return ReturnAPI.messageReturn(res, { error: true, message: "Rota não suporta este método", developerMessage: "method not allowed", data: null, statusHTTP: 405 })
}
