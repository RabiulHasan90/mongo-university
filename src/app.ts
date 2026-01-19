import express, { Application, Request, Response } from 'express';
import cors from 'cors';
// import { StudentRouter } from './app/modules/student/student.route';
//import { UserRoutes } from './app/modules/user/user.route';
//import { StudentRouter } from './app/modules/student/student.route';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';


const app: Application = express();

// middleware
app.use(express.json());
app.use(cors());
//student route
// app.use('/api/v1/students', UserRoutes);
// app.use('/api/v1/students', StudentRouter);
app.use('/api/v1', router);


// root route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World 🚀');
});
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
