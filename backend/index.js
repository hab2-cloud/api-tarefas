const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

// GET /tarefas → retorna todas as tarefas
app.get('/tarefas', async (req, res) => {
  const tarefas = await prisma.tarefa.findMany()
  res.json(tarefas)
})

// POST /tarefas → cria uma nova tarefa
app.post('/tarefas', async (req, res) => {
  const { titulo } = req.body
  const novaTarefa = await prisma.tarefa.create({
    data: { titulo }
  })
  res.status(201).json(novaTarefa)
})

// PUT /tarefas/:id → alterna concluída/não concluída
app.put('/tarefas/:id', async (req, res) => {
  const id = parseInt(req.params.id)

  const tarefa = await prisma.tarefa.findUnique({ where: { id } })

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' })
  }

  const atualizada = await prisma.tarefa.update({
    where: { id },
    data: { concluida: !tarefa.concluida }
  })

  res.json(atualizada)
})

// DELETE /tarefas/:id → deleta uma tarefa
app.delete('/tarefas/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  await prisma.tarefa.delete({ where: { id } })
  res.status(204).send()
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})