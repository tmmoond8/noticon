import express from 'express';
import TestrController from './test.controller';
import {
  testMiddleware
} from '../middlewares';

const test = express.Router();

test.get('/', testMiddleware, TestrController.getTest);
test.post('/', testMiddleware, TestrController.postTest);

export default test;