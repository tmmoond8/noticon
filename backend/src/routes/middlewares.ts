import express from 'express';

export const testMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(req.method);

  if (true) {
    return next();
  }

  const err: any = new Error('Not logged in');
  err.status = 404;
  return next(err);
};