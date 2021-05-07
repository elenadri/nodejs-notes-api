import express from 'express';
import morgan from 'morgan';
import notesRoutes from './routes/notes.routes'

const app = express();
app.use(morgan('dev'));



app.use('/notes',notesRoutes);

export default app;