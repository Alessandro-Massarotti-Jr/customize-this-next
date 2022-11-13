import type { NextApiRequest, NextApiResponse } from 'next'

interface MessageReturnInterface {
    error: boolean;
    message: string | null;
    developerMessage: string | null;
    data: object[] | object | null;
    statusHTTP: number;
}

export class ReturnAPI {

    public static messageReturn(res: NextApiResponse, data: MessageReturnInterface) {

        return res.status(data.statusHTTP).json(data);
    }

}