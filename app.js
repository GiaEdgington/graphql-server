const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const cors= require('cors');

const app = express();

mongoose.connect("mongodb+srv://giaedgington:.Zaphod0216@clustergraphql-aaxnd.azure.mongodb.net/test?retryWrites=true&w=majority");

mongoose.connection.once('open', () => {
    console.log('connected to database');
});
//allow cross-origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=> {
    console.log('now listening for requests on port 4000');
});

