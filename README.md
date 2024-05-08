![Cabeçalho](https://www.mangotree.com.br/wp-content/uploads/2022/02/personagens-da-marvel-wallpaper-1238x619.jpg)

# Sistema de Gerenciamento de Heróis

## Introdução

Este projeto consiste em um sistema de gerenciamento de heróis desenvolvido em Node.js com Express e PostgreSQL. O objetivo é fornecer uma API para realizar operações CRUD (Create, Read, Update, Delete) para manipular informações sobre heróis, além de oferecer funcionalidades adicionais, como batalhas entre heróis.

## Funcionalidades Esperadas

### CRUD de Heróis

- **Criação de Heróis:** Permite criar novos heróis com nome, poder, nível e pontos de vida (HP).
- **Recuperação de Heróis:** Recupera todos os heróis cadastrados no sistema.
- **Atualização de Heróis:** Permite atualizar as informações de um herói existente.
- **Exclusão de Heróis:** Remove um herói do sistema.
- **Filtro por Nome de Herói:** Possibilita filtrar os heróis pelo nome.

### Batalhas entre Heróis

- **Simulação de Batalha:** Implementa uma rota para simular uma batalha entre dois heróis, com lógica de batalha embutida.
- **Registro de Resultados:** Registra o resultado da batalha no banco de dados.
- **Filtro por Nome de Herói na Batalha:** Permite filtrar as batalhas pelo nome dos heróis envolvidos.

## Banco de Dados

O banco de dados utilizado neste projeto segue uma estrutura simples com uma tabela principal para armazenar os dados dos heróis.

### Tabela `heroes`

- **id:** Identificador único do herói (chave primária).
- **name:** Nome do herói.
- **power:** Poder ou habilidade do herói.
- **level:** Nível do herói.
- **hp:** Pontos de vida (HP) do herói.

## Executando o Projeto

Para configurar e executar o sistema, siga as instruções detalhadas no arquivo [README](https://github.com/thiago-rferreira/atividade-herois-batalha) do repositório oficial do projeto no GitHub.

## Contribuição

Se desejar contribuir para este projeto, siga as instruções no arquivo README do repositório oficial. Você pode fazer um fork do repositório, implementar suas melhorias ou correções e, em seguida, enviar um pull request para revisão.

## Ajuda Adicional

Se precisar de assistência adicional ou tiver alguma dúvida, não hesite em entrar em contato. Estou aqui para ajudar!
