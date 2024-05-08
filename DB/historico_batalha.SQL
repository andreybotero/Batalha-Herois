CREATE TABLE historico_batalha (
  id SERIAL PRIMARY KEY,
  id_vencedor INT NOT NULL,
  id_perdedor INT NOT NULL,
  data DATE NOT NULL,
  FOREIGN KEY (id_vencedor) REFERENCES herois(id),
  FOREIGN KEY (id_perdedor) REFERENCES herois(id)
);

SELECT
  hero.name AS vencedor,
  hero2.name AS perdedor,
  h.data
FROM
  historico_batalha h
  JOIN herois hero ON hero.id = h.id_vencedor
  JOIN herois hero2 ON hero2.id = h.id_perdedorS;