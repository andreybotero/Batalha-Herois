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
  try {
    res.json(rows);
  } catch (err) {
    console.error("Não foi possível retornar os heróis!");
  }
});

//Get heróis by id
app.get("/herois/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query("SELECT * FROM herois WHERE id = $1", [id]);
  try {
    res.json(rows);
  } catch (err) {
    console.error("Não foi possível retornar o herói!");
  }
});

//Create herói
app.post("/herois", async (req, res) => {
  const { nome_heroi, poder, hp, nivel } = req.body;
  await pool.query(
    "INSERT INTO herois (nome_heroi, poder, hp, nivel) VALUES ($1, $2, $3, $4)",
    [nome_heroi, poder, hp, nivel]
  );
  try {
    res.json({
      message: "Herói criado com sucesso!",
      body: {
        heroi: { nome_heroi, poder, hp, nivel },
      },
    });
  } catch (err) {
    console.error("Não foi possível criar o herói!");
  }
});

//Update herói
app.put("/herois/:id", async (req, res) => {
  const { id } = req.params;
  const { nome_heroi, poder, hp, nivel } = req.body;
  await pool.query(
    "UPDATE herois SET nome_heroi = $1, poder = $2, hp = $3, nivel = $4 WHERE id = $5",
    [nome_heroi, poder, hp, nivel, id]
  );
  try {
    res.json({
      message: "Herói atualizado com sucesso!",
      body: {
        heroi: { nome_heroi, poder, hp, nivel },
      },
    });
  } catch (err) {
    console.error("Não foi possível atualizar o herói!");
  }
});

//Delete herói
app.delete("/herois/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM herois WHERE id = $1", [id]);
  try {
    res.json({
      message: "Herói deletado com sucesso!",
    });
  } catch (err) {
    console.error("Não foi possível deletar o herói!");
  }
});

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
