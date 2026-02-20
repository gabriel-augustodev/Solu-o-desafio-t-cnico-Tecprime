import { Request, Response, NextFunction } from 'express'

export function errorMiddleware(//Middleware para lidar com erros
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(error)

    return res.status(500).json({
        message: 'Erro interno do servidor'
    })
}