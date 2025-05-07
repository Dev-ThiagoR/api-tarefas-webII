const db = require('../database/fakeDb');
const { v4: uuidv4 } = require('uuid');

const tarefasService = {
  listar: (filtros) => {
    if (filtros.concluida !== undefined) {
      return db.tarefas.filter(tarefa => tarefa.concluida === filtros.concluida);
    }
    return db.tarefas;
  },
  
  buscarPorId: (id) => db.tarefas.find(tarefa => tarefa.id === id),

  criar: (tarefa) => {
    const novaTarefa = { ...tarefa, id: uuidv4() };
    db.tarefas.push(novaTarefa);
    return novaTarefa;
  },

  atualizar: (id, dadosAtualizados) => {
    const tarefaIndex = db.tarefas.findIndex(tarefa => tarefa.id === id);
    if (tarefaIndex === -1) return null;

    db.tarefas[tarefaIndex] = { ...db.tarefas[tarefaIndex], ...dadosAtualizados };
    return db.tarefas[tarefaIndex];
  },

  deletar: (id) => {
    const tarefaIndex = db.tarefas.findIndex(tarefa => tarefa.id === id);
    if (tarefaIndex === -1) return null;

    return db.tarefas.splice(tarefaIndex, 1);
  },

  concluir: (id) => {
    const tarefa = db.tarefas.find(tarefa => tarefa.id === id);
    if (!tarefa) return null;
    
    tarefa.concluida = true;
    return tarefa;
  },
};

module.exports = tarefasService;
