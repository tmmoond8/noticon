import express from 'express';

class TestController {
  public getTest = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.json({ ok: true, message: 'getTest' });
  }

  public postTest = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.json({ ok: true, message: 'postTest' });
  }
};

export default new TestController();