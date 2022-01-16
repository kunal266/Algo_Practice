const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose=require('mongoose');
const app = express();
const mongourl = 'mongodb+srv://supa:supa@cluster0.fqzv9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongourl);
mongoose.connection.once('open',()=>{
    console.log("connected to database")
})
app.use('/graphql',graphqlHTTP({
schema,
graphiql:true
}));
app.listen(4000,()=>{
    console.log("listening on port 4000");
})