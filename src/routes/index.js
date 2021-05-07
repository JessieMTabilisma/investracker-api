import express from 'express';
import { indexPage, stocksPage, addStock } from '../controllers';
// middleware

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/stocks', stocksPage);
indexRouter.post('/stocks', addStock);

export default indexRouter;
