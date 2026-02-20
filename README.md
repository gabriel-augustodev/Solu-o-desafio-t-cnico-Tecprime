# 🚀 Solução -- Desafio Técnico Tecprime (Full Stack)

## 👨‍💻 Desenvolvedor(a) Full Stack

Este projeto foi desenvolvido como solução para o desafio técnico
proposto pela Tecprime, com foco em:

- Integração com API externa
- Estruturação de backend organizada
- Persistência em banco relacional
- Frontend funcional integrado
- Clareza arquitetural e boas decisões técnicas

O objetivo principal foi demonstrar organização, separação de
responsabilidades e integração robusta entre camadas.

---

# 🏗 Arquitetura Geral

O sistema é dividido em duas aplicações:

    /backend
    /frontend

- Backend responsável por regras de negócio, integração externa e
  persistência
- Frontend responsável pela experiência do usuário e consumo da API

---

# 🔹 BACKEND

## 📌 Tecnologias Utilizadas

- Node.js
- Express
- Banco relacional (ex: PostgreSQL)
- ORM / Query Builder (caso utilizado)
- Axios para consumo de API externa

---

## 🌐 Integração com API Externa

API consumida: - https://dummyjson.com/products

Endpoint criado:

### GET /products

Fluxo:

1.  Backend consome API pública
2.  Normaliza os dados
3.  Retorna apenas:

- id
- nome
- descricao
- preco (convertido para R\$)
- estoque (simulado)
- imagem

Essa abordagem evita acoplamento direto do frontend à API externa.

---

## 🧾 Pedidos

### POST /orders

Recebe:

- nome
- email
- endereco
- forma_pagamento (Pix, Cartão ou Boleto)
- lista de produtos com quantidade

### Validações realizadas:

- Campos obrigatórios
- Lista de produtos não vazia
- Validação de estoque
- Forma de pagamento válida

### Persistência

Os dados são registrados nas tabelas:

- orders
- order_items

O endpoint retorna:

- número do pedido gerado

---

### GET /orders/:id

Permite consultar um pedido previamente salvo.

---

# 🗄 Banco de Dados

## Estrutura

### orders

- id (PK)
- nome
- email
- endereco
- forma_pagamento
- total
- created_at

### order_items

- id (PK)
- order_id (FK)
- product_id
- nome_produto
- preco_unitario
- quantidade

Relacionamento:

orders (1) → (N) order_items

A modelagem foi pensada para manter integridade relacional e
rastreabilidade histórica.

---

# 🔹 FRONTEND

## 📌 Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Context API
- React Router

---

## 📄 Funcionalidades

- Página de listagem de produtos
- Carrinho controlado em memória
- Aumento/diminuição de quantidade
- Remoção de item
- Tela de checkout
- Envio de pedido para backend
- Tela de confirmação com número do pedido

---

# 🔄 Fluxo Completo

1.  Frontend chama GET /products
2.  Backend consome API externa e normaliza
3.  Usuário adiciona produtos ao carrinho
4.  Usuário finaliza compra
5.  Frontend envia POST /orders
6.  Backend valida e persiste no banco
7.  Retorna número do pedido
8.  Frontend exibe tela de sucesso

---

# ▶ Como Executar

## Backend

```bash
cd backend
npm install
npm run dev
```

Servidor padrão:

    http://localhost:3000

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicação disponível em:

    http://localhost:5173

---

# 🧠 Principais Decisões Técnicas

- Separação clara entre camadas (controller, service, repository)
- Normalização da API externa no backend
- Frontend desacoplado da API pública
- Context API para gerenciamento de estado
- Banco relacional com relacionamento bem definido
- Validação de dados antes de persistência
- Estrutura preparada para escalar

---

# 🛡 Tratamento de Erros

- Retornos padronizados
- Validação de payload
- Controle de estoque
- Respostas HTTP adequadas

---

# ⭐ Diferenciais Aplicados (se implementados)

- Organização em camadas
- Estrutura escalável
- Tipagem forte com TypeScript
- Código limpo e legível

---

# 🚀 Melhorias Futuras

Se houvesse mais tempo, seriam implementados:

- Autenticação com JWT
- Testes unitários e de integração
- Docker / Docker Compose
- Logs estruturados
- Controle transacional de estoque
- Persistência do carrinho
- Paginação de produtos

---

# 📊 Critérios Atendidos

✔ Integração com API externa\
✔ Normalização de dados\
✔ Persistência relacional\
✔ Organização backend\
✔ Frontend funcional e integrado\
✔ README claro e explicativo

---

# ✅ Conclusão

A solução prioriza:

- Organização
- Clareza arquitetural
- Separação de responsabilidades
- Integração robusta
- Boas práticas de desenvolvimento

O foco principal foi demonstrar maturidade técnica e capacidade de
estruturar uma aplicação Full Stack limpa e escalável.
