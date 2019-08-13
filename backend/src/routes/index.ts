import express from 'express';
import test from './test';

const routes = express.Router();

routes.use('/test', test);

export default routes;