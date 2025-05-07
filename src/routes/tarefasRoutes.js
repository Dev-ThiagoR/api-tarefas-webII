const express = require('express');
const tarefasController = require('../controllers/tarefasController');
const validateTarefa = require('../middlewares/validateTarefa');

const router = express.Router();

router.get('/tarefas', tarefasController.listar);
router.get('/tarefas/:id', tarefasController.buscarPorId);
router.post('/tarefas', validateTarefa, tarefasController.criar);
router.put('/tarefas/:id', validateTarefa, tarefasController.atualizar);
router.patch('/tarefas/:id/concluir', tarefasController.concluir);
router.delete('/tarefas/:id', tarefasController.deletar);

module.exports = router;
