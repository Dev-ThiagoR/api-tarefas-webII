const tarefasService = require('../services/tarefasService');

const tarefasController = {
  listar: (req, res) => {
    const tarefas = tarefasService.listar(req.query);
    res.status(200).json(tarefas);
  },

  buscarPorId: (req, res) => {
    const tarefa = tarefasService.buscarPorId(req.params.id);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.status(200).json(tarefa);
  },

  criar: (req, res) => {
    const tarefa = tarefasService.criar(req.body);
    res.status(201).json(tarefa);
  },

  atualizar: (req, res) => {
    const tarefa = tarefasService.atualizar(req.params.id, req.body);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.status(200).json(tarefa);
  },

  concluir: (req, res) => {
    const tarefa = tarefasService.concluir(req.params.id);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.status(200).json(tarefa);
  },

  deletar: (req, res) => {
    const tarefa = tarefasService.deletar(req.params.id);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.status(204).send();
  },
};

module.exports = tarefasController;
