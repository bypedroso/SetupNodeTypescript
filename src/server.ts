import express, { response, request } from 'express';

const app =  express();

app.get('/', (request, response) => {
    return response.json({message:"hello World"});
});


app.listen(3333);