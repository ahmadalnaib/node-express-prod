import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';



// Routes files
import products from './routes/products';

// load environment variables
dotenv.config({path: './config/config.env'});

const app = express();


// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}




// mount routers
app.use('/api/v1/products',products);



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
