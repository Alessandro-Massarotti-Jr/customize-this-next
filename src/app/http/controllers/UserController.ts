
import { PrismaClient } from "@prisma/client"

import type { NextApiRequest, NextApiResponse } from 'next'
import { ReturnAPI } from "../../resources/ReturnAPI";

const prisma = new PrismaClient();

export class UserController {

    public static async store(req: NextApiRequest, res: NextApiResponse) {

        const newUser = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        const theme = await prisma.theme.create({
            data: {
                user_id: newUser.id
            },
            select: {
                id: true,
                primary: true,
                secondary: true,
                terciary: true,
                text: true,
                acents: true,
                createdAt: true,
                updatedAt: true,
                user_id: true
            }
        });

        return ReturnAPI.messageReturn(res, { error: true, message: "Usuario criado com sucesso", developerMessage: "User created", data: null, statusHTTP: 201 });

    }

}