// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ReturnAPI } from '../../app/resources/ReturnAPI'

type Data = {
  customize_this_next: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return ReturnAPI.messageReturn(res, { error: false, message: "Customize This next running", developerMessage: "Customize This next running", data: null, statusHTTP: 200 })
}
