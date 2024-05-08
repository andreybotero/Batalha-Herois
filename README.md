# Sistema de Gerenciamento de Heróis

![Cabeçalho](https://www.mangotree.com.br/wp-content/uploads/2022/02/personagens-da-marvel-wallpaper-1238x619.jpg)

## Introdução

Este projeto consiste em um sistema de gerenciamento de heróis desenvolvido em Node.js com Express e PostgreSQL. O objetivo é fornecer uma API para realizar operações CRUD (Create, Read, Update, Delete) para manipular informações sobre heróis, além de oferecer funcionalidades adicionais, como batalhas entre heróis.

# Funcionalidades do Projeto: Sistema de Gerenciamento de Heróis

1. **CRUD de Heróis**

   - **Criação de Heróis:** Permite criar novos heróis com nome, poder, nível e pontos de vida (HP).
   - **Recuperação de Heróis:** Recupera todos os heróis cadastrados no sistema.
   - **Atualização de Heróis:** Permite atualizar as informações de um herói existente.
   - **Exclusão de Heróis:** Remove um herói do sistema.
   - **Filtro por Nome de Herói:** Possibilita filtrar os heróis pelo nome.

2. **Batalhas entre Heróis**

   - **Simulação de Batalha:** Implementa uma rota para simular uma batalha entre dois heróis, com lógica de batalha embutida.
   - **Registro de Resultados:** Registra o resultado da batalha no banco de dados.
   - **Filtro por Nome de Herói na Batalha:** Permite filtrar as batalhas pelo nome dos heróis envolvidos.

3. **Banco de Dados**

   - **Tabela `heroes`:** Armazena os dados dos heróis, incluindo id, nome, poder, nível e pontos de vida (HP).
   - **Tabela `battles`:** Registra o histórico de batalhas entre os heróis, incluindo id da batalha, id dos heróis envolvidos e id do herói vencedor.

4. **Executando o Projeto**

   - O projeto requer Node.js, Express e PostgreSQL.
   - As configurações do banco de dados devem ser fornecidas corretamente.
   - As rotas são configuradas para executar operações CRUD e simulação de batalhas.
   - O servidor é iniciado na porta especificada.

5. **Contribuição**

   - Os contribuidores são incentivados a fazer fork do repositório, implementar melhorias ou correções e enviar pull requests para revisão.

6. **Ajuda Adicional**
   - Em caso de dúvidas ou necessidade de assistência, os usuários podem entrar em contato para obter suporte.
