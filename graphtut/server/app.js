const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose=require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
const mongourl = '<mongodb_url>'
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
