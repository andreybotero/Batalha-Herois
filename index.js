const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 6000;

// Configuração do banco de dados
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "banco_herois",
  password: "ds564",
  port: 5432,
});

app.use(express.json());

//Get all heróis
app.get("/herois", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM herois");
  res.json(rows);
});

