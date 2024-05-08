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

//Get all heróis by id
app.get("/herois/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query("SELECT * FROM herois WHERE id = $1", [id]);
  res.json(rows);
});

//Create herói
app.post("/herois", async (req, res) => {
  const { nome_herois, poder, hp, nivel } = req.body;
  await pool.query(
    "INSERT INTO herois (nome_herois, poder, hp, nivel) VALUES ($1, $2, $3, $4)",
    [nome_herois, poder, hp, nivel]
  );
  res.json({ message: "Herói criado com sucesso!" });
});

//Update herói
app.put("/herois/:id", async (req, res) => {
  const { id } = req.params;
  const { nome_herois, poder, hp, nivel } = req.body;
  await pool.query(
    "UPDATE herois SET nome_herois = $1, poder = $2, hp = $3, nivel = $4 WHERE id = $5",
    [nome_herois, poder, hp, nivel, id]
  );
  res.json({ message: "Herói atualizado com sucesso!" });
});
