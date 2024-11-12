const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const connectDB = require("./db");
const cors = require("cors");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware, routes, etc.
app.use(express.json());
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Your routes go here
// app.get('/', (req, res) => res.send('API is running...'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
