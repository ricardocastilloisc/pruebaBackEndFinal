const dna = require('./routes/dna')
const express = require("express");
const cors = require('cors')

const sequelize = require("./config/db");


sequelize.sync().then(() => console.log("database connected successfully 🏦"));

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/', dna);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app;