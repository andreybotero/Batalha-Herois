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
  if (nome_heroi == "" || poder == "" || hp == "" || nivel == "") {
    return res.status(400).send("Por favor, preencha todos os campos!");
  }

  try {
    if (id == "") {
      return res.status(404).send("ID do herói não encontrado!");
    }
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

//Batalha de Heróis

app.get("/batalha/:id/:id2", async (req, res) => {
  const { id, id2 } = req.params;
  try {
    const { rows } = await pool.query(
      "SELECT * FROM herois WHERE id = $1 OR id = $2",
      [id, id2]
    );
    const heroi1 = rows[0];
    const heroi2 = rows[1];
    let vencedor = null;
    let perdedor = null;

    while (heroi1.hp > 0 && heroi2.hp > 0) {
      heroi1.hp -= heroi2.poder;
      heroi2.hp -= heroi1.poder;
    }
    if (heroi1.hp > heroi2.hp) {
      vencedor = heroi1;
      perdedor = heroi2;
    } else {
      vencedor = heroi2;
      perdedor = heroi1;
    }
    addHistorico(vencedor.id, perdedor.id);
    res.json({
      message: "Batalha finalizada!",
      body: {
        vencedor,
        perdedor,
      },
    });
  } catch (err) {
    console.error("Não foi possível realizar a batalha!");
  }
});

//Histórico de Batalhas
const addHistorico = async (vencedor, perdedor) => {
  try {
    const dataAtual = new Date().toISOString().slice(0, 10); // Obtém a data atual no formato "YYYY-MM-DD"

    // Insere o registro na tabela historico_batalha
    const query = `
      INSERT INTO historico_batalha (id_heroi, id_vilao, data)
      VALUES ($1, $2, $3)
    `;
    await pool.query(query, [vencedor.id, perdedor.id, dataAtual]);

    console.log("Registro de batalha adicionado ao histórico com sucesso!");
  } catch (err) {
    console.error("Erro ao adicionar registro ao histórico de batalha:", err);
  }
};

app.get("/historico", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT  hero.nome_heroi AS vencedor,  hero2.nome_heroi AS perdedor,  h.data FROM historico_batalha h JOIN herois hero ON hero.id = h.id_vencedor JOIN herois hero2 ON hero2.id = h.id_perdedor;"
    );
    res.json(rows);
  } catch (err) {
    console.error("Erro ao retornar o histórico de batalhas:", err);
  }
});

//Iniciar Servidor
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
