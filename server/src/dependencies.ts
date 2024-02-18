import { NextFunction, Request, Response } from "express";

const tokens: string[] = ["123"];
export const authMiddleWare = (req: Request, res: Response, next: NextFunction) => {
     const authHeader = req.headers.authorization;
     if (!authHeader) {
       return res.status(401).send('Unauthorized');
     }
     const decoded = verifyToken(authHeader);
     if (!decoded) {
       return res.status(401).send('Invalid token');
     }
     next()
}

const verifyToken = (authHeader: string) => {
     if (authHeader.startsWith("Bearer")) return tokens.includes(authHeader.split(' ').pop()!);
     return false;
}