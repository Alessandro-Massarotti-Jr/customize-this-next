
import { PrismaClient } from "@prisma/client"

import type { NextApiRequest, NextApiResponse } from 'next'
import { ReturnAPI } from "../../resources/ReturnAPI";

const prisma = new PrismaClient();

const user = prisma.user;

export class UserController{

    public async store(req: NextApiRequest,res: NextApiResponse){

    }

}