const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())          // permite o frontend se comunicar com o backend
app.use(express.json())  // permite receber dados em formato JSON

// Array que vai guardar as tarefas na memória
let tarefas = []
let proximoId = 1

// GET /tarefas → retorna todas as tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas)
})

// POST /tarefas → cria uma nova tarefa
app.post('/tarefas', (req, res) => {
  const { titulo } = req.body
  const novaTarefa = {
    id: proximoId++,
    titulo: titulo,
    concluida: false
  }
  tarefas.push(novaTarefa)
  res.status(201).json(novaTarefa)
})

// PUT /tarefas/:id → marca uma tarefa como concluída
app.put('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const tarefa = tarefas.find(t => t.id === id)

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' })
  }

  tarefa.concluida = !tarefa.concluida
  res.json(tarefa)
})

// DELETE /tarefas/:id → deleta uma tarefa
app.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id)
  tarefas = tarefas.filter(t => t.id !== id)
  res.status(204).send()
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})