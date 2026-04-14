const API = 'http://localhost:3000'

// Busca e exibe todas as tarefas ao carregar a página
async function carregarTarefas() {
  const resposta = await fetch(`${API}/tarefas`)
  const tarefas = await resposta.json()

  const lista = document.getElementById('listaTarefas')
  lista.innerHTML = ''

  tarefas.forEach(tarefa => {
    const li = document.createElement('li')

    li.innerHTML = `
      <span class="titulo ${tarefa.concluida ? 'concluida' : ''}">
        ${tarefa.titulo}
      </span>
      <button class="btn-concluir" onclick="concluirTarefa(${tarefa.id})">
        ✓
      </button>
      <button class="btn-deletar" onclick="deletarTarefa(${tarefa.id})">
        ✕
      </button>
    `
    lista.appendChild(li)
  })
}

// Cria uma nova tarefa
async function criarTarefa() {
  const input = document.getElementById('inputTarefa')
  const titulo = input.value.trim()

  if (!titulo) return // não faz nada se o campo estiver vazio

  await fetch(`${API}/tarefas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo })
  })

  input.value = ''      // limpa o campo
  carregarTarefas()     // atualiza a lista
}

// Alterna uma tarefa entre concluída e não concluída
async function concluirTarefa(id) {
  await fetch(`${API}/tarefas/${id}`, {
    method: 'PUT'
  })
  carregarTarefas()
}

// Deleta uma tarefa
async function deletarTarefa(id) {
  await fetch(`${API}/tarefas/${id}`, {
    method: 'DELETE'
  })
  carregarTarefas()
}

// Carrega as tarefas assim que a página abre
carregarTarefas()