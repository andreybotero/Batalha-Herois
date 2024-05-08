-- Banco de dados de heróis, com nome_herois, poder, nivel, hp

CREATE DATABASE banco_herois;

CREATE TABLE  herois (
    id SERIAL PRIMARY KEY,
    nome_heroi VARCHAR(100) NOT NULL,
    poder VARCHAR(100) NOT NULL,
    nivel INT NOT NULL,
    hp INT NOT NULL
);
