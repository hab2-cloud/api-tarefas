# 📝 API Tarefas

Projeto fullstack de lista de tarefas desenvolvido como trabalho do 1º bimestre. Combina os conceitos de versionamento com Git/GitHub e desenvolvimento de uma API REST com Node.js e Express, com frontend em HTML, CSS e JavaScript puro.

---

## 🎯 Objetivos

### Trabalho 01 — Git e GitHub
- Criar e gerenciar repositórios no GitHub
- Realizar commits com mensagens descritivas
- Criar branches para funcionalidades separadas
- Realizar merges entre branches

### Trabalho 02 — API REST com Node.js
- Entender os conceitos de servidores web e de aplicação
- Implementar um servidor com Express
- Desenvolver uma API REST com as operações CRUD
- Conectar um frontend ao backend via requisições HTTP

---

## 🛠️ Tecnologias utilizadas

| Camada | Tecnologia |
|---|---|
| Backend | Node.js + Express |
| Banco de dados | SQLite + Prisma ORM |
| Frontend | HTML + CSS + JavaScript puro |
| Versionamento | Git + GitHub |

---

## 📁 Estrutura do projeto

```
api-tarefas/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma   # modelo do banco de dados
│   │   └── dev.db          # arquivo do banco SQLite
│   ├── index.js            # servidor Express com as rotas
│   └── package.json
├── frontend/
│   ├── index.html          # estrutura da página
│   ├── style.css           # estilos
│   └── app.js              # requisições ao backend
├── .gitignore
└── README.md
```

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org) instalado
- [Git](https://git-scm.com) instalado

### 1. Clone o repositório
```bash
git clone https://github.com/SEU_USUARIO/api-tarefas.git
cd api-tarefas
```

### 2. Instale as dependências do backend
```bash
cd backend
npm install
```

### 3. Configure o banco de dados
```bash
npx prisma migrate dev --name init
```

### 4. Inicie o servidor
```bash
node index.js
```

O servidor estará rodando em **http://localhost:3000**

### 5. Abra o frontend

Abra o arquivo `frontend/index.html` diretamente no navegador.

---

## 🔌 Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/tarefas` | Retorna todas as tarefas |
| `POST` | `/tarefas` | Cria uma nova tarefa |
| `PUT` | `/tarefas/:id` | Alterna tarefa entre concluída e não concluída |
| `DELETE` | `/tarefas/:id` | Remove uma tarefa |

### Exemplo de requisição POST

```json
{
  "titulo": "Estudar para a prova"
}
```

### Exemplo de resposta

```json
{
  "id": 1,
  "titulo": "Estudar para a prova",
  "concluida": false
}
```

---

## 🌿 Branches do projeto

| Branch | Descrição |
|---|---|
| `main` | Versão final estável |
| `feature/backend` | Desenvolvimento do servidor Express |
| `feature/frontend` | Desenvolvimento da interface HTML |
| `feature/banco-de-dados` | Integração com Prisma + SQLite |

---

## ✨ Funcionalidades

- ✅ Adicionar novas tarefas
- ✅ Listar todas as tarefas
- ✅ Marcar tarefa como concluída/não concluída
- ✅ Deletar tarefas
- ✅ Persistência dos dados com banco de dados SQLite