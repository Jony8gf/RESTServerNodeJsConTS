import { Request, Response } from "express";

export const getUsuarios = async (req: Request, res: Response) => {
    res.json({
        msg: 'GetUsuarios'
    })
}

export const getUsuario = async (req: Request, res: Response) => {

    const {id} = req.params;

    res.json({
        msg: 'GetUsuario',
        id
    })
}

export const postUsuario = async (req: Request, res: Response) => {

    const {body} = req;

    res.json({
        msg: 'PostUsuario',
        body
    })
}

export const putUsuario = async (req: Request, res: Response) => {

    const {id} = req.params;
    const {body} = req;

    res.json({
        msg: 'PutUsuario',
        id,
        body
    })
}

export const deleteUsuario = async (req: Request, res: Response) => {

    const {id} = req.params;

    res.json({
        msg: 'DeleteUsuario',
        id
    })
}


