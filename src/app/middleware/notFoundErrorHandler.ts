import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

const notFoundErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
};

export default notFoundErrorHandler;
